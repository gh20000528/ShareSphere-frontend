import React from 'react'
import './login.scss'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className='login'>
      <div className='card'>
        <div className='right'>
          <h1>歡迎回來</h1>
          <p>探索社交互動的全新方式，輕鬆分享、追蹤好友，即時聊天，盡在這裡。</p>
          <span>沒有帳號嗎？</span>
          <Link to={'/register'}>
            <button>註冊</button>
          </Link>
        </div>
        <div className='left'>
          <h1>登入</h1>
          <form action="">
            <input type="text" placeholder='UserName...'/>
            <input type="password" placeholder='password'/>
            <button>登入</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
