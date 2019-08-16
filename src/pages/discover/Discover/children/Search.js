import React from 'react'

const Search = (props)=>{
    return (
        <div className="search">
            <span className="iconfont icon-search"></span>
            <input
                type="text"
                className="search-input"
                placeholder="请输入食材名、国家或用户名"
            />
        </div>
    )
}
export default Search;