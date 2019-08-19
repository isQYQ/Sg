import React from 'react'
import AppScroll from '../../../../components/app-scroll/app-scroll'
import {Link} from 'react-router-dom'
const Wikipe = (props)=>{
    let {data} = props;
    return (
        <AppScroll className="wikipe box">
            {
                data.map(item=>(
                    <Link to={`/discover/wikipedia/detail/${item.id}`} className="wikepedia-item" key={item.id}>
                        <span className="icon">
                            <img src={item.encyPic} alt=""/>
                        </span>
                        <span className="desc">
                            <i className="title">百科</i>
                            <em className="name">{item.encyName}</em>
                        </span>
                    </Link>
                ))
            }
        </AppScroll>
    )
}

export default Wikipe;