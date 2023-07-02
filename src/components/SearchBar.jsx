/*import React,{useState}from 'react';
import {IconButton, Paper} from '@mui/material'
import {Search} from '@mui/icons-material';
//import '../css/searchBar.css';
const SearchBar = () => {
  const[searchTerm,setSearchTerm]=useState('');
  return (
    <Paper component='form' onSubmit={()=>{}} sx={{border:'1px solid black',p:0.5 ,borderRadius:20,boxShadow:'none' , mr:{sm:5}}}>
        <input className='search-bar'sx= {{border:'none',outline:'none',width:'900px'}} placeholder='Search.....' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value) }/>
        <IconButton type='submit' sx={{p:'10px',color:'black'}}><Search/></IconButton>
        </Paper>
  )
}

export default SearchBar*/


import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../css/searchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        display:'flex',
        justifyContent:'center',
        gap: '3rem',
        Width: { xs: '30%', md: '50%' },

      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
