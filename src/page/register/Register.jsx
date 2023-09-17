import React, { useState } from 'react'
import './register.scss'
import {Link} from "react-router-dom"
import axios from 'axios'
const Register = () => {

  const [inputs, setInputs] = useState({
    username:'',
    email:'',
    password:'',
    name:''
  })

  const [err, setErr] = useState(null)

  const changeHandler = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const registerHandler = async (e) => {
    e.preventDefault()

    try{
      await axios.post("http://localhost:8800/api/auth/register", inputs)
    }catch (err){
      setErr(err.response.data)
    }

    setInputs('')
  }

  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <h1>登入</h1>
          <form action="">
            <input type="text" placeholder='UserName...' name="username" onChange={changeHandler}/>
            <input type="email" placeholder='Email...' name="email" onChange={changeHandler}/>
            <input type="password" placeholder='password' name="password" onChange={changeHandler}/>
            <input type="text" placeholder='name' name="name" onChange={changeHandler}/>
            { err && err }
            <button onClick={registerHandler}>註冊</button>
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
