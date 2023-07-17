import React from "react";
import "./ProfileNotificationCard.css";
import img1 from "../../Assets/signup/img1.png";

const ProfileNotificationCard = () => {
  return (
    <div className="ProfileNotificationCard">
      <img src={img1} alt="" />
      <p className="ProfileNotificationCard__message">
        Manish changed his profile photo
      </p>
      <span className="ProfileNotificationCard__time">2h ago</span>
    </div>
  );
};

export default ProfileNotificationCard;
