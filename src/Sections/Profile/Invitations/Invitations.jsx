// import { NavigateBefore, NavigateNext } from "@mui/icons-material";
// import React from "react";
// import InvitationCard from "../../../Components/InvitationCard/InvitationCard";
// import RecentVisitorCard from "../../../Components/RecentVisitorCard/RecentVisitorCard";
// import "./Invitations.css";

// const Invitations = ({ invitations }) => {
//   const handlePrevClick = () => {
//     let box = document.querySelector(".profile__invitations_wrapper");
//     box.scrollLeft = box.scrollLeft - 500;
//   };
//   const handleNextClick = () => {
//     let box = document.querySelector(".profile__invitations_wrapper");
//     box.scrollLeft = box.scrollLeft + 500;
//   };

//   return (
//     <div className="profile__invitations">
//       <div className="profile__invitations_heading">
//         <h3>
//           Invitations <span>( {invitations.length} )</span>
//         </h3>
//         <div className="profile__invitations_icon_wrapper">
//           <NavigateBefore
//             className="profile__invitations_icon"
//             onClick={handlePrevClick}
//           />
//           <NavigateNext
//             className="profile__invitations_icon"
//             onClick={handleNextClick}
//           />
//         </div>
//       </div>
//       <div className="profile__invitations_wrapper">
//         {invitations.map((inv) => {
//           <RecentVisitorCard inv={inv} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default Invitations;



import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import InvitationCard from "../../../Components/InvitationCard/InvitationCard";
import RecentVisitorCard from "../../../Components/RecentVisitorCard/RecentVisitorCard";
import "./Invitations.css";
import { BASE_URL } from "../../../BASE_URL";
const Invitations = ({ invitations }) => {
  const handlePrevClick = () => {
    let box = document.querySelector(".profile__invitations_wrapper");
    box.scrollLeft = box.scrollLeft - 500;
  };
  const handleNextClick = () => {
    let box = document.querySelector(".profile__invitations_wrapper");
    box.scrollLeft = box.scrollLeft + 500;
  };
  const [invitationsData, setInvitationsData] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    fetchInvitations();
  }, []);

  const fetchInvitations = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/profile/recent_visitor`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const InvitationsData = response.data.data.receive_request;
      // console.log(InvitationsData);
      setInvitationsData(InvitationsData);
      const Data = response.data.data.receive_request.length;
      setData(Data);
      // console.log(Data);
    } catch (error) {
      console.log("Failed !!", error);
    }
  };
  return (
    <div className="profile__invitations">
      <div className="profile__invitations_heading">
        <h3>
          Invitations <span>( {data} )</span>
        </h3>
        <div className="profile__invitations_icon_wrapper">
          <NavigateBefore
            className="profile__invitations_icon"
            onClick={handlePrevClick}
          />
          <NavigateNext
            className="profile__invitations_icon"
            onClick={handleNextClick}
          />
        </div>
      </div>
      <div className="profile__invitations_wrapper">
        {invitationsData.map((inv, index) => (
          <InvitationCard key={index} inv={inv} />
        ))}
      </div>
    </div>
  );
};

export default Invitations;
