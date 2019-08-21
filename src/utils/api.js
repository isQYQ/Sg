//登录接口
const LOGIN_API = '/userController/login'

//登陆后对应账号收藏菜谱接口
const LOGIN_MENU_API = '/userController/getMenuById'

//登录后对应账号收藏文章接口
const LOGIN_ARTICLE_API = '/userController/getArticleById'

//home
const REQUEST_HOME_RECIPE_LIST = '/menuController/getAllMenu'
const REQUEST_ARTICLE_RECIPE_LIST = '/articlecontroller/list'

//discover
const GET_DISCOVER_RECIPE_LIST_API = '/findController/getAllFindName'
const GET_DISCOVER_WIKIPEDIA_LIST_API = '/encyclopediacontroller/list'
const GET_DISCOVER_USERINFO_LIST_API = '/userController/getUserList?id=1'
const GET_DISCOVER_RECIPE_ITEM_LIST_API = '/menuController/getMenuByHostType'
const GET_SEARCH_USER_INFO_API = '/userController/getUserById'

//login 用户登录
const GET_DIRECT_NAME ='/userController/login'
//用户注册接口
const GET_DIRECT_EMAIL='/userController/register'

//user
//粉丝接口
const GET_FANS_NUMBER_API = '/userController/getFansCountById'
//关注接口
const GET_FOCUS_NUMBER_API = '/userController/getIdolCountById'
//用户收藏菜谱的接口
const GET_USER_LIKE_RECIPE_API = '/userController/getMenuById'


export default {
     LOGIN_API,
    LOGIN_MENU_API,
    LOGIN_ARTICLE_API,
    REQUEST_HOME_RECIPE_LIST,
    REQUEST_ARTICLE_RECIPE_LIST,
    GET_DISCOVER_WIKIPEDIA_LIST_API,
    GET_DISCOVER_USERINFO_LIST_API,
    GET_DISCOVER_RECIPE_LIST_API,
    GET_DISCOVER_RECIPE_ITEM_LIST_API,
    GET_SEARCH_USER_INFO_API,
    GET_FANS_NUMBER_API,
    GET_FOCUS_NUMBER_API,
    GET_USER_LIKE_RECIPE_API,
    GET_DIRECT_NAME,
    GET_DIRECT_EMAIL
}