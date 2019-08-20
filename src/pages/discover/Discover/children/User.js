import React,{useEffect} from 'react'
import AppScroll from '../../../../components/app-scroll/app-scroll'
import {setSearchUserInfoAction} from '../../../../store/modules/discover'
import {connect} from 'react-redux'
const User = (props)=>{
    useEffect(()=>{
        props.requestSearchUserInfoList([])
        return ()=>{
            //清空serchData
            props.requestSearchUserInfoList([]);
        }
    },[])
    let {data,searchData} = props;
    const toUserInfo = (id)=>{
        console.log(1)
        props.history.push(`/user/info/${id}`)
    }
    return (
        <AppScroll className="user box">
            {
                searchData.length !== 0
                    ?
                (
                    <div
                        className="list-item"
                        key={searchData.id}
                        onClick={()=>toUserInfo(searchData.id)}
                    >
                        <span className="pic"><img src={searchData.pic} alt=""/></span>
                        <span className="name">{searchData.name}</span>
                        <span className="iconfont icon-next"></span>
                    </div>
                )
                    :
                data.map(item=>(
                    <div
                        className="list-item"
                        key={item.id}
                        onClick={()=>toUserInfo(item.id)}
                    >
                        <span className="pic"><img src={item.pic} alt=""/></span>
                        <span className="name">{item.name}</span>
                        <span className="iconfont icon-next"></span>
                    </div>
                ))
            }
        </AppScroll>
    )
}

const mapStateToProps = (state)=>({
    searchData : state.discover.searchUserInfo
})
const mapDispatchToProps = (dispatch)=>({
    requestSearchUserInfoList(data){
        dispatch(setSearchUserInfoAction(data));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(User);