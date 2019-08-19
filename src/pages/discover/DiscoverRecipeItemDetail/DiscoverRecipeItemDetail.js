import React, {  } from 'react';
import {connect} from 'react-redux'
import './style.scss'
import AppHeader from '../../../components/app-header/app-header'
const DiscoverRecipeItemDetail = (props)=>{
    const goBack = ()=>{
        props.history.goBack();
    }
    return (
        <div className="page subpage" id="recipe-item-detail">
            <AppHeader left={
                <span className="iconfont icon-thinBack"></span>
            } right={
                <div>
                    <span className="iconfont icon-kLike"></span>
                    <span className="iconfont icon-transmit"></span>
                </div>
            } leftClick={goBack}/>
            <h1>发现页菜谱详情页</h1>
        </div>
    )
}


const mapStateToProps = (state)=>({
})

const mapDispatchToProps = (dispatch)=>({
    // requestSearchUserInfoList(id){
    //     let action = requestSearchUserInfoList(id);
    //     dispatch(action);
    // }
})

export default connect(mapStateToProps,mapDispatchToProps)(DiscoverRecipeItemDetail);