import React, { useEffect } from 'react';
import {requestSearchUserInfoList} from '../../../store/modules/discover'
import AppScroll from '../../../components/app-scroll/app-scroll'
import AppHeader from '../../../components/app-header/app-header'
import {requestFanNumber,requestFocusNumber,requestUserLikeRecipeList} from '../../../store/modules/user'
import {connect} from 'react-redux'
import './style.scss'

const UserInfo = (props)=>{
    const toDetail = (id)=>{
        props.history.push(`/discover/recipe/detail/${id}`)
    }
    useEffect(()=>{
        let id = props.match.params.id;
        props.requestSearchUserInfoList(id);
        props.requestFanNumber(id);
        props.requestFocusNumber(id);
        props.requestUserLikeRecipeList(id);
    },[])
    const goBack = ()=>{
        props.history.goBack();
        console.log(props)
    }
    let {userInfo,fansNum,focusNum,recipeList} = props;
    return (
        <div className="page subpage" id="user-info">
            <AppHeader className="header" title="用户信息" left={
                <span className="iconfont icon-back"></span>
            } leftClick={goBack}/>
            <div className="content">
                <div className="pic"><img src={userInfo.pic} alt=""/></div>
                <p className="name">{userInfo.name}</p>
                <p className="fans">
                    <span>粉丝 {fansNum}</span>
                    <span>关注 {focusNum}</span>
                </p>
                <p className="desc">{userInfo.personalInfo}</p>
                <button className="btn">关注</button>
            </div>
            <button className="my-recipeBtn">菜谱书</button>
            <AppScroll className="user-like">
                {
                    recipeList.map(item=>(
                        <div key={item.id} className="recipe-item" onClick={()=>toDetail(item.id)}>
                            <img src={item.menuPic} alt=""/>
                            <div className="mask desc">
                                <p>{item.menuName}</p>
                            </div>
                        </div>
                    ))
                }
            </AppScroll>
        </div>
    );
}

const mapStateToProps = (state)=>({
    userInfo : state.discover.searchUserInfo,
    fansNum:state.user.fansNumber,
    focusNum:state.user.focusNumber,
    recipeList:state.user.userLikeRecipeList
})

const mapDispatchToProps = (dispatch)=>({
    requestSearchUserInfoList(id){
        let action = requestSearchUserInfoList(id);
        dispatch(action);
    },
    requestFanNumber(id){
        let action = requestFanNumber(id);
        dispatch(action);
    },
    requestFocusNumber(id){
        let action = requestFocusNumber(id);
        dispatch(action);
    },
    requestUserLikeRecipeList(id){
        let action = requestUserLikeRecipeList(id);
        dispatch(action);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(UserInfo);