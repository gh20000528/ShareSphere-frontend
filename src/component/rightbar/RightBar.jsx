import React from 'react'
import './rightBar.scss'

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className='container'>
        <div className='item'>
          <span>推薦給你</span>
          <div className='user'>
            <div className='userInfo'>
              <img src="" alt="" />
              <span>han sheng</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src="" alt="" />
              <span>han sheng</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
