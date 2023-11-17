import {Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Moment from 'react-moment';


const valo = (props) => {
  return (
    <div><Card sx={{bgcolor: '', width: '80%',height: '50%' , margin: 'auto',mt:2 ,padding:2 , boxShadow: "5px 5px 10px #ccc" , ":hover:":{
        boxShadow:"10px 10px 20px #ccc"
    }}}>
    <CardHeader
      title={props.title}
      subheader=<Moment>{props.time}</Moment>
    />
    <CardMedia
      component="img"
      height="30%"
      widht="80%"
      image={props.image}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {props.description}
      </Typography>
    </CardContent>
  </Card></div>
  )
}

export default valo