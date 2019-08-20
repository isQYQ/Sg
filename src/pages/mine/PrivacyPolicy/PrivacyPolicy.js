import React from 'react'
import './style.scss'
import AppHeader from '../../../components/app-header/app-header';
import AppScroll from '../../../components/app-scroll/app-scroll';

const PrivacyPolicy = (props)=>{
    return (
        <div className="page subpage" id="privacy-policy">
             <AppHeader title='食光隐私政策'
                left={<span className="iconfont icon-back"></span>}
                leftClick={()=>props.history.goBack()}
            />
            <AppScroll className="content">
                <div className='content-privacy'>
                    <h3 className='title'>食光隐私政策</h3>
                    <div className='privacy'>
                    <p>食光非常重视用户的隐私和个人信息保护。您在使用我们的产品与/或服务时，我们可能会收集和使用您的相关信息。我们希望通过《食光隐私政策》（“本隐私政策”）向您说明食光如何收集、使用、保存、共享、转让和公开披露您的个人信息和隐私信息。</p>
                    <p>一、我们如何收集和使用个人信息</p>
                    <p>二、隐私政策的修订和通知</p>
                    <p>三、其他</p>
                    <p>请您在向食光提交个人信息或隐私信息之前，充分阅读、了解并同意本政策和任何补充政策。您使用或继续使用我们的服务，即意味着同意我们按照本《隐私政策》收集、使用、储存和分享您的相关信息。如对本隐私政策或相关事宜有任何问题，您可通过邮箱Help@shiguang.cc与我们联系 。</p>
                    <p>一、我们如何收集和使用个人信息</p>
                    <p>您的个人信息会在您注册和使用我们的服务时被收集，食光仅会出于本政策所述的目的收集和使用您的个人信息：</p>
                    <p>二、注册、认证、登录食光和相关服务</p>
                    <p>（1）当你注册、登录食光及相关服务时，你可以通过手机号创建账号，我们将通过发送邮件验证码来验证你的身份是否有效，并且你可完善相关的网络身份识别信息（如头像、昵称和密码），收集这些信息是为了帮助你完成注册。你还可根据自身需求选择填写性别、生日、地区及介绍等信息完善你的个人信息。</p>
                    <p>（2）你也可以使用第三方账号（如微信、QQ等）登录进入食光，你此时将授权我们获取你在第三方平台注册的公开信息（头像、昵称等），并在你同意本隐私政策后将你的第三方账号与你的食光账户绑定，使你可以通过第三方账号直接登录并使用本产品和相关服务。</p>
                    <p>其他</p>
                    <p>（一）本“隐私政策”中的标题仅为方便及阅读而设，并不影响本《隐私政策》中任何规定的含义或解释。</p>
                    <p>（二）在法律允许的范围内，食光对本“隐私政策”拥有解释和修改的权利。</p>
                    </div>
                    

  

  
   

                </div>
            </AppScroll>
        </div>
    )
}

export default PrivacyPolicy;
