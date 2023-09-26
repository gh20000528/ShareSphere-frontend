import React, { useContext, useState } from 'react'
import '../comments/comments.scss'
import { AuthContext } from '../../context/authContext'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import moment from 'moment'
import { useMutation, useQueryClient } from "@tanstack/react-query";


const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("")

	const {currentUser} = useContext(AuthContext)
	const { isLoading, error, data } = useQuery(['comment'], ()=> 
	makeRequest.get("/comment?postId=" + postId).then((res) => {
		return res.data;
	}))


	const queryClient = useQueryClient()

	const mutation = useMutation((newComment) => {
	  return makeRequest.post("/comment", newComment)
	},{
	  onSuccess: () => {
		// Invalidate and refetch
		queryClient.invalidateQueries(['comment'])
	  },
	})
  
	const clickHandle = async (e) => {
	  e.preventDefault()
	  mutation.mutate({desc , postId})
    setDesc("")
	}
  return (
    <div className='comments'>
			<div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input 
          type="text" 
          placeholder="write a comment"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          />
        <button onClick={clickHandle}>Send</button>
      </div>
      { isLoading ? "loading":
	   data.map(comment => (
				 <div className="comment">
					<img src={comment.profilePicture} alt="" />
					<div className="info">
						<span>{comment.name}</span>
						<p>{comment.desc}</p>
					</div>
					<span className="date">{moment(comment.createdAt).fromNow()}</span>
			 </div>
			))}
    </div>
  )
}

export default Comments
