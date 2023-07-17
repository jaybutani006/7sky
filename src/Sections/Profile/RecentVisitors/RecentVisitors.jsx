// import React from "react";
// import "./RecentVisitors.css";
// import RecentVisitorCard from "../../../Components/RecentVisitorCard/RecentVisitorCard";
// import { NavigateBefore, NavigateNext } from "@mui/icons-material";
// import { useEffect } from "react";
// import axios from "axios";

// const RecentVisitors = ({ recentVisitors }) => {
//   const handlePrevClick = () => {
//     let box = document.querySelector(".profile__recent_visitors_wrapper");
//     box.scrollLeft = box.scrollLeft - 500;
//   };
//   const handleNextClick = () => {
//     let box = document.querySelector(".profile__recent_visitors_wrapper");
//     box.scrollLeft = box.scrollLeft + 500;
//   };

//   return (
//     <div className="profile__recent_visitors">
//       <div className="profile__recent_visitors_heading">
//         <h3>
//           Recent Visitors <span>( {recentVisitors.length} )</span>
//         </h3>
//         <div className="profile__recent_visitors_icon_wrapper">
//           <NavigateBefore
//             className="profile__recent_visitors_icon"
//             onClick={handlePrevClick}
//           />
//           <NavigateNext
//             className="profile__recent_visitors_icon"
//             onClick={handleNextClick}
//           />
//         </div>
//       </div>
//       <div className="profile__recent_visitors_wrapper">
//         {recentVisitors.map((rev) => {
//           <RecentVisitorCard rev={rev} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default RecentVisitors;



import React, { useEffect, useState } from "react";
import axios from "axios";
import RecentVisitorCard from "../../../Components/RecentVisitorCard/RecentVisitorCard";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import "./RecentVisitors.css";
import { BASE_URL } from "../../../BASE_URL";

const RecentVisitors = ({ recentVisitors }) => {
  const handlePrevClick = () => {
    let box = document.querySelector(".profile__recent_visitors_wrapper");
    box.scrollLeft = box.scrollLeft - 500;
  };

  const handleNextClick = () => {
    let box = document.querySelector(".profile__recent_visitors_wrapper");
    box.scrollLeft = box.scrollLeft + 500;
  };

  const [recentVisitorsData, setRecentVisitorsData] = useState([]);
  const [data, setData] = useState("");

  useEffect(() => {
    fetchRecentVisitors();
  }, []);

  const fetchRecentVisitors = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/profile/recent_visitor`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      // console.log(response);
      const recentVisitorsData = response.data.data.recent_visitors;
      // console.log(recentVisitorsData);
      const recentVisitorsProfilePhotos =
        response.data.data.recent_visitors[0].profile[0].profile_photo;
      // console.log(recentVisitorsProfilePhotos);
      setRecentVisitorsData(recentVisitorsData);
      const Data = response.data.data.recent_visitors.length;
      setData(Data);
      // console.log(Data);
    } catch (error) {
      console.log("Failed !!", error);
    }
  };

  return (
    <div className="profile__recent_visitors">
      <div className="profile__recent_visitors_heading mt-3">
        <h3>
          Recent Visitors <span>({data})</span>
        </h3>
        <div className="profile__recent_visitors_icon_wrapper">
          <NavigateBefore
            className="profile__recent_visitors_icon"
            onClick={handlePrevClick}
          />
          <NavigateNext
            className="profile__recent_visitors_icon"
            onClick={handleNextClick}
          />
        </div>
      </div>
      <div className="profile__recent_visitors_wrapper my_class">
        {recentVisitorsData.map((rev, index) => (
          <RecentVisitorCard key={index} rev={rev} />
        ))}
      </div>
    </div>
  );
};

export default RecentVisitors;
