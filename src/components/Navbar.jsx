import React from 'react';

import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

import {Avatar} from '@mui/material';
import '../css/navbar.css';


const Navbar = () => {
  
  return (
    <>
    
    <div className='header container'>
    <div className='header-left'>
 
    <NavLink to="/" style={{display:'flex',alignItems:"center" ,gap:"-1rem"}}>
    <img src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png" alt='loading' max-width='150px' height={90} className='imagediv'/>
      
    </NavLink>
    </div>
    <div className='header-mid'>
    <SearchBar />

    </div>
    
    <div className='header-right'>
      

        
        <Avatar sx={{sm: "0.5rem", md: '1.4rem'}}> NP</Avatar>
        

    </div>
    
        

    
    </div>
  
   </>
  )
}

export default Navbar