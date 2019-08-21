import {get} from '../../utils/request'
import api from '../../utils/api'
//state
const initialState = {
    homeRecipeList:[],

    
}


//type
const SET_RECIPE_LIST = 'home/set_recipe_list' 



//reducer
export default (state=initialState,action)=>{
    switch (action.type) {
        case SET_RECIPE_LIST:
            return {
                ...state,
                homeRecipeList:action.value
            }


        default:
            return state;
    }
}

//同步action
const setHomeRecipeList = (value)=>({
    type : SET_RECIPE_LIST,
    value
})



//异步action
export const requestHomeRecipeList = ()=> async(dispatch)=>{
    let {data} = await get(api.REQUEST_HOME_RECIPE_LIST);
    console.log(data)
    dispatch(setHomeRecipeList(data));
}
