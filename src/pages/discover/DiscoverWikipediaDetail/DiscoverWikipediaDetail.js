import React, { Component } from 'react'
import AppHeader from '../../../components/app-header/app-header'
import AppScroll from '../../../components/app-scroll/app-scroll'
import './style.scss'
class DiscoverWikipediaDetail extends Component {
    render() {
        return (
            <div className="page subpage" id="wikipedia-detail">
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
                        <span className="word">百科</span>
                        <div className="words">
                        <p>连这些都不知道,</p>
                        <p>你确认吃过柑橘水果?</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <p className="page1">初冬季节，柑橘类水果逐渐成熟上市，漫步市场、超市，各种品类圆圆的小果，泛着黄灿灿的光泽，散发着浓郁诱人的香气，让人十分喜爱，不由得想要带几个回家，感受瓣瓣果肉中酸甜汁水在口中迸裂的美味。
                    </p>
                    <div className="pic2"></div>
                    <p className="page2">柑橘类水果（Citrus fruits）是很多柑橘亚属植物果实的统称，包括各种橘子、橙子、柑子、柚子、金橘、柠檬、酸橙等。<br/>
它们算得上水果里的「名门望族」，在世界上分布十分广泛，我国主要产区是湖南、四川、广东、广西等亚热带地区。</p>
                    <h6 className="tit1">问题1：柑橘皮那么亮，是涂了油吗？</h6>
                    <p className="page3">这个结构叫「油囊」。很多挥发性的香气成分都被储存在油囊之中。一般来说，油囊越饱满的柑橘，柑橘的气味往往越芬芳。<br/>
所以，柑橘水果的表面看着油光闪闪，不一定是人为涂了油，油囊和最外层的薄薄果蜡都是它们天生自带的。</p>
                    <div className="pic3"></div>
                    <h6 className="tit2">问题2：柑橘类水果中哪种维生素C最丰富？</h6>
                    <p className="page4">柑橘水果的果肉是由小液囊为基本单位组成的，一个个小液囊组合在一起，被一层薄薄的瓣膜轻轻包裹，便形成了柑橘类水果特有的瓣状结构。
液囊里充满了美味的汁水，其中含有丰富的糖类、有机酸类和各种维生素、矿物质，是柑橘滋味和营养素的主要来源。<br/>
维生素C是柑橘类水果中最为出众的一种营养素。根据品种不同，维生素C的含量在20~90mg/100g不等。
其中柚子含量最高，橙子居中，橘子略低一些。具体含量就和品种、产地和栽培方式有关了。
吃上一个稍大点的橙子（约200g果肉），加上三餐的蔬菜，基本就可以满足一天100mg维生素C的需求。所以，说柑橘水果是维生素C的宝库，确实也是实至名归。</p>
                    <div className="pic4"></div>
                    <h6 className="tit3">容问题3：柑橘类水果该怎么储存呢？</h6>
                    <p className="page5">现在很多人都在网上买水果，一买往往就是一大箱，短时间肯定吃不完，怎么合理的储存是很多人遇到的问题。
在温度1℃，湿度85%的最适条件下，柑橘类水果储存1-2个月是完全没有问题的。所以我们只要把柑橘类水果用箱子盖好，放在温度较低、湿度较高的阳台上储存就可以了。</p>
                    <div className="pic5"></div>
                </AppScroll>

            </div>
        );
    }
}


export default DiscoverWikipediaDetail;