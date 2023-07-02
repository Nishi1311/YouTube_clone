import React,{useEffect, useState} from 'react'
import {Box, Stack, Typography} from '@mui/material';
import {Sidebar,Videos} from './';
import {fetchFromAPI} from '../utils/fetchFromAPI';
import '../css/feed.css';



const Feed = () => {
  const[selectedCategory,setSelectedCategory]=useState('New')
  const[videos,setVideos]=useState([])
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=> setVideos(data.items))
  },[selectedCategory])
  return (
    <Stack sx={{flexDirection:{sx:'column',md:"row"},mt:1.5}}>
      <Box sx={{height:{sx:'auto',md:"92vh"},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        <Sidebar selectedCategory={selectedCategory}setSelectedCategory={setSelectedCategory}/>
       {/*<Typography varient="body2" className="copyright" sx={{mt:1.5,color:"black"}}>
          Copyright 2023 YouTube
  </Typography>*/}
        <p>Copyright 2023 YouTube</p>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: "red" }}>
          {selectedCategory} <span style={{ color: "black" }}>videos</span>
        </Typography>
        <Videos  videos={videos}/>
         
      </Box>
    </Stack>
  )
}

export default Feed