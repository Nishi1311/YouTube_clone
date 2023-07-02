/*import React from 'react';
import {Box,CardMedia,CardContent, Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ChannelCard = ({channelDetail,marginTop}) => {
  
  <Box sx={{boxShadow:'none',borderRadius:"20px",display:'flex',justifyContent:'center',alignItems:"center",width:{xs:'350px',md:'320px'},height:'326px',marginTop}}>
    <NavLink to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{display:'flex',justifyContent:'center',textAlign:"center",flexDirection:'column' ,color:'yellow'}}>
         <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{borderRadius:"50%",height:'180px',width:'180px',mb:2 , border:'1px solid blue'}}/>
         <Typography varient='h6'>
          {channelDetail?.snippet?.title}
          <CheckCircleIcon sx={{Color:'gray',fontSize:14,ml:'5px'}}/>

         </Typography>
         {channelDetail?.statistics?.subscriberCount && (
         <Typography>
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
         </Typography>)}
      </CardContent>
    </NavLink>
  
  </Box>
}
         
  

  


export default ChannelCard*/





import React from 'react';
import { Box, CardContent,/* CardMedia,*/ Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import '../css/channelcard.css'

const ChannelCard = ({ channelDetail, marginTop }) => (
  <div className='channelcard-div'>
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '390px' },
      height: '326px',
      margin: 'auto',
      marginTop,
      position:'relative',
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        {/*<CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
  />*/}
         <img src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
         alt={channelDetail?.snippet?.title}/>
         <div className='title'>
        <Typography variant="h6" sx={{color:'black'}}>
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'black', ml: '5px' }} />
        </Typography>
        </div>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'black' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
  </div>
);

export default ChannelCard;
