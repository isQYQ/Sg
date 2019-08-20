import api from '../../utils/api'
import {get} from '../../utils/request'
//state
const initialState = {
    recipeList:[],
    recipeItemList:[],
    wikipediaListData :[],
    userInfo:[],
    searchUserInfo:[]
}

//type
//菜单数据
const SET_RECIPE_LIST = 'discover/set_recipe_list'
//菜谱分类列表
const SET_RECIPE_ITEM_LIST = 'discover/set_recipe_item_list'
//设置百科下的数据
const SET_WIKIPEDIA_LIST = 'discover/set_wikipedia_list'
//设置用户数据
const SET_USERINFO_LIST = 'discover/set_userinfo_list'
//设置搜索出来的用户信息
const SET_SEARCHINFO_LIST = 'discover/set_search_userInfo_list'


//reducer
export default (state=initialState,action)=>{
    switch (action.type) {
        case SET_RECIPE_LIST:
            return {
                ...state,
                recipeList:action.value
            }
        case SET_RECIPE_ITEM_LIST:
            return {
                ...state,
                recipeItemList:action.value
            }
        case SET_WIKIPEDIA_LIST:
            return {
                ...state,
                wikipediaListData:action.value
            }
        case SET_USERINFO_LIST:
            return {
                ...state,
                userInfo:action.value
            }
        case SET_SEARCHINFO_LIST:
            return {
                ...state,
                searchUserInfo:action.value
            }
        default:
            return state;
    }
}

//同步action
//设置菜单数据
const setReciprListAction = (value)=>({
    type:SET_RECIPE_LIST,
    value
})
//菜单选项下的列表
const setRecipeItemListAction = (value)=>({
    type:SET_RECIPE_ITEM_LIST,
    value
})
//设置百科数据
const setWikepediaListAction = (value)=>({
    type:SET_WIKIPEDIA_LIST,
    value
})
//设置用户数据
const setUserInfoListAction = (value)=>({
    type:SET_USERINFO_LIST,
    value
})
//设置搜索出来的用户信息
export const setSearchUserInfoAction = (value)=>({
    type:SET_SEARCHINFO_LIST,
    value
})

//异步action
//请求菜单信息
export const requestRecipeList = ()=>async(dispatch)=>{
    let {data} = await get(api.GET_DISCOVER_RECIPE_LIST_API);
    dispatch(setReciprListAction(data));
}
//菜单选项下的列表
export const requestRecipeItemList = (params)=>async(dispatch)=>{
    let {data} = await get(api.GET_DISCOVER_RECIPE_ITEM_LIST_API,{
        ...params
    })
    dispatch(setRecipeItemListAction(data));
}
//请求百科数据
export const requestWikipediaList = ()=> async(dispatch)=>{
    let {data} = await get(api.GET_DISCOVER_WIKIPEDIA_LIST_API)
    dispatch(setWikepediaListAction(data));
}
//请求用户信息
export const requestUserInfoList = ()=> async (dispatch)=>{
    let {data} = await get(api.GET_DISCOVER_USERINFO_LIST_API);
    dispatch(setUserInfoListAction(data));
}
//请求搜索出来的用户信息
export const requestSearchUserInfoList = (id)=> async(dispatch)=>{
    let {data} = await get(api.GET_SEARCH_USER_INFO_API,{
        id
    });
    console.log(data)
    dispatch(setSearchUserInfoAction(data));

}