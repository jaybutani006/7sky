// import { createAsyncThunk } from "@reduxjs/toolkit";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import "../Login/Login.css";
// import axios from "axios";
// import firebase from "../../firebase";

// const NewUSER = () => {
//     let navigate = useNavigate();
//     const routeChange = () => { 
//         let path = `/Otp`; 
//         navigate(path);
//       }
//   return (
//     <>
//       <div className="login__wrapepr">
//         <div className="login login-padding">
//             <h2>User Details</h2>
//           <input placeholder="First Name" type="text"/>
//           <input placeholder="Last Name" type="text"/>
//           <input placeholder="Mobile Number" type="tel"/>
//           <input placeholder="Email" type="email"/>
//           <input placeholder="Password" type="password"/>
//           <input placeholder="Confirm Password" type="password"/>
//           <div id="recaptcha"></div>
//           <button onClick={routeChange} className="text-light">Next</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewUSER;


import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewUSER.css";

const NewUSER = () => {
  const [user_name, setuser_name] = useState("");
  const [contact_no, setcontact_no] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      user_name: user_name,
      contact_no: "+91" + contact_no,
      email: email,
      password: password,
    };
    console.log(data);
    if (!user_name || !contact_no || !email || !password || !confirmPassword) {
      // setError("Please fill in all fields.");
      alert("Please fill in all fields.");
      return;
    } else if (password !== confirmPassword) {
      alert("Passwords do not match.");
      // setError("Passwords do not match.");
      return;
    } else if (contact_no.length !== 10) {
      alert("Please enter valid contact number");
      // setError("Passwords do not match.");
      return;
    }
    // const data = {
    //   user_name: user_name,
    //   contact_no: "+91" + contact_no,
    //   email: email,
    //   password: password,
    // };
    navigate("/Otp", { state: { data } });
  };

  return (
    <>
      <div className="login__wrapepr">
        <div className="login login-padding">
          <h2>User Details</h2>
          <input
            placeholder="Username"
            type="text"
            onChange={(e) => setuser_name(e.target.value)}
            required
          />
          <input
            placeholder="Mobile Number"
            type="tel"
            name="contact_no"
            id="contact_no"
            onChange={(e) => setcontact_no(e.target.value)}
            required
          />
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div id="recaptcha"></div>
          <button onClick={handleSubmit} className="text-light">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default NewUSER;

