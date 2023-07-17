// import React from "react";
// import "./PremiumMatches.css";

// import RecentVisitorCard from "../../../Components/RecentVisitorCard/RecentVisitorCard";
// import { NavigateBefore, NavigateNext } from "@mui/icons-material";
// import PremiumMatchesCard from "../../../Components/PremiumMatchesCard/PremiumMatchesCard";

// const PremiumMatches = ({ premiumMatches }) => {
//   const handlePrevClick = () => {
//     let box = document.querySelector(".profile__premium_matches_wrapper");
//     box.scrollLeft = box.scrollLeft - 500;
//   };
//   const handleNextClick = () => {
//     let box = document.querySelector(".profile__premium_matches_wrapper");
//     box.scrollLeft = box.scrollLeft + 500;
//   };
//   return (
//     <div className="profile__premium_matches">
//       <div className="profile__premium_matches_heading">
//         <h3>
//           Premium Matches <span>( {premiumMatches.length} )</span>
//         </h3>
//         <div className="profile__premium_matches_icon_wrapper">
//           <NavigateBefore
//             className="profile__premium_matches_icon"
//             onClick={handlePrevClick}
//           />
//           <NavigateNext
//             className="profile__premium_matches_icon"
//             onClick={handleNextClick}
//           />
//         </div>
//       </div>
//       <div className="profile__premium_matches_wrapper">
//         {premiumMatches.map((prem) => {
//           <RecentVisitorCard prem={prem} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default PremiumMatches;



import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PremiumMatches.css";

import RecentVisitorCard from "../../../Components/RecentVisitorCard/RecentVisitorCard";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import PremiumMatchesCard from "../../../Components/PremiumMatchesCard/PremiumMatchesCard";
import { BASE_URL } from "../../../BASE_URL";

const PremiumMatches = ({ premiumMatches }) => {
  const handlePrevClick = () => {
    let box = document.querySelector(".profile__premium_matches_wrapper");
    box.scrollLeft = box.scrollLeft - 500;
  };
  const handleNextClick = () => {
    let box = document.querySelector(".profile__premium_matches_wrapper");
    box.scrollLeft = box.scrollLeft + 500;
  };

  const [premiumMatchesData, setPremiumMatchesData] = useState([]);
  const [dataLength, setDataLength] = useState("");

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
      const Data = response.data.data.premium_matches;
      const DataLength = response.data.data.premium_matches.length;
      // console.log(Data);
      setPremiumMatchesData(Data);
      // console.log(DataLength);
      setDataLength(DataLength);
    } catch (error) {
      console.log("Failed !!", error);
    }
  };

  return (
    <div className="profile__premium_matches">
      <div className="profile__premium_matches_heading">
        <h3>
          Premium Matches <span>( {dataLength} )</span>
        </h3>
        <div className="profile__premium_matches_icon_wrapper">
          <NavigateBefore
            className="profile__premium_matches_icon"
            onClick={handlePrevClick}
          />
          <NavigateNext
            className="profile__premium_matches_icon"
            onClick={handleNextClick}
          />
        </div>
      </div>
      <div className="profile__premium_matches_wrapper">
        {premiumMatchesData.map((prem, index) => (
          <PremiumMatchesCard key={index} prem={prem} />
        ))}
      </div>
    </div>
  );
};

export default PremiumMatches;
