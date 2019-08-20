import React,{useState} from 'react'
import {connect} from 'react-redux'
import {requestSearchUserInfoList} from '../../../../store/modules/discover'
import { NoticeBar} from 'antd-mobile';

const Search = (props)=>{
    const [value,setValue] = useState('');
    const [show,setShow] = useState(false)
    let {data,info,requestSearchUserInfoList} = props;
    let noticDOM = '';
    const toSearch = (value)=>{
        let userInfo = data.find(item=>{
            return item.name === value
        })
        {userInfo ? requestSearchUserInfoList(userInfo.id) : setShow(!show)}
    }
    return (
        <div className="search demo">
            <span className="iconfont icon-search"></span>
           {show && <NoticeBar mode="closable" icon={null}>请输入正确的用户名</NoticeBar>}
            {noticDOM}
            <input
                type="text"
                className="search-input"
                placeholder={info}
                value={value}
                onChange={(ev)=>setValue(ev.target.value)}
            />
            <button className="btn" onClick={()=>toSearch(value)}>搜索</button>
        </div>

    )
}
const mapStateToProps = (state)=>({
    searchData : state.discover.searchUserInfo
})
const mapDispatchToProps = (dispatch)=>({
    requestSearchUserInfoList(id){
        let action = requestSearchUserInfoList(id);
        dispatch(action);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Search);