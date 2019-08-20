import React from 'react'
import AppScroll from '../../../../components/app-scroll/app-scroll'
const User = (props)=>{
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

export default User;