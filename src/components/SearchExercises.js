import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';

import { exerciseOptions, fetchData } from '../utilities/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';


const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  
  useEffect(()=>{
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData])
    console.log(bodyPartsData);

    }
    fetchExercisesData();
  },[])

  const handleSearch = async()=>{
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      console.log(exercisesData)
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignitems='center'
    mt='60px'
    justifyContent='center'
    p='20px'>
      <Typography
      fontWeight={700}
      sx={{fontSize:{lg:'44px', xs:'30px'}}}
      mb='50px'
      textAlign='center'>
        Exercises just for you!
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
        sx={{
          input:{
            fontWeight:'700',
            border:'none',
            borderRadius:'4px'
          },
          width:{lg:'1170px', xs:'350px'},
          backgroundColor:'#fff',
          borderRadius:'40px'
        }}
        height='76px'
        value={search}
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        placeholder='Search Exercises'
        type='text'/>
        <Button className='search-btn'
        sx={{
          bgcolor:'#ff2625',
          textTransform:'none',
          color:'#fff',
          width:{lg:'175px', xs:'80px'},
          fontSize:{lg:'20px', xs:'14px'},
          height:'56px',
          position:'absolute',
          right:'0px'
        }}
        onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{
        position: 'relative',
        width:'100%', p:'20px'
      }}>
        <HorizontalScrollBar data = {bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises
