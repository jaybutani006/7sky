import React from "react";
import LatestProfileCard from "../../Components/LatestProfileCard/LatestProfileCard";
import RecentVisitorCard from "../../Components/RecentVisitorCard/RecentVisitorCard";
import Notifications from "../../Sections/Profile/Notifications/Notifications";
import ProfileDetails from "../../Sections/Profile/ProfileDetails/ProfileDetails";
import "./ViewedProfile.css";

const ViewedProfile = () => {
  return (
    <div className="viewedprofile">
      <div className="viewedprofile__top">
        <div className="viewedprofile__top_left">
          <ProfileDetails />
        </div>
        <div className="viewedprofile__top_right">
          <Notifications />
        </div>
      </div>
      <div className="viewedprofile__bottom">
        <h3>Viewed Contact(06)</h3>

        <div className="viewedprofile__bottom_cards_wrapper">
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
          <RecentVisitorCard />
        </div>
      </div>
    </div>
  );
};

export default ViewedProfile;
