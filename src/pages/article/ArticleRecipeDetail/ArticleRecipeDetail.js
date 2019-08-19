import React, { Component } from 'react'
import AppHeader from '../../../components/app-header/app-header'
import AppScroll from '../../../components/app-scroll/app-scroll'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './style.scss'

class ArticlePage extends Component {
    render() {
        return (
            <div id="articlePage">
                <AppHeader/>
                <AppScroll>
                    <div className="pic1"></div>
                </AppScroll>

            </div>
        );
    }
}

export default ArticlePage;