import React from 'react';
//import { Box, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
//import {logo} from "../utils/constants";
//import MenuIcon from '@mui/icons-material/Menu';
//import VideoCallIcon from '@mui/icons-material/VideoCall';
//import AppsIcon from '@mui/icons-material/Apps';
//import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Avatar} from '@mui/material';
import '../css/navbar.css';
//import {IconButton} from '@mui/material'
//import {Search} from '@mui/icons-material';
//import {IconButton } from '@mui/material';
//import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  
  return (
    <>
    
    <div className='header container'>
    <div className='header-left'>
    {/*<MenuIcon/>*/}
    <NavLink to="/" style={{display:'flex',alignItems:"center" ,gap:"-1rem"}}>
    <img src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png" alt='loading' max-width='150px' height={90} className='imagediv'/>
      {/*<h3>YouTube</h3>*/}
    </NavLink>
    </div>
    <div className='header-mid'>
    <SearchBar />
    {/*<input placeholder='Search'type='text' value="" onChange={()=>{} }/>
    <IconButton type='submit' sx={{color:'grey',borderLeft:"1px solid blue",backgroundColor:"#fafafa"}}><Search/></IconButton>*/}
    </div>
    
    <div className='header-right'>
        {/*<VideoCallIcon/>
        <AppsIcon/>*/}

        
        <Avatar sx={{sm: "0.5rem", md: '1.4rem'}}> NP</Avatar>
        

    </div>
        

    
    </div>
  
   </>
  )
}

export default Navbar