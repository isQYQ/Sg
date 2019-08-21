import api from '../../utils/api'
import { get } from '../../utils/request'

const SET_LOGIN_STATUS = 'user/set_login_status';

//state
const initialState = {
    isLogin: false,
    loginTip: '发送验证码',
    userInfo: {}
}

//type



//reducer
export default (state=initialState,action)=>{
    switch (action.type) {
        case SET_LOGIN_STATUS:
            return {
                ...state,
                isLogin: action.value
            };
        default:
            return state;
    }
}



//同步action
const setLoginStatusAction = (value)=>({
    type: SET_LOGIN_STATUS,
    value
})



//异步action
export const requestLoginAction = (email,password)=> async (dispatch)=>{
    //登录账号
    try {
        let result = await get('/userController/login',{email,
        password})
        let action = setLoginStatusAction(true);
        dispatch(action);
        console.log(result)
        // document.cookie = 'user=11'
        // console.log(document.cookie.split('; '))

    }catch{
        console.log('登录失败了')
    }


    //获取对应账号收藏菜谱数据
    try {
        let result =await get(api.LOGIN_MENU_API,{id:'1'})
        let action = setLoginStatusAction(true);
        dispatch(action);
        console.log(result)
    }catch{
        console.log('获取菜谱失败了')
    }

    //获取对应账号收藏文章数据
    try {
        let result =await get(api.LOGIN_ARTICLE_API,{id:'1'})
        let action = setLoginStatusAction(true);
        dispatch(action);
        console.log(result)
    }catch{
        console.log('获取文章失败了')
    }




    // try {
    //     let result =await get('/userController/getIdolById',{id:'1'})
    //     let action = setLoginStatusAction(true);
    //     dispatch(action);
    //     console.log(result)
    // }catch{
    //     console.log('登录失败了')
    // }
    // try {
    //     let result =await get('/userController/getFansById',{id:'1'})
    //     let action = setLoginStatusAction(true);
    //     dispatch(action);
    //     console.log(result)
    // }catch{
    //     console.log('登录失败了')
    // }
}