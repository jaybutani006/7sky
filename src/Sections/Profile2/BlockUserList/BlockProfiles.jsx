import React, { useEffect, useState } from "react";
import ShortListProfile from "../../../Components/Profile2/MatchesRequestCard/MatchesRequestCard";
import "./BlockProfiles.css";
// import React from "react";
// import "./MatchesRequestCard.css";
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
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import UploadIcon from "@mui/icons-material/Upload";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { BASE_URL } from "../../../BASE_URL";
const MatchesRequests = ({ horizontal, setValue }) => {
  var declinedRequestsClasses =
    horizontal === true
      ? "profile2_declined_request declined_request_horizontal"
      : "profile2_declined_request declined_request_vertical";

  const [error, setError] = useState(null);
  const [receivedData, setReceivedData] = useState([]);

  useEffect(() => {
    getAllShortListed();
  }, []);
  const [shortData, setShortData] = useState();
  const SendRequest = async (data) => {
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
    } catch (err) {
      alert(err);
    }
  };

  const handleUnblock = async (id) => {
    try {
      await axios
        .delete(
          `${BASE_URL}/api/blockuser?_id=${id}`,
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.code === 200) {
            getAllShortListed();
            alert("unblock Successfully");
          }
        })
        .catch((err) => alert(err));
    } catch (err) {
      alert(err);
    }
  };
  const getAllShortListed = async () => {
    try {
      await axios
        .get(`${BASE_URL}/api/blockuser`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          console.log(res.data.data);
          setReceivedData(res.data.data);
          // setShortData(res.data.data)
        })
        .catch((err) => alert(err));
    } catch (err) {
      alert(err);
    }
  };
  console.log(receivedData);
  // useEffect(() => {
  //   getAllShortListed();
  // }, []);
  console.log(shortData);
  const handleShortlist = async (data) => {
    // console.log(data._id);
    try {
      console.log("shortlist send request");
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
        getAllShortListed();

        alert("shortlist added Successfully");

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
  const navigate = useNavigate();
  // const handleChat = async () => {
  //   navigate("/messages");
  // };
  return (
    <div className="profile_declined_requests_wrapper">
      <div className="profile_declined_requests_wrapper_top">
        <h3 className="profile_requests_title">
          Blocked Profiles <span>({receivedData.length})</span>
        </h3>
        {/* <p
          onClick={() => {
            setValue("4");
          }}
        >
          View All
        </p> */}
      </div>
      <div className={declinedRequestsClasses} id="card">
        {receivedData?.map((data) => (
          // <MatchesRequestCard key={request._id} data={request} />
          <div
            className="received_request_card"
            // onClick={() => {
            //   navigate(`userprofile/${data._id}`);
            // }}
          >
            <div className="received_request_card_left">
              <div className="left_intro_group">
                <img
                  src={data && data?.profile?.[0]?.profile_photo}
                  alt=""
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate(`/userprofile/${data?.profile?.[0]?._id}`, {
                      state: { status: "block", id: data._id },
                    })
                  }
                />
                <div className="received_request_card_name">
                  <PersonIcon sx={{ height: "15px" }} />
                  {data && data?.profile?.[0]?.user_name}
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
                  navigate(`/userprofile/${data?.profile?.[0]?._id}`, {
                    state: { status: "block", id: data._id },
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
                  {data && data?.profile?.[0]?.home_town},
                  {data && data?.profile?.[0]?.state}
                </p>
                <p>
                  <TempleHinduIcon sx={{ height: "15px" }} />
                  {/* B.E./B.Tech */}
                  {data && data?.profile?.[0]?.highest_qualification}
                </p>
                <p>
                  <WorkOutlineIcon sx={{ height: "15px" }} />
                  {/* Software Developer / Programmar */}
                  {data && data.profile[0].job_title}
                </p>
              </div>
              {/* <p className="received_request_card_more_details">
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
              </p> */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {/* <div style={{ textAlign: "center" }}>
                  <FavoriteBorderIcon
                    sx={{ height: "25px", cursor: "pointer" }}
                    onClick={() => SendRequest(data)}
                  />
                  <p style={{ fontWeight: "400", fontSize: "10px" }}>
                    Interested
                  </p>
                </div> */}
                <div
                  style={{
                    marginLeft: "15px",
                    textAlign: "center",
                    color: "green",
                  }}
                >
                  <LockOpenIcon
                    sx={{ height: "25px", cursor: "pointer" }}
                    onClick={() => handleUnblock(data._id)}
                  />
                  <p style={{ fontWeight: "400", fontSize: "10px" }}>Unblock</p>
                </div>
                {/* <div style={{ marginLeft: "20px", textAlign: "center" }}>
                  <UploadIcon
                    sx={{ height: "25px", cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/selectplan`);
                    }}
                  />
                  <p style={{ fontWeight: "400", fontSize: "10px" }}>
                    UpgradePlan
                  </p>
                </div> */}
                {/* <div style={{ marginLeft: "20px", textAlign: "center" }}>
                  <CancelOutlinedIcon
                    sx={{ height: "25px", cursor: "pointer" }}
                  />
                  <p style={{ fontWeight: "400", fontSize: "10px" }}>cancel</p>
                </div> */}
              </div>
              {/* <p className="received_request_card_more_details">
                You have a message from Jay Kava. We restrict message reading to
                premium users only in the interest of our premium subscribers.{" "}
                <span>Upgrade Now</span>
              </p> */}
            </div>
          </div>
          // "jay"
        ))}
      </div>
    </div>
  );
};

export default MatchesRequests;
