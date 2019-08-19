import React, { useState,useEffect} from 'react';
import './style.scss'
import Search from './children/Search'
import User from './children/User'
import Recipe from './children/Recipe'
import Wikipe from './children/Wikipe'
import {requestRecipeList,requestWikipediaList, requestUserInfoList} from '../../../store/modules/discover'
import {connect} from 'react-redux'
const navList = [
    {id:1,value:"菜谱"},
    {id:2,value:"百科"},
    {id:3,value:"用户"},
]
const Discover = (props)=>{
    let [selectIndex,setSelectIndex] = useState(0);
    useEffect(
        ()=>{
            props.requestWikipediaList();
            props.requestUserInfoList();
            props.requestRecipeList();
            return;
        }
    ,[props.searchData])
    return (
        <div className="page" id="discover">
            <Search {...props} data={props.userInfoList} info={
                selectIndex === 0 ? '请输入食材名' : (selectIndex === 1 ? '请输入国家名' : '请输入用户名')
            }/>
            <nav className="nav">
                {
                    navList.map((item,index)=>(
                        <li
                            className={"nav-item " + (selectIndex === index ? 'active' :'')}
                            key={item.id}
                            onClick={()=>{
                                setSelectIndex(index)
                            }}
                        >{item.value}</li>
                    ))
                }
            </nav>

                {
                    selectIndex === 0 ? <Recipe data={props.recipeList} {...props}/> : (selectIndex === 1 ? <Wikipe data={props.wikipdiaList}/> :<User data={props.userInfoList} searchData={props.searchData} {...props}/>)
                }

        </div>
    )
}

const mapStateToProps = (state)=>({
    recipeList : state.discover.recipeList,
    wikipdiaList : state.discover.wikipediaListData,
    userInfoList : state.discover.userInfo,
    searchData : state.discover.searchUserInfo
})

const mapDispatchToProps = (dispatch)=>({
    requestRecipeList(){
        let action = requestRecipeList();
        dispatch(action);
    },
    requestWikipediaList(){
        let action = requestWikipediaList();
        dispatch(action)
    },
    requestUserInfoList(){
        let action = requestUserInfoList();
        dispatch(action);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Discover);