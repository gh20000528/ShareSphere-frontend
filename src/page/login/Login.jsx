import React, {useContext, useState} from 'react'
import './login.scss'
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from '../../context/authContext'

const Login = () => {

  const [inputs, setInputs] = useState({
    username:'',
    password:'',
  })

  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const changeHandler = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const { login } = useContext(AuthContext)

  const loginHandler = async (e) => {
    e.preventDefault()
    try{
      await login(inputs)
      navigate("/")
    }catch(err){
      console.log(err);
      setErr(err.response.data)
    }
  }

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
            <input type="text" placeholder='UserName...' name="username" onChange={changeHandler}/>
            <input type="password" placeholder='password' name="password" onChange={changeHandler}/>
            {err && err}
            <button onClick={loginHandler}>登入</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
