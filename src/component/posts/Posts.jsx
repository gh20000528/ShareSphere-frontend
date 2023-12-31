import React from 'react'
import Post from '../post/Post'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'

const Posts = ({userId}) => {
  const { isLoading, error, data } = useQuery(['post'], ()=> 
    makeRequest.get("/post?userId=" + userId).then((res) => {
      return res.data;
    })
  )
    // console.log(data);
  return (
    <div className=''>
      {error
        ?  "something went worng"
        : isLoading
        ? "loading"
        : data.map( post => (
            <Post post={post} key={post.id}/>
        ))
      }
    </div>
  )
}

export default Posts
