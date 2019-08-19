import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import AppHeader from '../../../components/app-header/app-header'
import './style.scss'
import { Toast } from 'antd-mobile';
import 'antd-mobile/lib/toast/style/css';  
class Register extends Component {
    state={
        email:'',
        name:'',
        password:''
    }
    render() {
        let {email,name,password} =this.state;
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
                       value={name}
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
                   /*onClick={()=>endfun(email,name,password)}*/
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
        this.setState({email:ev.target.email})
    };
    namefun=(ev)=>{
        this.setState({name:ev.target.name})
    };
    passwordfun=(ev)=>{
        this.setState({password:ev.target.password})
    }
}

const mapStateToProps =(state)=>({

})
const mapDispatchToProps=(dispatch)=>({
           /*endfun(email,name,password){
               if(!(/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(email))){
                Toast.info('邮箱格式不正确',2);
               }else if(!(/^[\u4e00-\u9fa5]{0,}$/.test(name))){
                Toast.info('请输入中文昵称',2);
               }else if(!(/^[A-Za-z0-9]{4,40}$/.test(password))){
                Toast.info('密码为数字或英文字母',2);
               }else{

               }
           }*/
})

export default connect(mapDispatchToProps,mapStateToProps)(Register);