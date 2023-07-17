import { createAsyncThunk } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import axios from "axios";
import firebase from "../../firebase";
import { BASE_URL } from "../../BASE_URL";

const Otp = () => {
  let navigate = useNavigate();
  const [otp, setOtp] = useState();
  const handleChangeOtp = (e) => {
    setOtp(e.target.value);
  }
  const location = useLocation();
  const {data} = location.state;
  const handleSubmit = async () => { 
    try{
      if (otp === "1234") {
        const response = await axios.post(`${BASE_URL}/api/profile`, data, {
          headers: {
            "Content-Type": "application/json", // Set the content type to multipart/form-data
          },
        });
  
        console.log(response);
      if (response.status === 200) {
        // Data stored or updated successfully
        console.log("Data stored or updated successfully");
        console.log(response.data.data.token);
        localStorage.setItem("token", response.data.data.token);
        navigate("/personal-deatils");
      }
        // let path = `/personal-deatils`; 
        // navigate(path);
      }
      else {
        alert("enter valid otp");
      }

    }
    catch (err) {
      // console.log("123");
      alert(err);
    }
    }
  return (
    <>
      <div className="login__wrapepr">
        <div className="login OTP_input">
          <h2>Enter OTP</h2>
          <input
            type="tel"
            maxLength="4"
            placeholder="OTP"
            className="OTP_input"
            value={otp}
            onChange={handleChangeOtp}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Otp;
