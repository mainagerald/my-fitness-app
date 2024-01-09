import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';
import Banner2 from '../assets/images/banner2.jpg';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg:'200px', xs:'70px'},
        ml: {sm:'50px'}
    }} position='relative' p='20px'>
        <Typography color='#ff2625' fontWeight='600' fontSize='26px'>
            Fitness Club!
        </Typography>
        <Typography
        fontWeight={700}
        sx={{fontSize:{lg:'44px', xs:'40px'}}}>
          Sweat, Smile <br/> and Repeat
          </Typography>
        <Typography
        fontSize='22px'
        lineHeight='35px'
        mb={4}>
            Check out these effective exercises!
        </Typography>
        <Button
        variant='contained'
        color='error'
        href='#exercises'
        sx={{backgroundColor:'#ff2625',
        padding:'10px'}}>
          Explore Exercises
        </Button>
        <Typography
        fontWeight={600}
        color='#ff2625'
        sx={{
          opacity:0.1,
          display:{lg: 'block', xs: 'none'}
        }}
        fontSize='200px'
        ></Typography>
        <img src={Banner2} alt='banner' className='hero-banner-img'
        style={{
          width: '110%', // Adjust the width as needed
          opacity: 0.3, // Adjust the opacity as needed
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}></img>
        {/* <img src={Banner2} alt='banner' className='hero-banner-img'></img> */}
    </Box>
  )
}

export default HeroBanner
