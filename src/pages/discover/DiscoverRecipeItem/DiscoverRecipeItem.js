import React,{useEffect} from 'react';
import AppHeader from '../../../components/app-header/app-header'
import AppScroll from '../../../components/app-scroll/app-scroll'
import {connect} from 'react-redux'
import {requestRecipeItemList} from '../../../store/modules/discover'

import './style.scss'

const DiscoverRecipeItem = (props)=>{
    const back = ()=>{
        props.history.goBack();
    }
    useEffect(
        ()=>{
            props.requestRecipeItemList(props.location.state);
        }
    ,[])
    let {typeName} = props.location.state;
    const toRecipeDetail = (id)=>{
        props.history.push(`/discover/recipe/detail/${id}`)
    }
    return (
        <div className="page" id="discover-recipe-item">
            <AppHeader className="recipe-item-scroll"
                title={typeName}
                left={
                    <span className="iconfont icon-back"></span>
                }
                leftClick={back}
            />
            <AppScroll className="recipe-item-scroll">
                {
                    props.recipeItemList.map(item=>(
                        <div key={item.id} className="recpie-item" onClick={()=>toRecipeDetail(item.id)}>
                            <span className="pic">
                                <img src={item.menuPic} alt=""/>
                            </span>

                            <div className="mask desc">
                                <span>{item.menuName}</span>
                                <p className="user">
                                    {item.createUserId.name}
                                    <img src={item.createUserId.pic} alt=""/>
                                </p>

                            </div>
                        </div>
                    ))
                }
            </AppScroll>
        </div>
    )
}

const mapStateToProps = (state)=>({
    recipeItemList:state.discover.recipeItemList
})

const mapDispatchToProps = (dispatch)=>({
    requestRecipeItemList(params){
        let action = requestRecipeItemList(params);
        dispatch(action)
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(DiscoverRecipeItem);