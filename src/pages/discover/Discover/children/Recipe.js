import React from 'react'
import AppScroll from '../../../../components/app-scroll/app-scroll'
//引入图片
import img1 from '../../../../assets/Discover/recipe/found_photo1.png'
import img2 from '../../../../assets/Discover/recipe/found_photo2.png'
import img3 from '../../../../assets/Discover/recipe/found_photo3.png'
import img4 from '../../../../assets/Discover/recipe/found_photo4.png'
import img5 from '../../../../assets/Discover/recipe/found_photo5.png'
import img6 from '../../../../assets/Discover/recipe/found_photo6.png'
import img7 from '../../../../assets/Discover/recipe/found_photo7.png'
import img8 from '../../../../assets/Discover/recipe/found_photo9.png'
import img9 from '../../../../assets/Discover/recipe/found_photo9.png'
let recipeList = [
    {id:1,value:"蔬菜",url:img1},
    {id:2,value:"蔬菜",url:img2},
    {id:3,value:"蔬菜",url:img3},
    {id:4,value:"蔬菜",url:img4},
    {id:5,value:"蔬菜",url:img5},
    {id:6,value:"蔬菜",url:img6},
    {id:7,value:"蔬菜",url:img7},
    {id:8,value:"蔬菜",url:img8},
    {id:9,value:"蔬菜",url:img9},
]
const recipeListDOM = recipeList.map(item=>(
    <li key={item.id} className="list-item">
        <img src={item.url} alt=""/>
    </li>
))
const Recipe = (props)=>{
    return (
        <AppScroll className="recipe box">
            {recipeListDOM}
        </AppScroll>
    )
}

export default Recipe;