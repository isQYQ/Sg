import React, { lazy, Suspense } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import Loading from './pages/common/Loading/Loading'
import TabBar from './components/tab-bar/tab-bar'


// 组件懒加载
// 根页面
const Home = lazy(()=>import('./pages/home/Home/Home'));
const Discover = lazy(()=>import('./pages/discover/Discover/Discover'));
const Article = lazy(()=>import('./pages/article/Article/Article'));
const Mine = lazy(()=>import('./pages/mine/Mine/Mine'));
const Login = lazy(()=>import('./pages/login/Login/Login'));
// 子页面
//login子页面
const DirectLogin = lazy(()=>import('./pages/login/DirectLogin/DirectLogin'));
const QQConfirm = lazy(()=>import('./pages/login/QQ-Confirm/QQConfirm'))
const WeixinConfirm = lazy(()=>import('./pages/login/Weixin-Confirm/WeixinConfirm'));
const Register = lazy(()=>import('./pages/login/Register/Register'));
//home子页面
const HomeRecipeDetail = lazy(()=>import('./pages/home/HomeRecipeDetail/HomeRecipeDetail'));
//discover子页面
const DiscoverRecipeItem = lazy(()=>import('./pages/discover/DiscoverRecipeItem/DiscoverRecipeItem'));
const DiscoverRecipeItemDetail = lazy(()=>import('./pages/discover/DiscoverRecipeItemDetail/DiscoverRecipeItemDetail'));
const DiscoverWikipediaDetail = lazy(()=>import('./pages/discover/DiscoverWikipediaDetail/DiscoverWikipediaDetail'));
//我的
const ChangePassword = lazy(()=>import('./pages/mine/ChangePassword/ChangePassword'))
const ChangeUnit = lazy(()=>import('./pages/mine/ChangeUnit/ChangeUnit'))
const ContactUs = lazy(()=>import('./pages/mine/ContactUs/ContactUs'))
const EditInfo = lazy(()=>import('./pages/mine/EditInfo/EditInfo'))
const Message = lazy(()=>import('./pages/mine/Message/Message'))
const PrivacyPolicy = lazy(()=>import('./pages/mine/PrivacyPolicy/PrivacyPolicy'))
const RecipeBook = lazy(()=>import('./pages/mine/RecipeBook/RecipeBook'))
const SetOption = lazy(()=>import('./pages/mine/SetOption/SetOption'))
//文章
const ArticleRecipeDetail = lazy(()=>import('./pages/article/ArticleRecipeDetail/ArticleRecipeDetail'));



//公共
const UserInfo = lazy(()=>import('./pages/common/UserInfo/UserInfo'))





const NotFind = lazy(()=>import('./pages/common/NotFind/NotFind'));





const AppPanel = (props)=>{
  return (
     <Router>
      <div id="app">
        {/* 根页面 */}
        <Switch>
          <Route path="/" exact render={()=>{
<<<<<<< HEAD
            return <Redirect to="/login/direct"/>
=======
            return <Redirect to="/mine"/>
>>>>>>> 70fe6b943d1b6de42cd6ffd2f5268360d5a4524d
          }}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/discover' exact component={Discover}/>
   
          <Route path='/article' exact component={Article}/>
          <Route path='/mine' exact component={Mine}/>

        {/* 子页面 */}
          {/* 公共 */}
          <Route path="/user/info/:id" component={UserInfo} />
          {/* 登录 */}
          <Route path="/login/register" component={Register} />
          <Route path="/login/qq/confirm" component={QQConfirm} />
          <Route path="/login/login/login" component={Login} />
          <Route path="/login/weixin/confirm" component={WeixinConfirm} />
          <Route path="/login/direct" component={DirectLogin} />
      
          {/* 首页 */}
          <Route path="/home/recipe/detail/:id" component={HomeRecipeDetail} />

          {/* 发现页 */}
          <Route path="/discover/recipe/item" component={DiscoverRecipeItem} />
          <Route path="/discover/recipe/detail/:id" component={DiscoverRecipeItemDetail} />
          <Route path="/discover/wikipedia/detail/:id" component={DiscoverWikipediaDetail} />

          {/* 文章 */}
          <Route path="/article/recipe/detail" component={ArticleRecipeDetail} />

          {/* 我的 */}
          <Route path="/mine/change/psw" component={ChangePassword} />
          <Route path="/mine/change/unit" component={ChangeUnit} />
          <Route path="/mine/contact/us" component={ContactUs} />
          <Route path="/mine/edit/info" component={EditInfo} />
          <Route path="/mine/message" component={Message} />
          <Route path="/mine/privacy" component={PrivacyPolicy} />
          <Route path="/mine/recipe/book" component={RecipeBook} />
          <Route path="/mine/set" component={SetOption} />
          <Route component={NotFind}/>
          </Switch>


        {/* 导航栏 */}
        <TabBar />

      </div>
     </Router>
  )
}

const App = (props)=>{
  return (
    <Suspense fallback={<Loading/>}>
      <Router>
      {props.isLogin ? <AppPanel /> : <Home/>}
      </Router>
    </Suspense>
  );
}

const mapStateToProps = (state)=>({
  isLogin: state.login.isLogin
})
const mapDispatchToProps = ()=>({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);