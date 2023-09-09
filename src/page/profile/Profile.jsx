import React from 'react'
import './profile.scss'
import PlaceIcon from "@mui/icons-material/Place";
import Posts from '../../component/posts/Posts'

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='cover'/>
        <img src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" className='profilePic' />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="item">
            <span>徐漢勝</span>
            <PlaceIcon />
            <span>台灣</span>
          </div>
          <div className="btn">
            <button className='follow'>追蹤</button>
            <button className='new'>新增文章</button>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile
