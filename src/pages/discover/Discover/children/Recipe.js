import React from 'react'
import AppScroll from '../../../../components/app-scroll/app-scroll'
const Recipe = (props)=>{
    let {data} = props;
    const toNextAction = (type,typeId,typeName,clickCount)=>{
        props.history.push({
            pathname:`/discover/recipe/item`,
            state:{
                type,
                typeId,
                typeName,
                clickCount
            }
        })
    }
    return (
        <AppScroll className="recipe box">
            {
                data.map((item,index)=>(
                    <li
                        key={index}
                        className="list-item"
                        onClick={()=>toNextAction(item.type,item.typeId,item.typeName,item.clickCount)}
                    >
                        <div className="mask">
                            <span className="desc">{item.typeName}</span>
                        </div>
                        <img src={item.pic} alt=""/>
                    </li>
                ))
            }
        </AppScroll>
    )
}

export default Recipe;