import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

export default class Modal extends Component{
    el = document.createElement('div');
    render(){
        return ReactDOM.createPortal(
            (<div className='modal'>
               <div className="cover">
                    <div className="content">
                            <div className='title'>
                                <img src="/images/logo2.png" alt=""/>
                                <p>喜欢"食光"吗？</p>
                                <p>轻点星形以在App Store中评分</p>
                            </div>
                            <div className='star'>
                                <img src="/images/star.png" alt=""/>
                            </div>
                            <p className='btn' onClick={()=>this.props.btnAction()}>以后</p>
                        </div>
               </div>
            </div>
            ),
            this.el
        )
    }
    componentDidMount(){
        document.querySelector('#modal-root').appendChild(this.el)
    }
    componentWillUnmount(){
        document.querySelector('#modal-root').removeChild(this.el)
    }
}
