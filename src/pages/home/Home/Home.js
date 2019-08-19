import React from 'react'
import {Link }from 'react-router-dom'
import AppHeader from '../../../components/app-header/app-header'
import AppScroll from '../../../components/app-scroll/app-scroll'
import {connect} from 'react-redux'
import {requestHomeRecipeList} from '../../../store/modules/home'

import './style.scss'


class Home extends React.Component{
    render(){
        let {homeRecipeList} = this.props;
        console.log(this.props)
        return (
            <Link className="page" id="home" to="home/recipe/detail/:id">
                <AppHeader title="食光"/>
            
                <AppScroll className="content">
                    {
                        homeRecipeList.map((item,index)=>(
                            <div key={index} className="list-item" >
                            <img key={item.id} src={item.menuPic} className="pic"/>
                            <span class="menu">{item.menuName}</span>
                            </div>
                        ))
                    }

                </AppScroll> 
            </Link>
        )
    }
    componentDidMount(){
        console.log(this.props)
        this.props.fun();
    }

}

const mapStateToProps = (state)=>({
    homeRecipeList:state.home.homeRecipeList
})
const mapDispatchToProps = (dispatch)=>({
    fun(){
        let action = requestHomeRecipeList();
        dispatch(action);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);