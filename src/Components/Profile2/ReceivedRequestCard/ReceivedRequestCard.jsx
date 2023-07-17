import React from "react";
import "./ReceivedRequestCard.css";
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
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ChatIcon from "@mui/icons-material/Chat";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useNavigate } from "react-router-dom";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import crown from "../crown.png"
import { BASE_URL } from "../../../BASE_URL";

const ReceivedRequestCard = ({ data }) => {
  // console.log(data);
  // console.log(data.profile[0].age);
  const acceptRequest = async () => {
    // console.log("acceptRequest");
    console.log(data._id);
    try {
      const response = await fetch(
        `${BASE_URL}/api/request?_id=${data._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            // receiver_id: data._id,
            request_status: "confirm",
            request_type: "request",
          }),
        }
      );

      // console.log(response);
      if (response.status == 200) {
        // setIsRequestSent(true);

        alert("Request accept Successfully");
      }
    } catch (err) {
      alert(err);
    }
  };
  const navigate = useNavigate();
  const declineRequest = async () => {
    console.log("Decline Request");
    try {
      const response = await fetch(
        `${BASE_URL}/api/request?_id=${data._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            // receiver_id: data._id,
            request_status: "decline",
            request_type: "request",
          }),
        }
      );
      // console.log(response);
      if (response.status == 200) {
        // setIsRequestSent(true);
        alert("Request accept Successfully");
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="received_request_card">
      <div className="received_request_card_left" style={{position: "relative"}}>
        {data?.profile?.[0]?.member_type === "paid" && (
          <img
            src={crown}
            style={{
              width: "15px",
              height: "15px",
              position: "absolute",
              top: "53px",
              right: "10px",
            }}
            alt=""
          />
        )}
        <div
          className="left_intro_group"
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate(`/userprofile/${data.profile[0]._id}`, {
              state: { status: "invite", id: data._id },
            })
          }
        >
          <img src={data && data.profile[0].profile_photo} alt="" />
          <div className="received_request_card_name">
            <PersonIcon sx={{ height: "15px" }} />
            {data && data.profile[0].user_name}
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
        <div
          className="card_right_top"
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate(`/userprofile/${data.profile[0]._id}`, {
              state: { status: "invite", id: data._id },
            })
          }
        >
          <p>
            <TrendingUpIcon sx={{ height: "15px" }} />
            {/* 23 yrs, 5’8” */}
            {data && data?.profile?.[0]?.age} yrs,{" "}
            {data && data?.profile?.[0]?.height}
          </p>
          <p>
            <LanguageIcon sx={{ height: "15px" }} />
            {/* Gujarati, Ahir */}
            {data && data?.profile?.[0]?.mother_tongue},{" "}
            {data && data?.profile?.[0]?.community}
          </p>
          <p>
            <PlaceIcon sx={{ height: "15px" }} />
            {/* Surat, Gujarat */}
            {data && data?.profile?.[0]?.home_town},{" "}
            {data && data.profile[0].state}
          </p>
          <p>
            <TempleHinduIcon sx={{ height: "15px" }} />
            {/* B.E./B.Tech */}
            {data && data.profile[0].highest_qualification}
          </p>
          <p>
            <WorkOutlineIcon sx={{ height: "15px" }} />
            {/* Software Developer / Programmar */}
            {data && data.profile[0].job_title}
          </p>
        </div>
        <p
          className="received_request_card_more_details"
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate(`/userprofile/${data.profile[0]._id}`, {
              state: { status: "invite" },
            })
          }
        >
          {data && data?.profile?.[0]?.bio.length >= 100
            ? data && data?.profile?.[0]?.bio.substr(100) + "..."
            : data && data?.profile?.[0]?.bio}
          <span
            style={{ color: "#CF166F", cursor: "pointer" }}
            onClick={() => navigate("/selectplans")}
          >
            {" "}
            Upgrade Now
          </span>
        </p>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <div style={{ display: "grid", placeItems: "center" }}>
            {/* <DoneAllIcon
              sx={{ height: "25px", cursor: "pointer", color: "green" }}
              onClick={acceptRequest}
            /> */}
            <div
              style={{
                border: "1px solid lightgrey",
                borderRadius: "50%",
                height: "35px",
                width: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={declineRequest}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 11 11"
                fill="none"
              >
                <path
                  d="M8.22242 3.24414L3.1449 8.3095"
                  stroke="black"
                  stroke-opacity="0.5"
                  stroke-width="1.01625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.1449 3.24414L8.22242 8.3095"
                  stroke="black"
                  stroke-opacity="0.5"
                  stroke-width="1.01625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {/* <i>int</i> */}
            {/* <p style={{ fontWeight: "400", fontSize: "10px" }}>Decline</p> */}
          </div>
          <div
            style={{
              marginLeft: "10px",
              display: "grid",
              placeItems: "center",
            }}
          >
            {/* <i>int</i> */}
            {/* <RemoveDoneIcon
              sx={{ height: "25px", cursor: "pointer", color: "red" }}
              onClick={declineRequest}
            /> */}
            <div
              style={{
                border: "1px solid lightgrey",
                borderRadius: "50%",
                height: "35px",
                width: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "green",
                cursor: "pointer",
              }}
              onClick={acceptRequest}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 11 11"
                fill="none"
              >
                <path
                  d="M8.90357 3.24414L4.24918 7.88739L2.13354 5.77682"
                  stroke="white"
                  stroke-width="1.01625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            {/* <p style={{ fontWeight: "400", fontSize: "10px" }}>Accept</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivedRequestCard;
