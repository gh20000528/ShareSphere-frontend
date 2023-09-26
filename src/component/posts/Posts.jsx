import React from 'react'
import Post from '../post/Post'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'

const Posts = () => {
  const { isLoading, error, data } = useQuery(['post'], ()=> 
    makeRequest.get("/post").then((res) => {
      return res.data;
    })
  )

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
