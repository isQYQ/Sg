import React, { Component } from 'react';
import {Link} from "react-router-dom";
import AppHeader from '../../../components/app-header/app-header'
import './style.scss'
class WeixinConfirm extends Component {
    render() {
        return (
            <div className="page subpage" id="weixin-confirm">
                 <AppHeader 
                left={ <span className="textnone">
                <Link to="/login/direct">关闭</Link>
                </span>}
                />
                <div className="center">
                    <div className="sglogo">
                         <span className="logoimg">
                         <img src="/images/tx.png" alt=""/>
                         </span>
                         <span>食光&nbsp;申请使用:</span>
                    </div>
                    <div className="minexx">
                        <p>你的微信头像、昵称、地区和性别信息</p>
                    </div>
                    <div className="accountlist">
                    <div className="toptext">
                             <p>你可选择使用不同的个人信息登录  </p>
                            </div>
                           <div className="select">
                            <div className="imgm">
                                <img src="/images/tx.png" alt=""/>
                            </div>
                            <div className="topx">
                             <p>李文欣</p>
                            <p>微信个人</p>
                            </div>
                            <div className="xjt">
                            <img src="/images/gx.png" alt=""/>
                            </div>
                        </div>
                        <div className="addacc">
                            <span><img src="/images/tj.png" alt=""/></span>
                            <span>新建用户信息</span>
                        </div>
                    </div>
                    
                    <div className="agreed">
                      <Link to="/home">同意</Link>
                    </div>
                    <div className="turn">
                    <Link to="/login/direct">拒绝</Link>
                      
                    </div>
                </div>
            </div>
        );
    }
}

export default WeixinConfirm;