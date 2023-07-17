import { createAsyncThunk } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import firebase from "../../firebase";
import { BASE_URL } from "../../BASE_URL";

const Login = () => {
  const [dell, setDell] = useState({
    contact_no: "",
    password: "",
  });
  const navigate = useNavigate();

  const txt = (e) => {
    const { name, value } = e.target;
    setDell({ ...dell, [name]: value });
  };
  console.log(dell);

  const handleSubmit = async () => {
    // dispatch(loginUser(phone));
    // let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    // let number = phone;

    // firebase
    //   .auth()
    //   .signInWithPhoneNumber(number, recaptcha)
    //   .then(function (e) {
    //     let code = prompt("Enter the otp", "");
    //     if (code == null) return;
    //     e.confirm(code)
    //       .then(function (result) {
    //         alert("Number Varified");
    //         handleLogin();
    //       })
    //       .catch((err) => console.log(err));
    //   });
    handleLogin();
  };

  const handleLogin = async () => {
    // await axios
    //   .post(
    //     "https://metrimonial.onrender.com/api/profile/login",
    //     { contact_no: phone },
    //     { password: pass },
    //     {
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res.data.data);
    //     localStorage.clear();
    //     localStorage.setItem("user", JSON.stringify(res.data.data.user[0]));
    //     localStorage.setItem("token", res.data.data.token);
    //     alert("Register success");
    //     navigate("/profile");
    //   })
    //   .catch((err) => alert(err));
    const { contact_no, password } = dell;
    const formattedContactNo = "+91" + contact_no;
    if (formattedContactNo.length !== 13) {
      alert("Invalid Mobile Number");
      return;
    }
    const res = await fetch(`${BASE_URL}/api/profile/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contact_no: formattedContactNo,
        password,
      }),
    });
    const abc = await res.json();
    console.log(abc);

    if (abc.code == 200) {
      navigate("/profile");
      // localStorage.clear();
      localStorage.setItem("user", JSON.stringify(abc.data));
      localStorage.setItem("token", abc.data.token);
    }
    else {
      alert("please enter correct contact number and password");
    }
  };

  return (
    <div className="login__wrapepr">
      <div className="login">
        <input
          placeholder="Phone"
          type="text"
          onChange={txt}
          name="contact_no"
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={txt}
          name="password"
        />
        <div id="recaptcha"></div>
        <Link to="/NewUSER">New user ?</Link>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
