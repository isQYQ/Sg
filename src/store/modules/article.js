import {get} from '../../utils/request'
import api from '../../utils/api'

//state
const initialState = {
    articleRequestList:[]
}

//type
const SET_ARTICLE_LIST = 'article/set_article_list'


//reducer
export default (state=initialState,action)=>{
    switch (action.type) {
        case SET_ARTICLE_LIST:
            return {
                ...state,
                articleRequestList:action.value
            }
        default:
            return state;
    }
}

//同步action
const setArticleList = (value)=>({
    type:SET_ARTICLE_LIST,
    value
})


//异步action
export const requestArticleList = ()=> async(dispatch)=>{
    let {data} = await get(api.REQUEST_ARTICLE_RECIPE_LIST);
    dispatch(setArticleList(data));
}
