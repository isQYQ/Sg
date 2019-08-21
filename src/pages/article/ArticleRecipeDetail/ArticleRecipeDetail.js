import React, { Component } from 'react'
import AppHeader from '../../../components/app-header/app-header'
import AppScroll from '../../../components/app-scroll/app-scroll'
import './style.scss'

class ArticlePage extends Component {
    render() {
        return (
            <div classsName="page" id="articlePage">
                <AppHeader left={
                    <span className="iconfont icon-thinBack"></span>
                } right={
                    <div>
                        <span className="iconfont icon-kLike"></span>
                        <span className="iconfont icon-transmit"></span>
                    </div>
                } leftClick={()=>this.props.history.goBack()}/>
                <AppScroll className="content">
                    <div className="pic1">
                        <span className="word">文章</span>
                        <div className="words">
                        <p>轻松吃蔬菜的5个大招:</p>
                        <p>蔬菜藏着吃</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <p className="page1">经过2019全民营养周的宣传，「天天蔬果、健康你我」的理念深入人心。<br/>
                        但是，实际上很多家庭吃蔬菜的量总是不如人意，觉得吃到每天500克难度太大。<br/>
                        说起来理由很多，
                        那么，怎样多吃蔬菜，又能让大家感觉吃起来不太累呢？可以把蔬菜藏起来吃。
                    </p>
                    <div className="pic2"></div>
                    <p className="page2">所谓藏起来吃，就是不把蔬菜放在盘子里明显看出来是在吃一道蔬菜，而是把它和其他食物混合起来吃进去，甚至是在看不见的情况下吃进去。</p>
                    <h6 className="tit1">方法1：粥饭里面加点蔬菜。</h6>
                    <p className="page3">这种烹调既不用加油，也不用加盐，轻松地增加了钾和膳食纤维，还增加了B族维生素的供应，对预防肥胖和高血压也是特别有好处。</p>
                    <div className="pic3"></div>
                    <h6 className="tit2">方法2：面食里面加点蔬菜。</h6>
                    <p className="page4">在包子、饺子、馅饼、卷饼等面食里加入蔬菜，是我国烹饪的传统操作。把蔬菜浆加入面糊，做成蔬菜汁发糕、蔬菜汁馒头等，也是近年来的常见做法。在西餐当中，也有把蔬菜泥拌到意大利面、通心粉中，或夹在三明治、帕尼尼里的做法。</p>
                    <div className="pic4"></div>
                    <h6 className="tit3">方法3：蛋类里面加点蔬菜。</h6>
                    <p className="page5">蛋类特别适合和蔬菜一起烹调。比如说，把日常做的炒蛋换成蔬菜摊鸡蛋特别简单。</p>
                    <div className="pic5"></div>
                </AppScroll>

            </div>
        );
    }
}

export default ArticlePage;