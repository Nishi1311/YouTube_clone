/*import React,{useState,useEffect} from 'react';
import {fetchFromAPI} from '../utils/fetchFromAPI';
import { Videos,ChannelCard} from "./";
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

const ChannelDetail = () => {
  const[channelDetail,setChannelDetail]=useState(null)
  const [videos, setVideos] = useState(null);
  const {id}=useParams;
  useEffect(()=>{fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data.items[0]));fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items));
  },[id])

return(
 <Box minHeight='95vh'>
  <Box>
    <div style={{
      
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,103,1) 35%, rgba(0,212,255,1) 100%)',
      zIndex:10,
      height:'300px'
    }}/>
     <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>

   
  </Box>
  <Box display='flex' p='2'>
    <Box sx={{mr:{sm:'100px'}}}/>
    <Videos  videos={videos}/>
    

  </Box>

 </Box>
)

}
export default ChannelDetail*/


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import '../css/channeldetail.css'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div className='box-div'>
        <div style={{
          height:'250px',
          background:'#283593',
          zIndex: 10,
          minWidth: { xs: '100%', md: '100%' },
          
        }}/>
      </div>
     
         
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
      <div className="channeldetail">
        <Videos videos={videos} />
        </div>
      </Box>
      
      </Box>
  );
};

export default ChannelDetail;
