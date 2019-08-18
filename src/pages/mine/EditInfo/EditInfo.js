import React from 'react'
import './style.scss'
import AppHeader from '../../../components/app-header/app-header';

const EditInfo = (props)=>{
    return (
        <div className="page subpage" id="edit-info">
             <AppHeader title='编辑信息'
                left={<span className="iconfont icon-back"></span>}
                right={<span className='right'>完成</span>}
                leftClick={()=>{props.history.goBack()}}
            />
        </div>
    )
}

export default EditInfo;