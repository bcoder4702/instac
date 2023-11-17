import React, { useState } from "react";
import "./Login.css";
import axios from  'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { authActions } from '../store'

function Login() {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendRequest = async () =>{
    const res=await axios.post(`http://localhost:5000/api/user/login`,{ 
      email: email,
      password:password,
    }).catch((err)=>console.log(err))
    const data = await res.data;
     console.log("heyyyyy")
    console.log(data)
    return data;
  }

   const handleLogin = () => {
    sendRequest().then((data)=>localStorage.setItem("userId",data.user._id))
    .then(()=> dispatch(authActions.login())).then(()=> navigate("/blogs"))
    .then(data=>console.log(data))
   };
  return (
    <div className="login">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgOH-_XHjgCYAthu0wZgr2ugKpb4xNE94zQIjsktW&s"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

export default Login;
