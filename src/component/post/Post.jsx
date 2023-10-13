import React, { useContext, useState } from 'react'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import './post.scss'
import {Link} from "react-router-dom"
import Comments from '../comments/Comments'
import moment from 'moment'
import { AuthContext } from '../../context/authContext';
import { makeRequest } from '../../axios'
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
const Post = ({post}) => {
	const [showComment, setShowComment] = useState(false)
	const { currentUser } = useContext(AuthContext)

	const { isLoading, error, data } = useQuery(['likes', post.id], ()=> 
	makeRequest.get("/likes?postId=" + post.id).then((res) => {
		return res.data;
	}))

	console.log();
	const showHandler = () => {
		setShowComment(!showComment)
	}

	const queryClient = useQueryClient()

  const mutation = useMutation((liked) => {
    if(liked) return makeRequest.delete("/likes?postId=" + post.id)
		return makeRequest.post("/likes", {postId: post.id})
  },{
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['likes'])
    },
  })
	
	const likeHandler = () => {
		mutation.mutate(data.includes(currentUser.id))
	}
  return (
    <div className='post'>
      <div className="container"> 
				<div className="user">
					<div className="userInfo">
							<img src={"/upload/" + post.profilePic} alt="" />
							<div className='details'>
								<Link to={`/profile/${post.userId}`}>
										<span className='name'>{post.name}</span>
										<span className='data'>{moment(post.createdAt).fromNow()}</span>
								</Link>
							</div>
							<MoreHorizIcon/>
					</div>
				</div>
				<div className="content">
					<p>{post.desc}</p>
					<img src={"/upload/" + post.img} alt="" />
				</div>
				<div className="info">
					<div className="item">
						{ isLoading ? "loading" :
						data.includes(currentUser.id)? 
						<FavoriteOutlinedIcon style={{color: "red"}} onClick={likeHandler}/>: <FavoriteBorderOutlinedIcon onClick={likeHandler}/> }
						{data?.length} Likes
					</div>
					<div className="item" onClick={showHandler}>
						<TextsmsOutlinedIcon/>
						留言
					</div>
					<div className="item">
						<ShareOutlinedIcon/>
						分享
					</div>
				</div>
				{showComment && <Comments postId={post.id}/>}
			</div>
    </div>
  )
}

export default Post
