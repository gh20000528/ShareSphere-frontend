import React, { useContext, useState } from 'react'
import './profile.scss'
import PlaceIcon from "@mui/icons-material/Place";
import Posts from '../../component/posts/Posts'
import { makeRequest } from '../../axios'
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import Update from '../../component/update/Update'
const Profile = () => {

  const userId = parseInt(useLocation().pathname.split("/")[2])
  const { currentUser } = useContext(AuthContext)
  const [ showUpdate, setShowUpdate ] = useState(false)

  const { isLoading, error, data } = useQuery(['user'], ()=> 
	makeRequest.get("/users/find/" + userId).then((res) => {
		return res.data;
	}))
  
  const { isLoading: rSisLoading, data:relationshipData } = useQuery(['relationship'], ()=> 
	makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
		return res.data;
	}))

  
	const queryClient = useQueryClient()

  const mutation = useMutation((following) => {
    if(following) return makeRequest.delete("/relationships?userId=" + userId)
		return makeRequest.post("/relationships", { userId })
  },{
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['relationship'])
    },
  })

	const followHandler = () => {
		mutation.mutate(relationshipData.includes(currentUser.id))
	}


  return (
    <div className='profile'>
      { isLoading ?
        'loading':
        <div className="images">
          <img src={"/upload/" + data.covoerPic } className='cover' alt=''/>
          <img src={"/upload/" + data.profilePic } className='profilePic' alt=''/>
        </div>
      }
      <div className="profileContainer">
        <div className="uInfo">
          { isLoading ?
            "loading" :
            <div className="item">
              <span>{data.name}</span>
              <PlaceIcon />
              <span>{data.city}</span>
            </div>
          }
          <div className="btn">
            { rSisLoading ?
            "loading" :  
            userId === currentUser.id ?
            (<button className='follow' onClick={()=> setShowUpdate(true)}>更新個人資料</button>):
            (<button className='follow' onClick={followHandler}>{relationshipData.includes(currentUser.id) ? 
              "已追蹤" : 
              "追蹤"
            }</button>)
          }
            <button className='new'>新增文章</button>
          </div>
        </div>
        <Posts userId = {userId}/>
      </div>
      {showUpdate && <Update setShowUpdate={setShowUpdate} user={data}/> }
    </div>
  )
}

export default Profile
