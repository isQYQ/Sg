module.exports = {
    plugins:{
    autoprefixer:{},
    'postcss-pxtorem':{
    rootValue:16,    /*设置 转换的基数.*/
    propList:['font-size','*'] ,  /*如果为*号,为全部转换.*/
    selectorBlacklist: []   /*设置CSS选择器哪些忽略.*/
        }  
    }
} 