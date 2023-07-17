import React from "react";
import "./SentRequestsCard.css";
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
import PhoneIcon from "@mui/icons-material/Phone";
import crown from "../crown.png"
import { BASE_URL } from "../../../BASE_URL";

const ReceivedRequestCard = ({ data }) => {
  console.log(data);
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
            request_status: "cancel",
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
        <div className="left_intro_group">
          <img
            src={data && data.profile[0].profile_photo}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate(`/userprofile/${data?.profile?.[0]?._id}`, {
                state: { status: "sent", id: data._id },
              });
            }}
          />
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
          onClick={() => {
            navigate(`/userprofile/${data?.profile?.[0]?._id}`, {
              state: { status: "sent", id: data._id },
            });
          }}
        >
          <p>
            <TrendingUpIcon sx={{ height: "15px" }} />
            {/* 23 yrs, 5’8” */}
            {data && data.profile[0].age} yrs, {data && data.profile[0].height}
          </p>
          <p>
            <LanguageIcon sx={{ height: "15px" }} />
            {/* Gujarati, Ahir */}
            {data && data.profile[0].mother_tongue},{" "}
            {data && data.profile[0].community}
          </p>
          <p>
            <PlaceIcon sx={{ height: "15px" }} />
            {/* Surat, Gujarat */}
            {data && data.profile[0].home_town}, {data && data.profile[0].state}
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
        <p className="received_request_card_more_details">
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
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* <div style={{ marginLeft: "20px", textAlign: "center" }}>
            <ChatIcon
              sx={{ height: "25px", cursor: "pointer" }}
              onClick={() => navigate("/messages")}
            />
            <p style={{ fontWeight: "400", fontSize: "10px" }}>chat</p>
          </div> */}
          <div style={{ marginLeft: "15px", textAlign: "center" }}>
            <PhoneIcon
              sx={{ height: "25px", cursor: "pointer" }}
              // onClick={handleShortlist}
            />
            {/* <i>int</i> */}
            <p style={{ fontWeight: "400", fontSize: "10px" }}>Contact</p>
          </div>

          <div style={{ marginLeft: "20px", textAlign: "center" }}>
            {/* <i>int</i> */}
            <CancelOutlinedIcon
              sx={{ height: "25px", cursor: "pointer" }}
              onClick={declineRequest}
            />
            <p style={{ fontWeight: "400", fontSize: "10px" }}>Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivedRequestCard;
