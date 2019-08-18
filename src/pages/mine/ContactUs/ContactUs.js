import React from 'react'
import './style.scss'
import AppHeader from '../../../components/app-header/app-header';
const ContactUs = (props)=>{
    const list = [
        {id: 1, url: '/images/weixin.png',title: '官方公众号:', content: 'shiguang'},
        {id: 2, url: '/images/dianshang.png',title: '电商客服:', content: '4006-952-261'},
        {id: 3, url: '/images/zhaoshang.png',title: '招商电话:', content: '010-66668888'},
        {id: 4, url: '/images/content.png',title: '内容合作:', content: 'deit@shiguang.cc'},
        {id: 5, url: '/images/email.png',title: 'Email:', content: 'Ads@shigiang.cc'},
    ]
    return (
        <div className="page subpage" id="contact-us">
             <AppHeader title='关于我们'
                left={<span className="iconfont icon-back"></span>}
                leftClick={()=>props.history.goBack()}
            />
            <div className="content">
                <div className="content-nav">
                    <span><img src="/images/logo.png" alt=""/></span>
                    <span>满足你对美食的一切幻想</span>
                </div>
                <ul className="content-list">
                    {
                        list.map(item=>(
                            <li key={item.id} className='item'>
                                <span><img src={item.url} alt=""/></span>
                                <span>{item.title}</span>
                                <span>{item.content}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ContactUs;