import React from "react";
import "./MatchesRequestCard.css";
import img1 from "../../../Assets/profile2/img1.jpg";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LanguageIcon from "@mui/icons-material/Language";
import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonIcon from "@mui/icons-material/Person";
import BoltIcon from "@mui/icons-material/Bolt";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HeightIcon from "@mui/icons-material/Height";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ChatIcon from "@mui/icons-material/Chat";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../../BASE_URL";

const ReceivedRequestCard = ({ data }) => {
  console.log(data);
  // console.log(data.profile[0].age);
  const [shortData, setShortData] = useState();
  const SendRequest = async () => {
    console.log(data._id);
    try {
      const response = await fetch(`${BASE_URL}/api/request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          receiver_id: data._id,
          request_status: "pending",
          request_type: "request",
        }),
      });
  
      // console.log(response);
      if (response.status == 200) {
        // setIsRequestSent(true);
  
        alert("Request Send Successfully");
        // Update the button's innerHTML to "Sent" if the ID is already in the sent requests
        // const connectBtn = document.getElementById("connect_btn");
        // if (ids.includes(data._id)) {
        //   connectBtn.innerHTML = "Sent";
        // }
      }
    }
    catch(err){
      alert(err);
    }
  }
  const getAllShortListed = async () => {
    console.log(data._id);
    try {
      const response = await fetch(`${BASE_URL}/api/shortlist`, {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        }
      });
      console.log(response);
      // console.log(response);
      if (response.status == 200) {
        // setIsRequestSent(true);
        setShortData(response.data);
        // alert("Request Send Successfully");
        // Update the button's innerHTML to "Sent" if the ID is already in the sent requests
        // const connectBtn = document.getElementById("connect_btn");
        // if (ids.includes(data._id)) {
        //   connectBtn.innerHTML = "Sent";
        // }
      }
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    getAllShortListed();
  }, []);
  console.log(shortData);
  const handleShortlist = async () => {
    console.log(data._id);
    try {
      
      const response = await fetch(`${BASE_URL}/api/shortlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          shortlist_id: data._id,
        }),
      });
  
      // console.log(response);
      if (response.status == 200) {
        // setIsRequestSent(true);
  
        alert("shortlist added Successfully");
        // Update the button's innerHTML to "Sent" if the ID is already in the sent requests
        // const connectBtn = document.getElementById("connect_btn");
        // if (ids.includes(data._id)) {
        //   connectBtn.innerHTML = "Sent";
        // }
      }
    }
    catch(err){
      alert(err);
    }
  }
  const navigate = useNavigate();
  const handleChat = async () => {
    navigate("/messages");
  }

  return (
    <div className="received_request_card">
      <div className="received_request_card_left">
        <div className="left_intro_group">
          <img src={data && data.profile_photo} alt="" />
          <div className="received_request_card_name">
            <PersonIcon sx={{ height: "15px" }} />
            {data && data.user_name}
            <BoltIcon style={{ color: "#FCF204", height: "15px" }} />
          </div>
          {/* {data && data[0]?.profile && data[0].profile[0]?.user_name} */}
          <p className="online_now">
            Online now
            <FiberManualRecordIcon
              sx={{ height: "8px", color: "#22B00B", margin: "0px" }}
            />
          </p>
        </div>
      </div>
      <div className="received_request_card_right">
        <div className="card_right_top">
          <p>
            <TrendingUpIcon sx={{ height: "15px" }} />
            {/* 23 yrs, 5’8” */}
            {data && data.age}
          </p>
          <p>
            <LanguageIcon sx={{ height: "15px" }} />
            {/* Gujarati, Ahir */}
            {data && data.mother_tongue}
          </p>
          <p>
            <PlaceIcon sx={{ height: "15px" }} />
            {/* Surat, Gujarat */}
            {data && data.state}
          </p>

          <p>
            <HeightIcon sx={{ height: "15px" }} />
            {/* B.E./B.Tech */}
            {data && data.height}
          </p>
          <p>
            <TempleHinduIcon sx={{ height: "15px" }} />
            {/* B.E./B.Tech */}
            {data && data.religion}
          </p>
          <p>
            <WorkOutlineIcon sx={{ height: "15px" }} />
            {/* Software Developer / Programmar */}
            {data && data.designation}
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ textAlign: "center" }}>
            <FavoriteBorderIcon
              sx={{ height: "25px", cursor: "pointer" }}
              onClick={SendRequest}
            />
            {/* <i>int</i> */}
            <p style={{ fontWeight: "400", fontSize: "10px" }}>Interested</p>
          </div>
          <div style={{ marginLeft: "15px", textAlign: "center" }}>
            <StarBorderIcon
              sx={{ height: "25px", cursor: "pointer" }}
              onClick={handleShortlist}
            />
            {/* <i>int</i> */}
            <p style={{ fontWeight: "400", fontSize: "10px" }}>shortlist</p>
          </div>
          <div style={{ marginLeft: "20px", textAlign: "center" }}>
            <ChatIcon sx={{ height: "25px", cursor: "pointer" }} onClick={handleChat} />
            {/* <i>int</i> */}
            <p style={{ fontWeight: "400", fontSize: "10px" }}>chat</p>
          </div>
          <div style={{ marginLeft: "20px", textAlign: "center" }}>
            {/* <i>int</i> */}
            <CancelOutlinedIcon sx={{ height: "25px", cursor: "pointer" }} />
            <p style={{ fontWeight: "400", fontSize: "10px" }}>cancel</p>
          </div>
        </div>
        <p className="received_request_card_more_details">
          You have a message from Jay Kava. We restrict message reading to
          premium users only in the interest of our premium subscribers.{" "}
          <span>Upgrade Now</span>
        </p>
      </div>
    </div>
  );
};

export default ReceivedRequestCard;
