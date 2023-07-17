import React, { useEffect } from "react";
import "./Profile.css";
import { Message, Search } from "@mui/icons-material";
import RecentVisitors from "../../Sections/Profile/RecentVisitors/RecentVisitors";
import Notifications from "../../Sections/Profile/Notifications/Notifications";
import ProfileDetails from "../../Sections/Profile/ProfileDetails/ProfileDetails";
import Invitations from "../../Sections/Profile/Invitations/Invitations";
import NewMatches from "../../Sections/Profile/NewMatches/NewMatches";
import PremiumMatches from "../../Sections/Profile/PremiumMatches/PremiumMatches";
import Messages from "../../Sections/Profile/MessagesComponent/MessagesComponent";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../BASE_URL";
const Profile = () => {
  const [recentVisitors, setRecentVisitors] = useState([]);
  const [invitations, setInvitations] = useState([]);
  const [newMatches, setNewMatches] = useState([]);
  const [premiumMatches, setPremiumMatches] = useState([]);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    // await axios
    //   .get("https://metrimonial.onrender.com/api/profile/recent_visitor", {
    //     headers: {
    //       Authorization: `${localStorage.getItem("token")}`,
    //     },
    //   })
    //   .then((res) => {
    //     setRecentVisitors(res.data.data.recent_visitors);
    //     setInvitations(res.data.data.receive_request);
    //     setNewMatches(res.data.data.new_matches);
    //     setPremiumMatches(res.data.data.premium_matches);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const res = await fetch(
      `${BASE_URL}/api/profile/userdetails`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="profile">
      <div className="profile__top">
        <div className="profile__top_left">
          <div className="mobile_version_icons">
            <Link to="/notifications">
              <NotificationsNoneIcon />
            </Link>
            <Link to="/messages">
              <Message />
            </Link>
          </div>
          <ProfileDetails />
          <RecentVisitors recentVisitors={recentVisitors} />
          <Invitations invitations={invitations} />
        </div>
        <div className="profile__top_right">
          <Notifications />

          <div className="profile__top_right_content_wrapper">
            <div className="profile_messages_search_input_wrapper">
              <Search />
              <input
                placeholder="Search"
                type="text"
                className="profile_messages_search_input"
              />
            </div>
            <Messages />
          </div>
        </div>
      </div>
      <div className="profile__bottom">
        <NewMatches newMatches={newMatches} />
        <PremiumMatches premiumMatches={premiumMatches} />
      </div>
    </div>
  );
};

export default Profile;
