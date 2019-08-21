import React, { Component } from 'react';
import AppHeader from '../../../components/app-header/app-header'
import {requestLoginAction} from '../../../store/modules/login'
import './style.scss'
import {connect} from  'react-redux';
import { Toast } from 'antd-mobile';
import 'antd-mobile/lib/toast/style/css';  
class Login extends Component {
    state={
        email:'',
        password:''
    }
    render() {
        let {directfun} =this.props;
        let {email,password} =this.state;
        return (
            <div className="page subpage" id="login">
                
                <AppHeader title="登录" className="bgcolor"
                left={ <span className="iconfont icon-back"
                onClick={this.logobtn.bind(this)}
                ></span>  }
                />
                <div className="emailcenter">
                   <div className="inpemail">
                       <input type="text" placeholder="邮箱"
                       value={email}
                       onChange={this.namofun}
                       />
                   </div>
                   <div className="inppassword">
                       <input type="password" placeholder="密码"
                       value={password}
                       onChange={this.passfun}
                       />
                   </div>
                   <div className="inpregister"
                    onClick={()=>directfun(email,password)}
                    >
                       <p>登录</p>
                   </div>
                   <div className="nonepass">
                       <p
                       onClick={this.passw.bind(this)}
                       >忘记密码</p>
                   </div>
                </div>
            </div>
        );
    }
    passw(){
        Toast.info('忘就忘了吧!',2);
    }
    logobtn(){
        this.props.history.goBack();
    };
    namofun=(ev)=>{
       this.setState({email:ev.target.value})
    };
    passfun=(ev)=>{
        this.setState({password:ev.target.value})
     } 
}
const mapStateToProps=(state)=>({
    loginTip: state.user.loginTip
})
const mapDispatchToProps=(dispatch)=>({
    directfun(email,password){
    //     let fa=false;
    //     if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(email))){
    //         Toast.info('邮箱格式不正确',2);
    //    }else{
    //       fa=true;
    //    }
    //    if(!(/^[A-Za-z0-9]{4,40}$/.test(password))){
    //         Toast.info('密码不正确',2);
    //    }else{
    //       fa=true;
    //    }
    //    if(fa){
        let action = requestLoginAction(email,password);
            dispatch(action); 
      //}
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);