import React, { Component } from 'react';
import Pop from '../../../components/pop-up/pop-up'
import './style.scss'
class DirectLogin extends Component {
    state={
        block:false,
        value:'',
        p:'',
        yes:'',
        no:"暂不",
        ye:"确认",
        sty:{height:"105px",background:" #fff",},
        heig:{height:"57px"},
        id:''
    }
    render() {
        return (
            <>
            {this.state.block&&<Pop 
            pos={this.props}
            delect={this.delect}
            val={this.state.value}
            no={this.state.no}
            ye={this.state.ye}
            p={this.state.p}
            sty={this.state.sty}
            heig={this.state.heig}
            id={this.state.id}
            />}
<div className="page subpage" id="direct-login">
        <div className="directcenter">
            <p>跳过</p>
            <div className="logoimg">
                <img src="/images/lo.png" alt=""/>
            </div>
            <div className="wxbtn" 
            onClick={this.btnwx.bind(this)}
            >
                <span>
                    <img src="/images/wx.png" alt=""/>
                </span>
            <span>微信登录</span>
            </div>
            <div className="qqbtn"
            onClick={this.btnqq.bind(this)}>
                <span>
                    <img src="/images/qq_03.jpg" alt=""/>
                </span>
                <span>QQ登录</span>
            </div>
            <div className="emaildirect"
            onClick={this.btnemail.bind(this)}
            >
                <span>使用邮箱登录</span>
            </div>
            <div className="okaccounts"
                onClick={this.regisfun.bind(this)}
                >
                <span>没有邮箱的账号？&nbsp;&nbsp;注册</span>
            </div>
            <div className="clause">
                <span>一经注册,&nbsp;&nbsp;代表您同意时光的隐私政策</span>
            </div>
        </div>
</div>
</>
        );   
    }       
            btnwx(){
            this.setState({
                block:true,
                value:'"食光"想要打开"微信"',
                no:"暂不",
                ye:"确认",
                id:1
            })
            };
            btnqq(){
            this.setState({
                block:true,
                value:'"食光"想要打开"QQ"',
                no:"暂不",
                ye:"确认",
                id:2
            })
            };
            btnemail(){
                this.setState({
                block:true,
                value:'"食光"想要登录"邮箱"',
                no:"暂不",
                ye:"确认",
                id:3
                })
                };
            regisfun(){
                this.setState({
                block:true,
                value:'注册即可享受所有功能',
                p:<p>收藏菜谱,&nbsp;关注大厨,&nbsp;及更多</p>,
                ye:"注册",
                sty:{height:"125px",background:" #EEE6E0 ",},
                heig:{height:"88px"},
                id:4
                }) 
            };


            delect=(v)=>{
                console.log(v)
                this.setState({block:v})
            }
        }
export default DirectLogin;