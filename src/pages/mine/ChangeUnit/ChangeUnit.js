import React, {useState} from 'react'
import './style.scss'
import AppHeader from '../../../components/app-header/app-header';
const ChangeUnit = (props)=>{
    const unitList = [
        {id: 1, name: '公制单位', icon:'icon-like', isSelect: 'a'},
        {id: 2, name: '美式单位', icon:'icon-like', isSelect: 'show'}
    ]
    const [isSelectA,setIsSelectA] = useState(true)
    const [isSelectB,setIsSelectB] = useState(false)
    return (
        <div className="page subpage" id="change-unit">
            <AppHeader title='计量单位'
                left={<span className="iconfont icon-back"></span>}
                leftClick={()=>{props.history.goBack()}}
            />
            <div className="content">
                {/* {
                    unitList.map(item=>(
                        <div className='item' key={item.id} onClick={()=>{}}>
                            <span>{item.name}</span>
                            {item.isSelect ? <span className={`iconfont ${item.icon}`}></span> : ''}
                        </div>
                    ))
                } */}
                 <div className='item'  onClick={()=>{setIsSelectA(true);setIsSelectB(false);}}>
                            <span>公制单位</span>
                            {isSelectA ? <span className={`iconfont icon-like`}></span> : ''}
                </div>
                <div className='item'  onClick={()=>{setIsSelectA(false);setIsSelectB(true);}}>
                            <span>美式单位</span>
                            {isSelectB ? <span className={`iconfont icon-like`}></span> : ''}
                </div>

            </div>
        </div>
    )
}

export default ChangeUnit;