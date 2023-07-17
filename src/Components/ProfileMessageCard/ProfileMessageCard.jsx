import React from "react";
import "./ProfileMessageCard.css";

import img1 from "../../Assets/signup/img1.png";
const ProfileMessageCard = () => {
  return (
    <div className="profilemessagecard">
      <img src={img1} alt="" />
      <div className="profilemessage__details">
        <p className="profilemessage__name">John Doe</p>
        <p className="profilemessage__message">Hey! How r u?</p>
      </div>
      <div className="profilemessage__time">
        <p className="profilemessage_day">Today</p>
        <p className="profilemessage_unread_messages">1</p>
      </div>
    </div>
  );
};

export default ProfileMessageCard;
