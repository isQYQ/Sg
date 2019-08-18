import React, { Component } from 'react';
import AppHeader from '../../../components/app-header/app-header';
import './style.scss';
import {connect} from 'react-redux'
import {requestLoginAction} from '../../../store/modules/mine'
class Mine extends Component {
    state = {
        email: '',
        password: '',
        showMenu: 'menu',
        showArticle: ''
    }
    render() {
        let { email, password } = this.state
        let {sendAction} = this.props
        return (
            <div className='page' id='mine'>
                <AppHeader title='我的' 
                    left={<span className="iconfont icon-message"></span>}
                    right={<span className='iconfont icon-set'></span>}
                    leftClick={()=>{this.props.history.push('/mine/message')}}
                    rightClick={()=>{this.props.history.push('/mine/set')}}
                />
                <div className="content">
                    <div className="info">
                        <span><img src="" alt=""/></span>
                        <span>用户id</span>
                        <span>粉丝 | 关注</span>
                        <span>这个人懒死了，什么都不想写！</span>
                        <span className='btn'
                            onClick={()=>{this.props.history.push('/mine/edit/info')}}
                        >编辑个人主页</span>
                    </div>
                    <div className="menuAndArticle">
                        <div className='title'>
                            <span className={(this.state.showMenu === 'menu') ? 'active' : ''} 
                                onClick={()=>{this.setState({showMenu:'menu',showArticle:''})}}
                            >菜谱书</span>
                            <span className={(this.state.showArticle === 'art' ? 'active' : '')} 
                                onClick={()=>{this.setState({showArticle:'art',showMenu:''});}}
                            >文章</span>
                        </div>
                        <div className='contentAll'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>  
                    </div>



                    <div>账号：<input type='text' value={email} onChange={this.emailChangeAction}/></div>
                    <div>密码：<input type='text' value={password} onChange={this.pswChangeAction}/></div>
                    <div onClick={()=>sendAction(email,password)}>登录</div>
                </div>
            </div>
        );
    }
    emailChangeAction = (ev)=>{
        this.setState({email:ev.target.value})
    }  
    pswChangeAction = (ev)=>{
        this.setState({password:ev.target.value})
    }
    // componentDidUpdate(){
    //     console.log(document.cookie)
    
    // }
}
const mapStateToProps = (state)=>({

})
const mapDispatchToProps = (dispatch)=>({
    sendAction(email,password){
        let action = requestLoginAction(email,password);
        dispatch(action);
        

    }
})
console.log(1)
export default connect(mapStateToProps,mapDispatchToProps)(Mine);