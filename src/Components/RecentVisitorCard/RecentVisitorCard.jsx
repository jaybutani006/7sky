// import PlaceIcon from "@mui/icons-material/Place";
// import React from "react";
// import img1 from "../../Assets/profile/img1.png";
// import "./RecentVisitorCard.css";

// const RecentVisitorCard = () => {
//   return (
//     <div className="recentvisitorcard">
//       <div className="recentvisitorcard_location">
//         <PlaceIcon />
//         <h4>Ahmedabad</h4>
//       </div>
//       <img src={img1} alt="" />
//       <div className="recentvisitorcard_intro">
//         <p>
//           Jaymin k, <span className="newmatchescard_height">5’5”</span>
//         </p>
//         <p>
//           30 year, <span className="newmatchescard_language">Gujarati</span>
//         </p>
//         <p>Assistant professor</p>
//       </div>
//       <button className="recentvisitorcard_connect_button">Connect</button>
//     </div>
//   );
// };

// export default RecentVisitorCard;


import PlaceIcon from "@mui/icons-material/Place";
import React from "react";
import img1 from "../../Assets/profile/img1.png";
import BoltIcon from "@mui/icons-material/Bolt";
import { useNavigate } from "react-router-dom";
import king from "./king.png"
import crown from "./crown.png"
import "./RecentVisitorCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecentVisitorCard = ({ rev }) => {
  const navigate = useNavigate(); // Move the useNavigate hook to the top level

  const data = rev?.profile?.[0];
  // console.log(data);
  // console.log(data?._id);
  if (!data) {
    return null;
  }

  const redirectUser = () => {
    const user_id = data._id;
    console.log(user_id);
    navigate(`/userprofile/${user_id}`);
    // console.log(data);
  };

  return (
    <div className="recentvisitorcard" style={{position: "relative"}}>
      <div className="recentvisitorcard_location">
        <PlaceIcon />
        <h4 style={{ marginRight: "5px" }}>{data.home_town}</h4>
        {/* <BoltIcon style={{ color: "#FCF204" }} /> */}
        {data.member_type === "paid" && (
          <img
            src={crown}
            style={{
              width: "15px",
              height: "15px",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
            alt=""
          />
        )}
      </div>
      <img
        src={data.profile_photo}
        alt=""
        className="user_image"
        style={{ cursor: "pointer" }}
        onClick={() =>
          navigate(`/userprofile/${data._id}`, { state: { status: "pending" } })
        }
      />
      <div
        className="recentvisitorcard_intro"
        style={{ cursor: "pointer" }}
        onClick={() =>
          navigate(`/userprofile/${data._id}`, { state: { status: "pending" } })
        }
      >
        <p>
          {data.user_name},{" "}
          <span className="newmatchescard_height">{data.height}</span>
        </p>
        <p>
          {data.age} year,{" "}
          <span className="newmatchescard_language">{data.mother_tongue}</span>
        </p>
        <p>{data.job_title}</p>
      </div>
      <button className="recentvisitorcard_connect_button">Connect</button>
      {/* <button
        className="recentvisitorcard_connect_button"
        onClick={redirectUser}
      >
        view Profile
      </button> */}
    </div>
  );
};

export default RecentVisitorCard;
