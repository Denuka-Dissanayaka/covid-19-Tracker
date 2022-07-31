import React from 'react'
import CountUp from 'react-countup';
import {Typography, Box} from '@mui/material';
import style from './databox.module.css'

function DataBox(props) {
 
  return (
    <Box className={style.container} sx={{backgroundColor:props.bgColor}} mb={2}>
      <Typography variant='h4' color={'#525050'}>{props.title}</Typography>
      <Typography align='center' sx={{fontSize: '25px'}} color={'#525050'}><CountUp start={0} end={props.value} duration={2.5} separator=","/></Typography>
    </Box>
  )
}

export default DataBox
