import React, { Component } from 'react';
import './style.scss'
import AppHeader from '../../../components/app-header/app-header'
import AppScroll from '../../../components/app-scroll/app-scroll'

class HomeRecipeDetail extends Component {
    render() {
        return (
            <div className="page subpage" id="recipe-detail">
                <AppHeader title="详情"/>
                <AppScroll className="content">
                </AppScroll>
            </div>
        );
    }
}

export default HomeRecipeDetail;