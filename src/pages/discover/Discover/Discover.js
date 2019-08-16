import React, { useState } from 'react';
import './style.scss'
import Search from './children/Search'
import User from './children/User'
import Recipe from './children/Recipe'
import Wikipe from './children/Wikipe'
import AppScroll from '../../../components/app-scroll/app-scroll'
const navList = [
    {id:1,value:"菜谱"},
    {id:2,value:"百科"},
    {id:3,value:"用户"},
]
const Discover = ()=>{
    let [selectIndex,setSelectIndex] = useState(0);
    return (
        <div className="page" id="discover">
            <Search/>
            <nav className="nav">
                {
                    navList.map((item,index)=>(
                        <li
                            className={"nav-item " + (selectIndex === index ? 'active' :'')}
                            key={item.id}
                            onClick={()=>{
                                setSelectIndex(index)
                            }}
                        >{item.value}</li>
                    ))
                }
            </nav>
            {/* <AppScroll className="discover-scroll"> */}
                {
                    selectIndex === 0 ? <Recipe/> : (selectIndex === 1 ? <Wikipe/> :<User/>)
                }
            {/* </AppScroll> */}

        </div>
    )
}

export default Discover;