import React from 'react'
import AppScroll from '../../../../components/app-scroll/app-scroll'
const User = (props)=>{
    let {data} = props;
    console.log(data);
    return (
        <AppScroll className="user box">
            {
                data.map(item=>(
                    <div
                        className="list-item"
                        key={item.id}
                    >
                        <span className="pic"><img src={item.pic} alt=""/></span>
                        <span className="name">{item.name}</span>
                        <span className="iconfont icon-next"></span>
                    </div>
                ))
            }
        </AppScroll>
    )
}

export default User;