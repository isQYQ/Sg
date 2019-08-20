import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import './style.scss'
import AppHeader from '../../../components/app-header/app-header'
import AppScroll from '../../../components/app-scroll/app-scroll'
import {requestHomeRecipeList} from '../../../store/modules/home'
import {requestUserInfoList} from '../../../store/modules/discover'
//引入图片
import img1 from '../../../assets/Pickled fish page_photo2.png'
import img2 from '../../../assets/Pickled fish page_photo3.png'
import img3 from '../../../assets/Pickled fish page_photo4.png'
import img4 from '../../../assets/Pickled fish page_photo5.png'
import img5 from '../../../assets/Pickled fish page_photo6.png'
import img6 from '../../../assets/Pickled fish page_photo7.png'
const DiscoverRecipeItemDetail = (props)=>{
    const goBack = ()=>{
        props.history.goBack();
    }
    let id = props.match.params.id;
    let {RecipeList} = props;
    useEffect(()=>{
        props.requestHomeRecipeList();
        props.requestUserInfoList();

    },[props.requestHomeRecipeList,props.requestUserInfoList])
    // //找到与id对应的菜谱
    let targetRecipe = RecipeList.filter(item=>{
        return item.id == id
    });
    let progressList = [
        {id:1,value:'步骤1',desc:"1、黑鱼切成薄片（可以让菜场大叔帮忙），鱼头和鱼骨备用。鱼片加少许盐、1勺料酒、适量蛋清液和淀粉搅匀，再加少许食用油拌匀，腌制15分钟。",img:img2},
        {id:2,value:'步骤2',desc:"2、热锅冷油爆香姜蒜，下鱼头、鱼骨煎至两面金黄，倒入冷水没过所有食材，放入葱结大火煮沸，撇去浮沫。待汤煮至呈乳白色，用滤网过滤出鱼汤，鱼头和鱼骨弃用。",img:img3},
        {id:3,value:'步骤3',desc:"3、另起新锅，热锅冷油爆香姜蒜，下酸菜、泡椒煸炒出香味。",img:img4},
        {id:4,value:'步骤4',desc:"4、倒入过滤好的全部鱼汤转中火煮沸，加少许花椒粒、干辣椒段、1勺料酒和少许盐调味。待鱼汤熬出香味后，下黑鱼片煮至肉熟，关火盛出。锅中热油至略微冒烟，立刻淋入碗中，酸菜鱼完成！",img:img5}
    ]
    let progressDOM = (
        progressList.map(item=>(
            <div key={item.id} className="progress">
                <h3>{item.value}</h3>
                <span>{item.desc}</span>
                <img src={item.img} alt=""/>
            </div>
        ))
    )

    console.log(targetRecipe)
    return (
        <div className="page subpage" id="recipe-item-detail">
            <AppHeader left={
                <span className="iconfont icon-thinBack"></span>
            } right={
                <div>
                    <span className="iconfont icon-kLike"></span>
                    <span className="iconfont icon-transmit"></span>
                </div>
            } leftClick={goBack}/>
            <AppScroll className="recipe-detail-scroll">
                {
                    targetRecipe.map(item=>(
                        <div key={item.id} className="desc">
                            <img className="pic" src={item.menuPic} alt=""/>
                            <div className="mask desc">
                                <p className="name">{item.menuName}</p>
                                <span className="iconfont icon-time"></span>
                                <span>40分钟</span>
                            </div>
                            <div className="collect border-bottom">
                                <p>
                                    <span className="iconfont icon-like"></span>
                                    <i>{item.menuLikeCount}&nbsp;&nbsp;喜欢</i>
                                </p>
                                <p>
                                    <span className="iconfont icon-collect"></span>
                                    <i>{item.menuCollectCount}&nbsp;&nbsp;收藏</i>
                                </p>
                            </div>
                            <div className="author">
                                <span className="pic"></span>
                                <p className="name">qyq</p>
                                <span className="desc">{item.menuPresentation}</span>
                                <h3>步骤</h3>
                                {item.ingredient && <p className="goods">{item.ingredient}</p>}
                                <img src={img1} alt=""/>
                                {progressDOM}
                            </div>
                        </div>
                    ))
                }
            </AppScroll>
        </div>
    )
}


const mapStateToProps = (state)=>({
    RecipeList:state.home.homeRecipeList,
    userInfoList:state.discover.userInfo
})

const mapDispatchToProps = (dispatch)=>({
    requestHomeRecipeList(){
        let action = requestHomeRecipeList();
        dispatch(action);
    },
    requestUserInfoList(){
        let action = requestUserInfoList();
        dispatch(action);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(DiscoverRecipeItemDetail);