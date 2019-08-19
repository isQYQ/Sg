import React from 'react'
import AppHeader from '../../../components/app-header/app-header'
import AppScroll from '../../../components/app-scroll/app-scroll'
import {connect} from 'react-redux'
import {requestArticleList} from '../../../store/modules/article'
import {Link} from 'react-router-dom'

import './style.scss'
class Article extends React.Component {
    render() {
        let {articleRequestList}=this.props;
        console.log(this.props)
        return (
            <Link className="page" id="article" to="article/recipe/detail">
                <AppHeader title="文章" />
                <AppScroll className="content">
                {
                    articleRequestList.map((item,index)=>(
                        <div key={index} className="list-item" to="article/recipe/detail">
                            <img src={item.articleFirstPic} className="pic"/>
                            <div className="mask">
                                <div className="container">
                                    <span className="title">文章</span>
                                    <span className="desc">{item.articleTitle}</span>
                                </div>
                            </div>
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
    articleRequestList:state.article.articleRequestList
})

const mapDispatchToProps = (dispath)=>({
    fun(){
        let action = requestArticleList();
        console.log(action);
        dispath(action);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Article);