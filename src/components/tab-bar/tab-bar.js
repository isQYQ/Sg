import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.scss'

export default (props)=>{
    const navList = [
        {id: 1, name: '首页', path: '/home',icon:'icon-home'},
<<<<<<< HEAD
        {id: 2, name: '搜索', path: '/discover',icon:'icon-search'},
=======
        {id: 2, name: '发现', path: '/discover',icon:'icon-search'},
>>>>>>> 940fd1beecb5488a45f809f9604a21232fbc1862
        {id: 3, name: '文章', path: '/article',icon:'icon-article'},
        {id: 4, name: '我的', path: '/mine',icon:'icon-mine'},
    ];
    return (
        <nav id="tab-bar" className="border-top">
        {
            navList.map(item=>(
                <NavLink className="tab-item" key={item.id} to={item.path}>
                    <span className={`iconfont ${item.icon}`}></span>
                    <span>{item.name}</span>
                </NavLink>
            ))
        }
        </nav>
    )
}