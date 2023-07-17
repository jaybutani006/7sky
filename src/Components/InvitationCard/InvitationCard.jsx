// import React from "react";
// import PlaceIcon from "@mui/icons-material/Place";
// import img1 from "../../Assets/profile/img1.png";
// import "./InvitationCard.css";
// import CheckIcon from "@mui/icons-material/Check";
// import CloseIcon from "@mui/icons-material/Close";

// const InvitationCard = () => {
//   return (
    // <div className="invitationcard">
    //   <div className="invitationcard_intro">
    //     <img src={img1} alt="" />
    //     <p>Kapil Patel</p>
    //   </div>
    //   <div className="invitationcard_bottom">
    //     <p className="proceed_further">want to procced further</p>
    //     <button className="invitationcard_upgrade_button">Upgrade</button>
    //   </div>
    //   <div className="invitationcard__buttons">
    //     <button className="invitationcard_button invitationcard_reject">
    //       <CloseIcon />
    //     </button>
    //     <button className="invitationcard_button invitationcard_accept">
    //       <CheckIcon style={{ color: "#22B00B" }} />
    //     </button>
    //   </div>
    // </div>
//   );
// };

// export default InvitationCard;



import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import img1 from "../../Assets/profile/img1.png";
import "./InvitationCard.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../BASE_URL";

import crown from "./crown.png"
const InvitationCard = ({ inv }) => {
  const navigate = useNavigate();
  const data = inv?.profile[0];
  if (!data) {
    return null;
  }
  // console.log(data.user_name);
  // console.log(inv);

  const acceptRequest =async () => {
    // console.log("acceptRequest");
      console.log(data._id);
      try {
        const response = await fetch(`${BASE_URL}/api/request?_id=${inv._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            // receiver_id: data._id,
            request_status: "confirm",
            request_type: "request",
          }),
        });

        // console.log(response);
        if (response.status == 200) {
          // setIsRequestSent(true);

          alert("Request accept Successfully");
        }
      } catch (err) {
        alert(err);
      }
  };

  const declineRequest = async () => {
    console.log("Decline Request");
    try {
        const response = await fetch(`${BASE_URL}/api/request?_id=${inv._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            // receiver_id: data._id,
            request_status: "decline",
            request_type: "request",
          }),
        });
        // console.log(response);
        if (response.status == 200) {
          // setIsRequestSent(true);
          alert("Request accept Successfully");
        }
      } catch (err) {
        alert(err);
      }
  };

  const redirectUser = () => {
    const user_id = data._id;
    console.log(user_id);
    navigate(`/userprofile/${user_id}`);
    // console.log(data);
  };

  return (
    // onClick={redirectUser}
    // <div className="invitationcard">
    //   <div className="invitationcard_intro">
    //     <img src={inv.user_photo} alt="" />
    //     <p>{data.user_name}</p>
    //   </div>
    //   <div className="invitationcard_bottom">
    //     <p className="proceed_further">want to procced further</p>
    //     <button className="invitationcard_upgrade_button" onClick={() => navigate("/selectplan")}>Upgrade</button>
    //   </div>
    //   <div className="invitationcard__buttons">
    //     <button
    //       className="invitationcard_button invitationcard_reject"
    //       onClick={declineRequest}
    //     >
    //       <CloseIcon />
    //     </button>
    //     <button
    //       className="invitationcard_button invitationcard_accept"
    //       onClick={acceptRequest}
    //     >
    //       <CheckIcon style={{ color: "#22B00B" }} />
    //     </button>
    //   </div>
    // </div>
    <div className="invitationcard" style={{position: "relative"}}>
      <div
        className="invitationcard_intro"
        style={{ cursor: "pointer" }}
        onClick={() =>
          navigate(`/userprofile/${data._id}`, {
            state: { status: "invite", id: inv._id },
          })
        }
      >
        <img
          src={data.profile_photo}
          alt=""
          style={{ height: "70px", width: "70px", borderRadius: "50%" }}
        />
        <div className="d-flex">
        <p className="mx-2">{data.user_name}</p>
        {data.member_type === "paid" && (
          <img src={crown} style={{ width: "15px", height: "15px", position: "absolute", top: "10px", right: "10px"}} alt="" />
        )}
        </div>
      </div>
      <div className="invitationcard_bottom">
        <p className="proceed_further">want to procced further</p>
        <button
          className="invitationcard_upgrade_button"
          onClick={() => navigate("/selectplans")}
        >
          Upgrade
        </button>
      </div>
      <div className="invitationcard__buttons">
        <button
          className="invitationcard_button invitationcard_reject"
          onClick={declineRequest}
        >
          <CloseIcon />
        </button>
        <button
          className="invitationcard_button invitationcard_accept"
          onClick={acceptRequest}
        >
          <CheckIcon style={{ color: "#22B00B" }} />
        </button>
      </div>
    </div>
  );
};

export default InvitationCard;
