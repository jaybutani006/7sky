import React, { useState } from "react";
import ProfileNotificationCard from "../../../Components/ProfileNotificationCard/ProfileNotificationCard";
import "./Notifications.css";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Notifications = () => {
  const [openNotification, setOpenNotification] = useState(false);
  const [notificationsClasses, setNotificationsClasses] = useState(
    "profile__notifications_wrapper"
  );

  const handleViewAll = () => {
    console.log("clicked");
    console.log(notificationsClasses);
    if (!openNotification) {
      setNotificationsClasses(
        "profile__notifications_wrapper profile__notifications_wrapper_full"
      );
      setOpenNotification(true);
    } else {
      setNotificationsClasses("profile__notifications_wrapper");
      setOpenNotification(false);
    }
    console.log(notificationsClasses);
  };
  return (
    <div className="profile__notification">
      <div className="notification__header">
        <NotificationsNoneIcon />
        <div className="notification__header_details">
          <h3>
            Notification <span>06</span>
          </h3>
          <p>You have 5 recommandation to chat</p>
        </div>

        <button
          className="notification__view_all"
          onClick={() => handleViewAll()}
        >
          {openNotification ? "Close All" : "View All"}
        </button>
      </div>
      <div className={notificationsClasses}>
        <ProfileNotificationCard />
        <ProfileNotificationCard />
        <ProfileNotificationCard />
        <ProfileNotificationCard />
        <ProfileNotificationCard />
        <ProfileNotificationCard />
        <ProfileNotificationCard />
        <ProfileNotificationCard />
      </div>
    </div>
  );
};

export default Notifications;
