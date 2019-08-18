import React from 'react'
import './style.scss'
import AppHeader from '../../../components/app-header/app-header';
const ChangePassword = (props)=>{
    return (
        <div className="page subpage" id="change-pws">
            <AppHeader title='更改密码'
                left={<span className="iconfont icon-back"></span>}
                right={<span className='right'>完成</span>}
                leftClick={()=>{props.history.goBack()}}
            />
            <div className='content'>
                <input type='text' placeholder='当前密码'/>
                <input type='text' placeholder='新密码' className='border-bottom'/>
                <input type='text' placeholder='确认新密码'/>
            </div>
        </div>
    )
}

export default ChangePassword;