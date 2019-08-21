import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import AppHeader from '../../../components/app-header/app-header'
import {requestSendCodeAction} from '../../../store/modules/login'
import './style.scss'
import { Toast } from 'antd-mobile';
import 'antd-mobile/lib/toast/style/css';
class Register extends Component {
    state={
        email:'',
        nam:'',
        password:''
    }
    render() {
        let {endfun} =this.props;
        let {email,nam,password} =this.state;
        return (
            <div className="page subpage" id="register">
                <AppHeader title="注册" className="bgcolor"
                left={ <span className="iconfont icon-back"
                onClick={this.Register.bind(this)}
                ></span>  }
                />
                <div className="emailcenter">
                   <div className="inpemail">
                       <input type="text" placeholder="邮箱"
                       value={email}
                       onChange={this.emailfun}
                       />
                   </div>
                   <div className="inpmine">
                       <input type="text" placeholder="昵称"
                       value={nam}
                       onChange={this.namefun}
                       />
                   </div>
                   <div className="inppassword">
                       <input type="password" placeholder="密码"
                       value={password}
                       onChange={this.passwordfun}
                       />
                   </div>
                   <div className="inpregister"
                   onClick={()=>endfun(email,nam,password)}
                   >
                       <p>注册</p>
                   </div>
                   <div className="nonepass">
                       <p>一经注册,&nbsp;&nbsp;代表您同意食光隐私政策</p>
                   </div>
                   <div className="okregister">
                  <Link to="login/login/login"> <p>已经有了食光账号了,&nbsp;&nbsp;登录</p></Link>
                   </div>
                </div>
            </div>
        );
    }
    Register(){
        this.props.history.goBack();
    };
    emailfun=(ev)=>{
        this.setState({email:ev.target.value})
    };
    namefun=(ev)=>{
        this.setState({nam:ev.target.value})
    };
    passwordfun=(ev)=>{
        this.setState({password:ev.target.value})
    }
}

const mapStateToProps =(state)=>({
    // focusNumber: state.user.focusNumber
})
const mapDispatchToProps=(dispatch)=>({
    endfun(email,nam,password){
            let fa=false;
            if(!(/^\w{2,18}@[0-9a-z]{1,10}(\.[a-z]{2,3}){1,2}$/.test(email))){
                fa=false
               return Toast.info('邮箱格式不正确',2);
               }else{
                fa=true;
               }
             if(!(/^[A-Za-z]{4,40}$/.test(nam))){
                fa=false
              return Toast.info('用户名为英文',2);
               }else{
                fa=true;
               }
            if(!(/^[A-Za-z0-9]{4,40}$/.test(password))){
                fa=false
                return Toast.info('密码为数字或英文字母',2);
               }else{
                fa=true;
               }
            if(fa){
                let action = requestSendCodeAction(email,nam,password);
                console.log(action)
                dispatch(action);
            }else{
                Toast.info('输入有误',2);
            }

           }
})

export default connect(mapStateToProps,mapDispatchToProps)(Register);