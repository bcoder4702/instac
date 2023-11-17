import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Valo from './valo';


const Readmore = () => {
    const [blogData,newblogData]=useState();
    const location=useLocation();
    const id=location.state;
    const sendRequest = async () =>{
       const res= await axios.get(`http://localhost:5000/api/blog/${location.state}`)
       .catch(err=>console.log(err))
       const data= await res.data;
       return data;
    }
    useEffect(()=>{
      sendRequest().then(data=>newblogData(data))
    },[])
    {blogData && console.log(blogData.blog
      )};
  return (
      <div>{blogData && <Valo time={blogData.blog.createdAt} title={blogData.blog.title} description={blogData.blog.description} image={blogData.blog.image} />}</div>
  )
}

export default Readmore