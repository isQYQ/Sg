import React, { Component } from 'react';
import {Link} from "react-router-dom";
import AppHeader from '../../../components/app-header/app-header'
import './style.scss'
class QQConfirm extends Component {
    render() {
        return (
            <div className="page subpage" id="qq-confirm">
               <AppHeader title="QQ一键登录" className="bgcolor"
                left={ <span className="iconfont icon-back"
                onClick={this.terunfun.bind(this)}
                ></span>  }
                />
                <div className="center">
                    <div className="sglogo">
                         <div className="logoimg">
                         <img src="/images/tx.png" alt=""/>
                         </div>
                    </div>
                    <div className="accountlist">
                        <div className="select border-bottom">
                            <div className="topx">
                             <p>李文欣</p>
                            <p>66666</p>
                            </div>
                            <div className="imgm">
                                <img src="/images/tx.png" alt=""/>
                            </div>
                            <div className="xjt">
                            <img src="/images/jt.png" alt=""/>
                            </div>
                        </div>
                        <div className="addacc">
                            <p>添加账号</p>
                        </div>
                    </div>
                    <div className="textlist">
                         <p>登录后该应用获得以下权限</p>
                         <p>•&nbsp;访问你的详细资料</p>
                         <p>•&nbsp;访问你的基础资料</p>
                    </div>
                    <div className="impower">
                       <Link to="/home">授权并登录</Link> 
                    </div>
                </div>
            </div>
        );
    }
    terunfun(){
        this.props.history.goBack();
    }
}

export default QQConfirm;