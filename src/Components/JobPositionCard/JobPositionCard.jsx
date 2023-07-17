import React from "react";
import { Link } from "react-router-dom";
import "./JobPositionCard.css";

const JobPositionCard = ({ title, location, workPlace, type, jobLink }) => {
  return (
    <div className="jobpositioncard">
      <div>
        <h3 className="job__title">{title}</h3>
        <span className="job__details">
          {location} | {workPlace} | {type}
        </span>
      </div>

      <button className="apply__now__button">
        <Link to={jobLink}>Apply Now</Link>
      </button>
    </div>
  );
};

export default JobPositionCard;
