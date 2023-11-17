import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 
const Blog = ({title,description,imageURL,userName,isUser,id}) => {
  const navigate= useNavigate();
  const handleEdit = (e) =>{
    navigate(`myBlogs/${id}`);
  }
  const deleteRequest = async () =>{
    const res= await axios.delete(`http://localhost:5000/api/blog/${id}`)
    .catch(err=>console.log(err))
    const data= await res.data;
    return data;
  }
  const handleDelete =  (e) =>{
     deleteRequest().then(()=>navigate("/")).then(()=>navigate("/blogs"))
  }
  const handleMove = () =>{
    navigate("/readmore",{state: id});
  }
  console.log(title,isUser)
  //  console.log({description});
  return (
    <div><Card sx={{bgcolor: '', width: '40%' , margin: 'auto',mt:2 ,padding:2 , boxShadow: "5px 5px 10px #ccc" , ":hover:":{
        boxShadow:"10px 10px 20px #ccc"
    }}}>
      {isUser && (
        <Box display={'flex'}>
         <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}}><EditIcon/></IconButton>
         <IconButton onClick={handleDelete}><DeleteIcon/></IconButton>
        </Box>
      )}
      <Box display={'flex'}><IconButton onClick={handleMove}><ReadMoreIcon/></IconButton></Box>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'green' }} aria-label="recipe">
          {userName ? userName.charAt(0) : ""}
        </Avatar>
      }
      title={title}
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image={imageURL}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        <b>{userName}</b>{":"}{description}
      </Typography>
    </CardContent>
  </Card></div>
  )
}

export default Blog