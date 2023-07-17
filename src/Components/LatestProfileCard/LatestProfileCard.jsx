import React from "react";
import "./LatestProfileCard.css";

const LatestProfileCard = ({ image, message, name }) => {
  return (
    <div className="latestProfileCard">
      <img src={image} alt="" />
      <p>{message}</p>
      <span>{name}</span>
    </div>
  );
};

export default LatestProfileCard;
