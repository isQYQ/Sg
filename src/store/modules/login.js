import api from '../../utils/api'
import {get }from '../../utils/request'
import { Toast } from 'antd-mobile';
import 'antd-mobile/lib/toast/style/css';

//state
const initialState = {
    isLogin: true,
    focusNumber:true,
}
//type
const CHANGE_LOGIN_TIP = 'user/change_login_tip';
const CHANGE_REG_TIP = 'user/change_reg_tip';

//reducer
export default (state = initialState, action)=>{
    switch (action.type) {
        case CHANGE_LOGIN_TIP:
            return {
                ...state,
                loginTip: action.value
            };
            case CHANGE_REG_TIP :
            return {
                ...state,
                focusNumber: action.value
            };
        default:
            return state;
    }
};

const setLoginStatusAction = (value)=>({
    type: CHANGE_LOGIN_TIP,
    value
})
const setRegStatusAction = (value)=>({
    type: CHANGE_REG_TIP,
    value
})


//请求用户名和密码
export const requestLoginAction = (email,password)=> async (dispatch)=>{
    console.log(email)
    console.log(password)
    //登录账号
    try {
        await get(api.GET_DIRECT_NAME,{email,password})
        let action = setLoginStatusAction(true);
        dispatch(action);
       return Toast.info('登录',2);

    }catch{
        console.log("登录失败")
    }
}
//注册
export const requestSendCodeAction = (email,name,password)=> async (dispatch)=>{
    //登录账号
    try {
        console.log(email)
        console.log(password)
        let result = await get(api.GET_DIRECT_EMAIL,{email,name,password})
        console.log(result)
        // let action = setRegStatusAction(true);
        // dispatch(action);
        // console.log(result)
        // document.cookie = 'user=11'
        console.log(document.cookie)
        console.log("注册成功")
    }catch{
        console.log("注册失败")
        return Toast.info('注册失败',2);
    }
}
//同步action


