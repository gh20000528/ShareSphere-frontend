import React, { useState } from 'react'
import { makeRequest } from '../../axios'
import './update.scss'
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Update = ({ setShowUpdate, user }) => {

	const [cover, setCover] = useState(null)
	const [profile, setProfile] = useState(null)
	const [texts, setTexts] = useState({
		name: "",
		city: ""
	})

	const changeHandler = (e) => {
		setTexts((prev) => ({...prev, [e.target.name]: e.target.value}))
	}

	const upload = async (file) => {
    try{
      const formDate = new FormData()
      formDate.append("file", file)
      const res = await makeRequest.post("/upload", formDate)
      return res.data
    }catch(err){
      console.log(err);
    }
  }


  const queryClient = useQueryClient()

  const mutation = useMutation((user) => {
    return makeRequest.put("/users", user)
  },{
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['user'])
    },
  })

  const submitHandler = async (e) => {
    e.preventDefault()
    let coverUrl
		let profileUrl

		coverUrl = cover ? await upload(cover) : user.coverPic
		profileUrl = profile ? await upload(profile) : user.profilePic

    mutation.mutate({...texts ,coverPic: coverUrl, profilePic: profileUrl})
		setShowUpdate(false)
  }
  return (
    <div className='update'>
			<div className='userform'>
				<div>
					<p>背景</p>
					<input type="file" onChange={e => setCover(e.target.files[0])}/>
				</div>
				<div>
					<p>頭貼</p>
					<input type="file" onChange={e => setProfile(e.target.files[0])}/>
				</div>
				<div>
					<p>名稱</p>
					<input type="text" name="name" onChange={changeHandler}/>
				</div>
				<div>
					<p>居住地</p>
					<input type="text" name="city" onChange={changeHandler}/>
				</div>
				<button onClick={submitHandler}>更新</button>
			</div>
      <button onClick={() => setShowUpdate(false)}>x</button>
    </div>
  )
}

export default Update
