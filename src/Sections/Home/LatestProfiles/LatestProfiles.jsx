import React from "react";
import LatestProfileCard from "../../../Components/LatestProfileCard/LatestProfileCard";
import img1 from "../../../Assets/latestProfiles/img1.png";
import img2 from "../../../Assets/latestProfiles/img2.png";
import img3 from "../../../Assets/latestProfiles/img3.png";
import img4 from "../../../Assets/latestProfiles/img4.png";
import "./LatestProfiles.css";

const LatestProfiles = () => {
  return (
    <div className="latestprofiles">
      <div className="profile__intro">
        <h2>Latest added profiles</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <button>Get Started</button>
      </div>
      <div className="profile__imgs">
        <div className="column__1">
          <LatestProfileCard
            image={img1}
            name="Rio, 30 Years"
            message="“What I am is good enough for you”"
          />
          <LatestProfileCard
            image={img3}
            name="Rio, 30 Years"
            message="“What I am is good enough for you”"
          />
        </div>
        <div className="column__2">
          <LatestProfileCard
            image={img2}
            name="Rio, 30 Years"
            message="“What I am is good enough for you”"
          />
          <LatestProfileCard
            image={img4}
            name="Rio, 30 Years"
            message="“What I am is good enough for you”"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestProfiles;
