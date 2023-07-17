import React, { useEffect, useState } from "react";
import "./Profile2.css";
import {
  Alarm,
  Message,
  NavigateBefore,
  NavigateNext,
  Search,
} from "@mui/icons-material";
import RecentVisitorCard from "../../Components/RecentVisitorCard/RecentVisitorCard";
import RecentVisitors from "../../Sections/Profile/RecentVisitors/RecentVisitors";
import Notifications from "../../Sections/Profile/Notifications/Notifications";
import ProfileDetails from "../../Sections/Profile/ProfileDetails/ProfileDetails";
import Invitations from "../../Sections/Profile/Invitations/Invitations";
import NewMatches from "../../Sections/Profile/NewMatches/NewMatches";
import PremiumMatches from "../../Sections/Profile/PremiumMatches/PremiumMatches";
import Messages from "../../Sections/Profile/MessagesComponent/MessagesComponent";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ReceivedRequests from "../../Sections/Profile2/ReceivedRequests/ReceivedRequests";
import MatchesRequests from "../../Sections/Profile2/MatchesRequests/MatchesRequests";
import AcceptedRequests from "../../Sections/Profile2/AcceptedRequestsCard/AcceptedRequestsCard";
import DeclinedRequests from "../../Sections/Profile2/DeclinedRequests/DeclinedRequests";
import SentRequests from "../../Sections/Profile2/SentRequests/SentRequests";

// import Profiles from "../Profiles/Profiles.jsx";
// import Profiles from "../Profiles/Profiles.jsx";
import { BASE_URL } from "../../BASE_URL";

const Profile2 = () => {
  const [value, setValue] = useState("1");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const FetchRequest = async (event) => {
    // fetch("https://metrimonial.onrender.com/api/request")
    try {
      // const LURL = process.env.LURL;
      // fetch("${LURL}/api/term_and_condition");
      const response = await fetch(
        `${BASE_URL}/api/request`
      );
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const responseData = await response.json();
      setData(responseData);
      console.log(responseData);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="profile2">
      <div className="profile2_left">
        <Box sx={{ minWidth: "400px" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                gap: "20px",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                TabIndicatorProps={{
                  sx: { backgroundColor: "rgba(207, 22, 111, 0.5)" },
                }}
                sx={{
                  "& button": { fontFamily: "poppins" },
                  "& button:active": { color: "rgba(207, 22, 111, 0.5)" },
                  "& button.Mui-selected": { color: "rgba(207, 22, 111, 0.5)" },
                  display: "flex",
                  gap: "30px",
                }}
              >
                <Tab label="Matches" value="1" style={{ minWidth: "150px" }} />
                <Tab
                  label="Received request"
                  value="2"
                  style={{ minWidth: "150px" }}
                  onClick={FetchRequest}
                />
                <Tab
                  label="Accepted request"
                  value="3"
                  style={{ minWidth: "150px" }}
                />
                <Tab
                  label="Sent request"
                  value="4"
                  style={{ minWidth: "150px" }}
                />
                <Tab
                  label="Declined request"
                  value="5"
                  style={{ minWidth: "150px" }}
                />
              </TabList>
            </Box>

            {/* <Profiles horizontal={true} setValue={setValue} /> */}
            <TabPanel value="1">
              {/* <ReceivedRequests horizontal={true} setValue={setValue} />
              <AcceptedRequests horizontal={true} setValue={setValue} />
              <SentRequests horizontal={true} setValue={setValue} />
              <DeclinedRequests horizontal={true} setValue={setValue} />
              <div className="profile2_accepted_request"></div>
              <div className="profile2_sent_request"></div>
              <div className="profile2_declined_request"></div> */}
              <MatchesRequests horizontal={false} />
            </TabPanel>
            <TabPanel value="2">
              <ReceivedRequests horizontal={false} />
            </TabPanel>
            <TabPanel value="3">
              <AcceptedRequests horizontal={false} />
            </TabPanel>
            <TabPanel value="4">
              <SentRequests horizontal={false} />
            </TabPanel>
            <TabPanel value="5">
              <DeclinedRequests horizontal={false} />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
      <div className="profile2_right">
        <Notifications />

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
  );
};

export default Profile2;
