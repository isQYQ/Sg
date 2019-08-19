//home



//discover
const GET_DISCOVER_RECIPE_LIST_API = '/findController/getAllFindName'
const GET_DISCOVER_WIKIPEDIA_LIST_API = '/encyclopediacontroller/list'
const GET_DISCOVER_USERINFO_LIST_API = '/userController/getUserList?id=1'
const GET_DISCOVER_RECIPE_ITEM_LIST_API = '/menuController/getMenuByHostType'
const GET_SEARCH_USER_INFO_API = '/userController/getUserById'

//user
//粉丝接口
const GET_FANS_NUMBER_API = '/userController/getFansCountById'
//关注接口
const GET_FOCUS_NUMBER_API = '/userController/getIdolCountById'
//用户收藏菜谱的接口
const GET_USER_LIKE_RECIPE_API = '/userController/getMenuById'


export default {
    GET_DISCOVER_WIKIPEDIA_LIST_API,
    GET_DISCOVER_USERINFO_LIST_API,
    GET_DISCOVER_RECIPE_LIST_API,
    GET_DISCOVER_RECIPE_ITEM_LIST_API,
    GET_SEARCH_USER_INFO_API,
    GET_FANS_NUMBER_API,
    GET_FOCUS_NUMBER_API,
    GET_USER_LIKE_RECIPE_API
}