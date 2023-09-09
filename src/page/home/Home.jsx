import React from 'react'
import Stories from '../../component/stories/Stories'
import Post from '../../component/posts/Post'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Stories/>
      <Post/>
    </div>
  )
}

export default Home
