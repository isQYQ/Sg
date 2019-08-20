import React, { Component } from 'react';
import AppHeader from '../../../components/app-header/app-header'
import './style.scss'
class Login extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="page subpage" id="login">

                <AppHeader title="登录" className="bgcolor"
                left={ <span className="iconfont icon-back"
                onClick={this.logobtn.bind(this)}
                ></span>  }
                />
                <div className="emailcenter">
                   <div className="inpemail">
                       <input type="text" placeholder="邮箱"/>
                   </div>
                   <div className="inppassword">
                       <input type="password" placeholder="密码"/>
                   </div>
                   <div className="inpregister">
                       <p>登录</p>
                   </div>
                   <div className="nonepass">
                       <p>忘记密码</p>
                   </div>
                </div>
            </div>
        );
    }
    logobtn(){
        this.props.history.goBack();
    }
}

export default Login;