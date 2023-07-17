// import React from "react";
// import "./ProfileDetails.css";
// import img1 from "../../../Assets/signup/img1.png";
// import EditIcon from "@mui/icons-material/Edit";
// import googleAds from "../../../Assets/googleads.png";
// import { Link } from "react-router-dom";

// const ProfileDetails = () => {
//   const data = JSON.parse(localStorage.getItem("user"));
//   console.log(data);

//   return (
    // <div className="profile__details">
    //   <div>
    //     <div className="profile__card">
    //       <div className="profile__card_user">
    //         <img src={img1} alt="" />
    //         <div className="profile__card_name">
    //           <h3>{data?.user_name}</h3>
    //           <p>{data?.contact_no}</p>
    //         </div>
    //         <EditIcon />
    //       </div>
    //       <div className="profile__card_status">
    //         <p className="profile__card_status_status">status</p>
    //         <p className="profile__card_status_value">
    //           {data?.member_type} user
    //         </p>
    //       </div>
    //       <button className="profile__get_premium">
    //         <Link to="/selectplans">Get Premium</Link>
    //       </button>
    //     </div>
    //     <div className="profile__counts">
    //       <div className="profile__counts_card profile__counts_card1">
    //         <h3>6</h3>
    //         <p>Pending invitation</p>
    //       </div>
    //       <div className="profile__counts_card profile__counts_card2">
    //         <h3>12</h3>
    //         <p>Accepted invitation</p>
    //       </div>
    //       <div className="profile__counts_card profile__counts_card2">
    //         <h3>40</h3>
    //         <p>Recent Visitors</p>
    //       </div>
    //     </div>
    //   </div>

    //   <img src={googleAds} alt="" />
    // </div>
//   );
// };

// export default ProfileDetails;


import React, { useEffect, useState } from "react";
import "./ProfileDetails.css";
import img1 from "../../../Assets/signup/img1.png";
import EditIcon from "@mui/icons-material/Edit";
import googleAds from "../../../Assets/googleads.png";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../BASE_URL";
import axios from "axios";

const ProfileDetails = () => {
  const [user_id, setUser_Id] = useState("");
  const [profile__photo, setProfile_Photo] = useState("");
  const [profileData, setProfileData] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [memberType, setMemberType] = useState("");
  const [receivedData, setReceivedData] = useState([]);
  const [recentVisitorsData, setRecentVisitorsData] = useState([]);
  const [dataLengthVisitors, setDataLengthVisitors] = useState("");
  const [dataLengthInvitations, setDataLengthInvitations] = useState("");
  const [dataLengthAcceptedInvitations, setDataLengthAcceptedInvitations] =
    useState("");
  const [invitationsData, setInvitationsData] = useState([]);
  const token = localStorage.getItem("token");
  // console.log(token);

  useEffect(() => {
    fetchUser();
    fetchInvitations();
    fetchRecentVisitors();
    fetchAcceptedInvitations();
    // fetchProfileData();
  }, []);

  const fetchAcceptedInvitations = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/profile/recent_visitor`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const InvitationsData = response.data.data.receive_request;
      // console.log(InvitationsData);
      setInvitationsData(InvitationsData);
      const DataLengthPendingInvitations =
        response.data.data.receive_request.length;
      setDataLengthInvitations(DataLengthPendingInvitations);
      // console.log(DataLengthPendingInvitations);
    } catch (error) {
      console.log("Failed !!", error);
    }
  };

  const fetchInvitations = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/request/confirm`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const responseData = await response.json();

      setReceivedData(responseData.data);

      const inivitationsDataLength = responseData.data.length;
      setDataLengthInvitations(inivitationsDataLength);
      // console.log(receivedData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const fetchRecentVisitors = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/profile/recent_visitor`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      const recentVisitorsData = response.data.data.recent_visitors;
      // console.log(recentVisitorsData.length);
      setRecentVisitorsData(recentVisitorsData);
      const DataLengthVisitors = response.data.data.recent_visitors.length;
      setDataLengthVisitors(DataLengthVisitors);
    } catch (error) {
      console.log("Failed !!", error);
    }
  };

  const fetchUser = async () => {
    try {
      const r = await fetch(`${BASE_URL}/api/profile/userdetails`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (!r.ok) {
        throw new Error("Request failed");
      }

      const data = await r.json();
      const my_data = data.data.UserDetails;
      setProfileData(my_data);

      const userName = data?.data?.UserDetails?.user_name || "";
      const user_id = data?.data?.UserDetails[0]?._id;
      localStorage.setItem("userId", my_data._id);
      setUser_Id(user_id);
      setName(userName);

      const profilePhoto = data?.data?.UserDetails?.profile_photo;

      setProfile_Photo(profilePhoto);
      const status = data?.data?.UserDetails?.marital_status;
      setStatus(status);

      const memberType = data?.data?.UserDetails?.member_type;
      setMemberType(memberType);
    } catch (error) {
      console.error(error);
    }
  };

  const data = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const EditProfile = () => {
    navigate("/registration1");
  };

  return (
    <div className="profile__details">
      <div>
        <div className="profile__card">
          <div className="profile__card_user">
            <img
              src={profile__photo}
              alt=""
              style={{ width: "60px", height: "60px", borderRadius: "50%" }}
            />
            <div className="profile__card_name">
              <h3>{name}</h3>
              <p>{profileData.contact_no}</p>
            </div>
            <EditIcon />
          </div>
          <div className="profile__card_status">
            <p className="profile__card_status_status">{status}</p>
            <p
              className="profile__card_status_value"
              style={{ color: "#CF166F" }}
            >
              {memberType} user
            </p>
          </div>
          <button className="profile__get_premium btn_get_premium">
            <Link to="/selectplans" style={{textDecoration: "none", color: "white"}}>Get Premium</Link>
          </button>
        </div>
        <div className="profile__counts">
          <div className="profile__counts_card profile__counts_card1">
            <h3>{dataLengthInvitations}</h3>
            <p>Pending invitation</p>
          </div>
          <div className="profile__counts_card profile__counts_card2">
            <h3>
              {dataLengthAcceptedInvitations
                ? dataLengthAcceptedInvitations
                : 0}
            </h3>
            <p>Accepted invitation</p>
          </div>
          <div className="profile__counts_card profile__counts_card2">
            <h3>{dataLengthVisitors}</h3>
            <p>Recent Visitors</p>
          </div>
        </div>
      </div>

      <img src={googleAds} alt="" />
    </div>
  );
};

export default ProfileDetails;
