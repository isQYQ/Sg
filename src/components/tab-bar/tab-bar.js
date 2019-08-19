import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.scss'

export default (props)=>{
    const navList = [
        {id: 1, name: '首页', path: '/home',icon:'icon-home'},
        {id: 2, name: '搜索', path: '/discover',icon:'icon-search'},
        {id: 3, name: '文章', path: '/article',icon:'icon-article'},
        {id: 4, name: '我的', path: '/mine',icon:'icon-mine'},
    ];
    return (
        <nav className="tab-bar border-top">
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