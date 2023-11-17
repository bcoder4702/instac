import React, { useState } from 'react';
import './userinfo.css';
function UserInformation(props) {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');

  // const handleFirstNameChange = (event) => {
  //   setFirstName(event.target.value);
  // }

  // const handleLastNameChange = (event) => {
  //   setLastName(event.target.value);
  // }

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const user = {
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email
  //   }

  //   // Do something with user object (e.g. send to server)

  //   alert('User information submitted!');
  // }
  console.log("hey")
  console.log(props.response);
  console.log("hye")
  console.log(props.response.email);
  return (
    <div className="container">
      <h1 className="title">User information</h1>
      <form  className="form">
        {/* <label className="label">
            Name:{props.response.name} 
        </label> */}
        {/* <br /> */}
        <label className="label">
          Email:{props.response.email}
        </label>
      </form>
    </div>
  );
}

export default UserInformation;
