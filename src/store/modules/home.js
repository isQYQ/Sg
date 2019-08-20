import {get} from '../../utils/request'
import api from '../../utils/api'
//state
const initialState = {
    homeRecipeList:[],
    // targetRecipe:{}
}


//type
const SET_RECIPE_LIST = 'home/set_recipe_list'
// const SET_RECIPE_BY_ID = 'home/set_recipe_by_id'



//reducer
export default (state=initialState,action)=>{
    switch (action.type) {
        case SET_RECIPE_LIST:
            return {
                ...state,
                homeRecipeList:action.value
            }
        // case SET_RECIPE_BY_ID:
        //     return {
        //         ...state,
        //         targetRecipe:homeRecipeList.filter(item=>{
        //             return item.id === action.value
        //         })
        //     }

        default:
            return state;
    }
}

//同步action
const setHomeRecipeList = (value)=>({
    type : SET_RECIPE_LIST,
    value
})
// const setTargetRecipeById = (value)=>({
//     type:SET_RECIPE_BY_ID,
//     value
// })



//异步action
export const requestHomeRecipeList = (id)=> async(dispatch)=>{
    let {data} = await get(api.REQUEST_HOME_RECIPE_LIST);
    // let obj = data.filter(item=>item.id === id)
    // console.log(id)
    dispatch(setHomeRecipeList(data));
    // id && dispatch(setTargetRecipeById(id));
}
