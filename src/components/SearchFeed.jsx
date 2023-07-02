/*import React,{useEffect, useState} from 'react'
import {Box, Typography} from '@mui/material';
import {Videos} from './';
import {fetchFromAPI} from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';



const SearchFeed = () => {
  
  const[videos,setVideos]=useState([]);
  const {searchTerm}=useParams;
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=> setVideos(data.items))
  },[searchTerm])
  return (
    
      
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: "red" }}>
          Search results for:<span style={{ color: "black" }}>{searchTerm}</span>videos
        </Typography>
        <Videos  videos={videos}/>
         
      </Box>
    
  )
}

export default SearchFeed*/
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="black" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;