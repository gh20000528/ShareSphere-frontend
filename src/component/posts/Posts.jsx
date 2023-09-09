import React from 'react'
import Post from '../post/Post'
const Posts = () => {
    const posts = [
        {
        id:1,
        name: "han sheng",
        userId: "1",
        profilePic:"https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officiis perferendis non. Voluptas, quo ut!",
        img:"https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
          id:2,
          name: "han sheng",
          userId: "1",
          profilePic:"https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officiis perferendis non. Voluptas, quo ut!",
          img:"https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
      ]
  return (
    <div className=''>
      {
        posts.map( post => (
            <Post post={post}/>
        ))
      }
    </div>
  )
}

export default Posts
