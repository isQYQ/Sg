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
        return (
            <div className="page" id="home">
                <AppHeader title="食光"/>

                <AppScroll className="content">
                    {
                        homeRecipeList.map((item,index)=>(
                            <div key={index} className="list-item" onClick={()=>this.toDetail(item.id)}>
                            <img key={item.id} src={item.menuPic} className="pic"/>
                            <span className="menu">{item.menuName}</span>
                            </div>
                        ))
                    }

                </AppScroll>
            </div>
        )
    }
    componentDidMount(){
        this.props.fun();
    }
    toDetail(id){
        this.props.history.push(`/discover/recipe/detail/${id}`)
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