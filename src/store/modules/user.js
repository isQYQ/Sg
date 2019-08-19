import api from '../../utils/api'
import {get} from '../../utils/request'
//初始化state
const initialState = {
    fansNumber:null,
    focusNumber:null,
    userLikeRecipeList:[]
}

//reducer
export default (state = initialState,action)=>{
    switch (action.type) {
        case SET_FANS_NUMBER:
            return {
                ...state,
                fansNumber:action.value
            }
        case SET_FOCUS_NUMBER:
            return {
                ...state,
                focusNumber:action.value
            }
        case SET_USER_LIKE_RECIPE_LIST:
            return {
                ...state,
                userLikeRecipeList:action.value
            }
        default:
            return state;
    }
}

//types
//设置粉丝人数
const SET_FANS_NUMBER = 'user/set_fans_number';
//设置关注人数
const SET_FOCUS_NUMBER = 'user/set_focus_number'
//设置用户收藏的菜谱
const SET_USER_LIKE_RECIPE_LIST = 'user/set_user_like_recipe_list'

//同步action
//设置粉丝人数
const setFansNumberAction = (value)=>({
    type:SET_FANS_NUMBER,
    value
})
//设置关注人数
const setFocusNumberAction = (value)=>({
    type:SET_FOCUS_NUMBER,
    value
})
//设置用户收藏的菜谱
const setUserLikeRecipeListAction = (value)=>({
    type:SET_USER_LIKE_RECIPE_LIST,
    value
})

//异步action
//请求粉丝人数
export const requestFanNumber = (id)=> async(dispatch)=>{
    let {data} = await get(api.GET_FANS_NUMBER_API,{
        id
    });
    console.log(data);
    dispatch(setFansNumberAction(data))
}
//请求关注人数
export const requestFocusNumber = (id)=> async(dispatch)=>{
    let {data} = await get(api.GET_FOCUS_NUMBER_API,{
        id
    });
    console.log(data);
    dispatch(setFocusNumberAction(data))
}
//请求用户收藏的菜谱
export const requestUserLikeRecipeList = (id)=> async(dispatch)=>{
    let {data} = await get(api.GET_USER_LIKE_RECIPE_API,{
        id
    })
    console.log(data);
    dispatch(setUserLikeRecipeListAction(data))

}