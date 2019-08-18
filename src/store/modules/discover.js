import api from '../../utils/api'
import {get} from '../../utils/request'
//state
const initialState = {
    recipeList:[],
    wikipediaListData :[],
    userInfo:[]
}

//type
//菜单数据
const SET_RECIPE_LIST = 'discover/set_recipe_list'
//设置百科下的数据
const SET_WIKIPEDIA_LIST = 'discover/set_wikipedia_list'
//设置用户数据
const SET_USERINFO_LIST = 'discover/set_userinfo_list'

//reducer
export default (state=initialState,action)=>{
    switch (action.type) {
        case SET_RECIPE_LIST:
            return {
                ...state,
                recipeList:action.value
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
        default:
            return state;
    }
}

//同步action
//设置菜单数据
const setReciprListAcrion = (value)=>({
    type:SET_RECIPE_LIST,
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

//异步action
//请求菜单信息
export const requestRecipeList = ()=>async(dispatch)=>{
    let {data} = await get(api.GET_DISCOVER_RECIPE_LIST_API);
    dispatch(setReciprListAcrion(data));
}
//请求百科数据
export const requestWikipediaList = ()=> async(dispatch)=>{
    let {data} = await get(api.GET_DISCOVER_WIKIPEDIA_LIST_API)
    dispatch(setWikepediaListAction(data));
}
//请求用户信息
export const requestUserInfoList = ()=> async (dispatch)=>{
    let {data} = await get(api.GET_DISCOVER_USERINFO_LIST_API);
    console.log(data);
    dispatch(setUserInfoListAction(data));
}