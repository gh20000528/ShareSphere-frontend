import React, { useContext } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GridViewIcon from '@mui/icons-material/GridView';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import './navbar.scss'
import {Link} from "react-router-dom"
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext'

const NavBar = () => {
	const { toggle, darkMode } = useContext(DarkModeContext)
	const { currentUser } = useContext(AuthContext)

	console.log(currentUser);
  return (
    <div className='navbar'>
      <div className='left'>
				<Link to={'/'} style={{textDecoration:'none'}}>
					<span>ShareSphere</span>
				</Link>
				{darkMode ? <WbSunnyIcon onClick={toggle}/> : <NightlightIcon onClick={toggle}/>}
				<div className='search'>
					<SearchIcon/>
					<input type="text" placeholder='search...' />
				</div>
			</div>
			<div className='right'>
				<EmailIcon/>
				<NotificationsIcon/>
				<div className='user'>
					<img src={ "/upload/" + currentUser.profilePic } alt="" />
					<Link to={`/profile/${currentUser.id}`}>
						<span className='name'>{currentUser.name}</span>
					</Link>
				</div>

			</div>
    </div>
  )
}

export default NavBar
