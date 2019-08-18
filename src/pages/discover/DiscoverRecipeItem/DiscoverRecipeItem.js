import React, { Component } from 'react';
import AppScroll from '../../../components/app-header/app-header'
import './style.scss'
class DiscoverRecipeItem extends Component {
    render() {
        return (
            <div className="page subpage" id="discover-recipe-item">
                <AppScroll title="蔬菜" left={
                    <span className="iconfont icon-back"></span>
                }/>
                <h1>发现菜谱选项下的列表页</h1>
            </div>
        );
    }
}

export default DiscoverRecipeItem;