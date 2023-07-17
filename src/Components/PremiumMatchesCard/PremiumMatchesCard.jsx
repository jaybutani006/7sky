// import React from "react";
// import "./PremiumMatchesCard.css";
// import PlaceIcon from "@mui/icons-material/Place";
// import img1 from "../../Assets/profile/img1.png";
// import BoltIcon from "@mui/icons-material/Bolt";

// const PremiumMatchesCard = () => {
//   return (
    // <div className="premiummatchescard">
    //   <div className="premiummatchescard_location">
    //     <PlaceIcon />
    //     <h4>Ahmedabad</h4>
    //     <BoltIcon style={{ color: "#FCF204" }} />
    //   </div>
    //   <img src={img1} alt="" />
    //   <div className="premiummatchescard_intro">
    //     <p>
    //       Jaymin k, <span className="premiummatchescard_height">5’5”</span>
    //     </p>
    //     <p>
    //       30 year, <span className="premiummatchescard_language">Gujarati</span>
    //     </p>
    //     <p>Assistant professor</p>
    //   </div>
    //   <button className="premiummatchescard_connect_button">Connect now</button>
    // </div>
//   );
// };

// export default PremiumMatchesCard;


import React from "react";
import "./PremiumMatchesCard.css";
import PlaceIcon from "@mui/icons-material/Place";
import img1 from "../../Assets/profile/img1.png";
import BoltIcon from "@mui/icons-material/Bolt";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../BASE_URL";

const PremiumMatchesCard = ({ prem }) => {
  console.log(prem);

  const SendRequest = async () => {
    console.log(prem._id);
    const response = await fetch(`${BASE_URL}/api/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        receiver_id: prem._id,
        request_status: "pending",
        request_type: "request",
      }),
    });

    // console.log(response);
    if (response.status == 200) {
      // setIsRequestSent(true);

      alert("Request Send Successfully");
      // Update the button's innerHTML to "Sent" if the ID is already in the sent requests
      // const connectBtn = document.getElementById("connect_btn");
      // if (ids.includes(prem._id)) {
      //   connectBtn.innerHTML = "Sent";
      // }
    } else {
      // const connectbtn = document.getElementById("connect_btn").value;
      // console.log(connectbtn);
      // connectbtn.innerHTML = "Sent";
    }
  };

  const navigate = useNavigate();
  const redirectUser = () => {
    const user_id = prem._id;
    console.log(user_id);
    navigate(`/userprofile/${user_id}`);
    // console.log(data);
  };

  return (
    // <div className="premiummatchescard">
    //   <div className="premiummatchescard_location">
    //     <PlaceIcon />
    //     <h4>{prem.home_town}</h4>
    //     <BoltIcon style={{ color: "#FCF204" }} />
    //   </div>
    //   <img src={prem.profile_photo} alt="" className="premiummatches_profile" />
    //   <div className="premiummatchescard_intro">
    //     <p>
    //       {prem.user_name},{" "}
    //       <span className="premiummatchescard_height">{prem.height}</span>
    //     </p>
    //     <p>
    //       {prem.age} year,{" "}
    //       <span className="premiummatchescard_language">
    //         {prem.mother_tongue}
    //       </span>
    //     </p>
    //     <p>{prem.job_title}</p>
    //   </div>
    //   <button
    //     className="premiummatchescard_connect_button"
    //     onClick={SendRequest}
    //   >
    //     Connect
    //   </button>
    //   <button
    //     className="premiummatchescard_connect_button"
    //     onClick={redirectUser}
    //   >
    //     View Profile
    //   </button>
    // </div>
    <div className="premiummatchescard">
      <div className="premiummatchescard_location">
        <PlaceIcon />
        <h4>{prem.home_town}</h4>
        <BoltIcon style={{ color: "#FCF204" }} />
      </div>
      <img
        src={prem.profile_photo}
        style={{ cursor: "pointer" }}
        alt=""
        onClick={() =>
          navigate(`/userprofile/${prem._id}`, { state: { status: "pending" } })
        }
      />
      <div
        className="premiummatchescard_intro"
        style={{ cursor: "pointer" }}
        onClick={() =>
          navigate(`/userprofile/${prem._id}`, { state: { status: "pending" } })
        }
      >
        <p>
          {prem.user_name}{" "}
          <span className="premiummatchescard_height">{prem.height}</span>
        </p>
        <p>
          {prem.age} year,{" "}
          <span className="premiummatchescard_language">
            {prem.mother_tongue}
          </span>
        </p>
        <p>{prem.job_title}</p>
      </div>
      <button
        className="premiummatchescard_connect_button"
        onClick={SendRequest}
      >
        Connect now
      </button>
    </div>
  );
};

export default PremiumMatchesCard;
