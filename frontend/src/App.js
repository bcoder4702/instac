import React, { useEffect, useState } from "react";
import {Router, Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import UserInformation from "./components/userinfo";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import Readmore from "./components/Readmore";
import Authenticate from "./components/Authenticate"
import Header from "./components/Header";

function App() {
  const [response,Setresponse]=useState();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  console.log(isLoggedIn)
  useEffect(() =>{
     if(localStorage.getItem("userId")){
      dispatch(authActions.login());
     }
  },[dispatch])
  return <React.Fragment>
       <header>
       {isLoggedIn?<Header/> :<Authenticate/>}
    </header>
    <main>
      <landingpage/>
      <Routes>
        {!isLoggedIn ? <Route path="*" element={<h1>No match</h1>} /> :
        <>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/myBlogs" element={<UserBlogs/>}/>
        <Route path="blogs/myBlogs/:id" element={<BlogDetail/>}/>
        <Route path="myBlogs/myBlogs/:id" element={<BlogDetail/>}/>
        <Route path="/blogs/add" element={<AddBlog/>}/>
        {/* <Route path="/userinfo" element={<UserInformation response={response}/>}/> */}
        <Route path="/readmore" element={<Readmore/>}/></>
}</Routes>
    </main>
  </React.Fragment>
}

export default App;
