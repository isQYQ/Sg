import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './style.scss'
class Article extends Component {
    render() {
        return (
            <div className="page" id="article">
                <h1>文章首页</h1>
                <Link to=""/>
            </div>
        );
    }
}

export default Article;