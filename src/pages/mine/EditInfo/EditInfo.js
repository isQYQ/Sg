import React from 'react'
import './style.scss'
import AppHeader from '../../../components/app-header/app-header';

const EditInfo = (props)=>{
    let info = [
        {id: 1, title: '米特波鲁', path: ''},
        {id: 2, title: '个人网页', path: ''},
        {id: 3, title: '个人简介', path: ''}
    ]
    return (
        <div className="page subpage" id="edit-info">
             <AppHeader title='编辑信息'
                left={<span className="iconfont icon-back"></span>}
                right={<span className='right'>完成</span>}
                leftClick={()=>{props.history.goBack()}}
            />
            <div className="content">
                <div className="change">
                    <div className="pic">
                        <img src="/images/pic2.png" alt=""/>
                        <p>更换头像</p>
                    </div>
                </div>
                <div className="info">
                    {
                        info.map(item=>(
                            <div className='item'> 
                                <p key={item.id} className='border-bottom'>{item.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default EditInfo;