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
const DiscoverResult = lazy(()=>import('./pages/discover/DiscoverResult/DiscoverResult'));
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




const NotFind = lazy(()=>import('./pages/common/NotFind/NotFind'));





const AppPanel = (props)=>{
  return (
    <Router>
      <div className="app">
        {/* 根页面 */}
        <Switch>
          <Route path="/" exact render={()=>{
            return <Redirect to="/mine"/>
          }}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/discover' exact component={Discover}/>
          <Route path='/article' exact component={Article}/>
          <Route path='/mine' exact component={Mine}/>
          <Route component={NotFind}/>
        </Switch>

        {/* 子页面 */}
          {/* 登录 */}
          <Route path="/login/direct" component={DirectLogin} />
          <Route path="/login/qq/confirm" component={QQConfirm} />
          <Route path="/login/weixin/confirm" component={WeixinConfirm} />
          <Route path="/login/register" component={Register} />
          {/* 首页 */}
          {/* <Route path= component={HomeRecipeDetail} /> */}
          <Route path="/home/recipe/detail/:id" component={HomeRecipeDetail} />

          {/* 发现页 */}
          <Route path="/discover/recipe/item/:id" component={DiscoverRecipeItem} />
          <Route path="/discover/recipe/detail/:id" component={DiscoverRecipeItemDetail} />
          <Route path="/discover/result/:keywords" component={DiscoverResult} />
          <Route path="/discover/wikipedia/detail/:id" component={DiscoverWikipediaDetail} />
          {/* 我的 */}
          <Route path="/mine/change/psw" component={ChangePassword} />
          <Route path="/mine/change/unit" component={ChangeUnit} />
          <Route path="/mine/contact/us" component={ContactUs} />
          
          <Route path="/mine/edit/info" component={EditInfo} />

          <Route path="/mine/message" component={Message} />  

          <Route path="/mine/privacy" component={PrivacyPolicy} />
          <Route path="/mine/recipe/book" component={RecipeBook} />
          <Route path="/mine/set" component={SetOption} />


          {/* <Route component={NotFind}/> */}


        {/* 导航栏 */}
        <TabBar />

      </div>
    </Router>
  )
}

const App = (props)=>{
  return (
    <Suspense fallback={<Loading/>}>
      {props.isLogin ? <AppPanel /> : <Login />}
    </Suspense>
  );
}

const mapStateToProps = (state)=>({
  isLogin: state.login.isLogin
})
const mapDispatchToProps = ()=>({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);