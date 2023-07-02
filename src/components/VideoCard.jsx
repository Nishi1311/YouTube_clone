import React from 'react';

import { NavLink } from 'react-router-dom';
import {Box,Card,/*CardMedia,*/CardContent,Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../css/videocard.css';

//used to fetch data in a case that data is not fetched from rapid api for some reason
import {/*demoThumbnailUrl,*/demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle} from '../utils/constants';
const VideoCard = ({video:{id:{videoId},snippet},viewCount, likeCount }) => {
 
  return (
    <div className='card-div'>
    {/*<Card sx={{width:{md:'400px' , xs:"100%"},borderRadius:'none'}}>*/}
    <Card className='card-div-inner'>
      <NavLink to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      
        {/*<CardMedia   image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{height:180 , width: 400,borderRadius:'10px', objectFit:"cover"}}/>*/}
        <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title}/>
      
      </NavLink>
      <CardContent sx={{backgroundColor:'white' , height:'110px'}}>
        
      <NavLink to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/*<Typography variant='subtitle1' fontWeight='bold' color='black'>
        {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>*/}
        <h4>{snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}</h4>
        
      </NavLink>
      <Box sx={{display:'flex', gap:'0.2rem'}}>
      <NavLink to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight='bold' color='gray'>
          {snippet?.channelTitle || demoChannelTitle}
          
        </Typography>
        
      </NavLink>
      <CheckCircleIcon sx={{Color:'gray'}}/>
      
      </Box>
      </CardContent>
     
    </Card>
     </div>

  )
}

export default VideoCard