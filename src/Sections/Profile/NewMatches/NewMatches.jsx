// import { NavigateBefore, NavigateNext } from "@mui/icons-material";
// import React from "react";
// import NewMatchesCard from "../../../Components/NewMatchesCard/NewMatchesCard";
// import RecentVisitorCard from "../../../Components/RecentVisitorCard/RecentVisitorCard";
// import "./NewMatches.css";

// const NewMatches = ({ newMatches }) => {
//   const handlePrevClick = () => {
//     let box = document.querySelector(".profile__newmatches_wrapper");
//     box.scrollLeft = box.scrollLeft - 500;
//   };
//   const handleNextClick = () => {
//     let box = document.querySelector(".profile__newmatches_wrapper");
//     box.scrollLeft = box.scrollLeft + 500;
//   };
//   return (
//     <div className="profile__newmatches">
//       <div className="profile__newmatches_heading">
//         <h3>
//           New matches for you <span>( {newMatches.length} )</span>
//         </h3>
//         <div className="profile__newmatches_icon_wrapper">
//           <NavigateBefore
//             className="profile__newmatches_icon"
//             onClick={handlePrevClick}
//           />
//           <NavigateNext
//             className="profile__newmatches_icon"
//             onClick={handleNextClick}
//           />
//         </div>
//       </div>
//       <div className="profile__newmatches_wrapper">
//         {newMatches.map((newm) => {
//           <NewMatchesCard newm={newm} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default NewMatches;




import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import React from "react";
import NewMatchesCard from "../../../Components/NewMatchesCard/NewMatchesCard";
import RecentVisitorCard from "../../../Components/RecentVisitorCard/RecentVisitorCard";
import "./NewMatches.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../BASE_URL";

const NewMatches = ({ newMatches }) => {
  const handlePrevClick = () => {
    let box = document.querySelector(".profile__newmatches_wrapper");
    box.scrollLeft = box.scrollLeft - 500;
  };
  const handleNextClick = () => {
    let box = document.querySelector(".profile__newmatches_wrapper");
    box.scrollLeft = box.scrollLeft + 500;
  };

  const [newMatchesData, setNewMatchesData] = useState([]);
  const [dataLength, setDataLength] = useState();

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
      // console.log(response);
      const Data = response.data.data.new_matches;
      const DataLength = response.data.data.new_matches.length;
      // console.log(recentVisitorsData);
      // console.log(Data.length);
      setNewMatchesData(Data);

      setDataLength(DataLength);
    } catch (error) {
      console.log("Failed !!", error);
    }
  };

  return (
    <div className="profile__newmatches">
      <div className="profile__newmatches_heading">
        <h3>
          New matches for you <span>( {dataLength} )</span>
        </h3>
        <div className="profile__newmatches_icon_wrapper">
          <NavigateBefore
            className="profile__newmatches_icon"
            onClick={handlePrevClick}
          />
          <NavigateNext
            className="profile__newmatches_icon"
            onClick={handleNextClick}
          />
        </div>
      </div>
      <div className="profile__newmatches_wrapper">
        {newMatchesData.map((newm, index) => (
          <NewMatchesCard key={index} data={newm} />
        ))}
      </div>
    </div>
  );
};

export default NewMatches;
