import React, { Component } from 'react';
import './style.scss'
class Pop extends Component {
    render() {
      console.log( this.props.id)
        return (
            <div id="pop">
                <div className="popup"
                style={this.props.sty}>
                    <div className="hint"  style={this.props.heig}>
                        <div className="text">
                        <p>{this.props.val}</p> 
                        {this.props.p}
                        </div> 
                    </div>
                     <div className="noyes">
                         <span className="no" onClick={()=>this.handeldelet()}>
                             {this.props.no}
                         </span>
                       <span className="yes"
                       onClick={this.idfun.bind(this)}
                       >{this.props.ye}</span>
                     </div>
                </div>
            </div>
        );
    } 
    idfun(){
        switch( this.props.id){
            case 1:
                return this.props.pos.history.push("/login/weixin/confirm")
            case 2:
                return this.props.pos.history.push("/login/qq/confirm")
            case 3:
                return this.props.pos.history.push("/login/login/login")
            case 4:
                return this.props.pos.history.push("/login/register")
        }
    }
    handeldelet=()=>{
        // alert(1)
        // console.log(this.props,999)
        this.props.delect(false)
    }
}

export default Pop;