import React, { useState } from "react";
import ProfileMessageCard from "../../../Components/ProfileMessageCard/ProfileMessageCard";
import "./MessagesComponent.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const MessagesComponent = () => {
  const [openMessages, setOpenMessages] = useState(false);
  const [messagesClasses, setMessagesClasses] = useState(
    "profile__messages_wrapper"
  );

  const handleViewAll = () => {
    if (!openMessages) {
      setMessagesClasses(
        "profile__messages_wrapper profile__messages_wrapper_full"
      );
      setOpenMessages(true);
    } else {
      setMessagesClasses("profile__messages_wrapper");
      setOpenMessages(false);
    }
  };
  return (
    <div className="profile__messages">
      <Link to="/profile" className="porfile__messages_back_icon">
        <ArrowBackIcon />
      </Link>
      <div className="profile__messages_messages__header">
        <div className="mprofile__messages_messages__header_details">
          <h3>
            New Message <span>06</span>
          </h3>
        </div>
        <button className="messages__view_all" onClick={() => handleViewAll()}>
          {openMessages ? "Close All" : "View All"}
        </button>
      </div>
      <div className={messagesClasses}>
        <ProfileMessageCard />
        <ProfileMessageCard />
        <ProfileMessageCard />
        <ProfileMessageCard />
        <ProfileMessageCard />
        <ProfileMessageCard />
        <ProfileMessageCard />
        <ProfileMessageCard />
        <ProfileMessageCard />
        <ProfileMessageCard />
        <ProfileMessageCard />
        <ProfileMessageCard />
        <ProfileMessageCard />
        <ProfileMessageCard />
        <ProfileMessageCard />
        <ProfileMessageCard />
        <ProfileMessageCard />
      </div>
    </div>
  );
};

export default MessagesComponent;
