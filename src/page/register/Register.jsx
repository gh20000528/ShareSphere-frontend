import React from 'react'
import './register.scss'
import {Link} from "react-router-dom"
const Register = () => {
  return (
<div className='register'>
      <div className='card'>
        <div className='left'>
          <h1>登入</h1>
          <form action="">
            <input type="text" placeholder='UserName...'/>
            <input type="email" placeholder='Email...'/>
            <input type="password" placeholder='password'/>
            <button>註冊</button>
          </form>
        </div>
        <div className='right'>
          <h1>歡迎加入</h1>
          <p>探索社交互動的全新方式，輕鬆分享、追蹤好友，即時聊天，盡在這裡。</p>
          <span>有帳號了嗎？</span>
          <Link to={'/login'}>
            <button>登入</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
