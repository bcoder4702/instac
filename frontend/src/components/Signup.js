import React, { useState } from "react";
import "./Signup.css";
import axios from  'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { authActions } from '../store'

function Signup() {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const sendRequest = async () =>{
    const res=await axios.post(`http://localhost:5000/api/user/signup`,{
    name:username,  
    email: email,
      password:password,
    }).catch((err)=>console.log(err))
    const data = await res.data;
     console.log("heyyyyy")
    console.log(data)
    return data;
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    sendRequest().then((data)=>localStorage.setItem("userId",data.user._id))
      .then(()=> dispatch(authActions.login())).then(()=> navigate("/blogs"))
      .then(data=>console.log(data))
  };
  return (
    <div className="signup">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgOH-_XHjgCYAthu0wZgr2ugKpb4xNE94zQIjsktW&s"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="email"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
    </div>
  );
}

export default Signup;
