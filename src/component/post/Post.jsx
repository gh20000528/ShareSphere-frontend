import React, { useState } from 'react'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import './post.scss'
import {Link} from "react-router-dom"
import Comments from '../comments/Comments'
import moment from 'moment'

const Post = ({post}) => {
	const [showComment, setShowComment] = useState(false)
	const liked = false

	const showHandler = () => {
		setShowComment(!showComment)
	}
  return (
    <div className='post'>
      <div className="container"> 
				<div className="user">
					<div className="userInfo">
							<img src={post.img} alt="" />
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
					<img src={"./upload/" + post.img} alt="" />
				</div>
				<div className="info">
					<div className="item">
						{liked? <FavoriteOutlinedIcon/>: <FavoriteBorderOutlinedIcon/> }
						12 Likes
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
