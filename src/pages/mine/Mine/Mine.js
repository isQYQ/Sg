import React, { Component } from 'react';
import AppHeader from '../../../components/app-header/app-header';
import AppScroll from '../../../components/app-scroll/app-scroll';
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
        let picList = [
            {id: 1, picUrl: '/images/my_photo1.png', name: '酸菜鱼'},
            {id: 2, picUrl: '/images/my_photo2.png', name: '口水鸡'},
            {id: 3, picUrl: '/images/my_photo3.png', name: '卤水拼盘'},
            {id: 4, picUrl: '/images/my_photo4.png', name: '越南春卷'},
        ]
        return (
            <div className='page' id='mine'>
                <AppHeader title='我的'
                    left={<span className="iconfont icon-message"></span>}
                    right={<span className='iconfont icon-set'></span>}
                    leftClick={()=>{this.props.history.push('/mine/message')}}
                    rightClick={()=>{this.props.history.push('/mine/set')}}
                />
                <AppScroll className="content">
                    <div className="info">
                        <span><img src="/images/pic.png" alt=""/></span>
                        <span>傻蛋</span>
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
                           {
                               picList.map(item=>(
                                   <span key={item.id} className='item' onClick={()=>this.toDetail(item.id)}>
                                       <img src={item.picUrl} alt=""/>
                                       <span className='name'>{item.name}</span>
                                    </span>
                               ))
                           }
                        </div>
                    </div>
                    {/* <div>账号：<input type='text' value={email} onChange={this.emailChangeAction}/></div>
                    <div>密码：<input type='text' value={password} onChange={this.pswChangeAction}/></div>
                    <div onClick={()=>this.sendAction(email,password)}>登录</div> */}
                </AppScroll>
            </div>
        );
    }
    emailChangeAction = (ev)=>{
        this.setState({email:ev.target.value})
    }
    pswChangeAction = (ev)=>{
        this.setState({password:ev.target.value})
    }
    sendAction(email,psw){
        this.props.sendAction(email,psw);
        this.props.history.push('/home')
    }
    toDetail(id){
        this.props.history.push(`/discover/recipe/detail/${id}`)
    }
}
const mapStateToProps = (state)=>({

})
const mapDispatchToProps = (dispatch)=>({
    sendAction(email,password){
        let action = requestLoginAction(email,password);
        dispatch(action);
        // window.location.reload();
        //admin@qq.com


    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Mine);