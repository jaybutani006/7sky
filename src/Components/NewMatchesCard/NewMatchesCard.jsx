// import React from "react";
// import "./NewMatchesCard.css";
// import PlaceIcon from "@mui/icons-material/Place";
// import img1 from "../../Assets/profile/img1.png";

// const NewMatchesCard = () => {
//   return (
    // <div className="newmatchescard">
    //   <div className="newmatchescard_location">
    //     <PlaceIcon />
    //     <h4>Ahmedabad</h4>
    //   </div>
    //   <img src={img1} alt="" />
    //   <div className="newmatchescard_intro">
    //     <p>
    //       Jaymin k, <span className="newmatchescard_height">5’5”</span>
    //     </p>
    //     <p>
    //       30 year, <span className="newmatchescard_language">Gujarati</span>
    //     </p>
    //     <p>Assistant professor</p>
    //   </div>
    //   <button className="newmatchescard_connect_button">Connect now</button>
    // </div>
//   );
// };

// export default NewMatchesCard;



import React, { useEffect } from "react";
import "./NewMatchesCard.css";
import PlaceIcon from "@mui/icons-material/Place";
import img1 from "../../Assets/profile/img1.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../BASE_URL";

const NewMatchesCard = ({ data }) => {
  const navigate = useNavigate();
  // console.log(data);
  // console.log(data.user_name);
  // console.log(data.age);
  // console.log(data._id);
  const [isRequestSent, setIsRequestSent] = useState(false);
  // sent request ids
  const [ids, setIds] = useState([]);
  // user card ids that are displayed in the new_matches section in the profile
  const [userids, setUserIds] = useState([]);

  const [error, setError] = useState();
  const [matchesData, setMatchesData] = useState([]);
  const [matchedArray, setMatchedArray] = useState([]);

  useEffect(() => {
    FetchCardData();
    FetchDataSentRequest();
  }, []);

  const FetchCardData = async () => {
    try {
      const cardData = await axios.get(
        `${BASE_URL}/api/profile/recent_visitor`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      // console.log(cardData);
      const userData = cardData.data.data.new_matches;
      // console.log(recentVisitorsData);
      // console.log(Data);
      setMatchesData(userData);
      // console.log(matchesData);

      const user_ids = matchesData.map((item) => item._id);
      setUserIds([...user_ids]);
      // console.log(userids);
      // console.log(ids);

      Similiarity();
    } catch (error) {
      console.log("Failed !!", error);
    }
  };

  const Similiarity = () => {
    // const arr1 = ids;
    // const arr2 = userids;

    // console.log(arr1);
    // console.log(arr2);
    // const matchedIDS = [];

    // for (let i = 0; i < arr1.length; i++) {
    //   for (let j = 0; j < arr2.length; j++) {
    //     if (arr1[i] === arr2[j]) {
    //       matchedIDS.push(arr1[i]);
    //     }
    //   }
    // }

    // console.log(matchedIDS);

    // console.log(ids);
    // console.log(userids);
    const matched = ids.map((item, index) => {
      return item === userids[index] ? "Match" : "Mismatch";
      setMatchedArray(matched);
    });

    // console.log(matchedArray);
  };

  const FetchDataSentRequest = async () => {
    try {
      const requests = await fetch(`${BASE_URL}/api/request/pending`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"), // Include the token in the Authorization header
        },
      });

      if (!requests.ok) {
        throw new Error("Request failed");
      }

      const responseData = await requests.json();
      console.log(responseData);
      // console.log(responseData.data[0].sent[0]._id);
      const extractedIds = responseData.data[0].sent.map((item) => item._id);
      setIds([...extractedIds]);
      // console.log(extractedIds);

      // user id
      // const user_sent_request_id = ;

      // checks if the user_id exits in the sent request ids
      const result = ids.find(data._id);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  };

  const SendRequest = async () => {
    console.log(data._id);
    const response = await fetch(`${BASE_URL}/api/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        receiver_id: data._id,
        request_status: "pending",
        request_type: "request",
      }),
    });
    
    // console.log(response);
    if (response.status == 200) {
      setIsRequestSent(true);

      alert("Request Send Successfully");
      // Update the button's innerHTML to "Sent" if the ID is already in the sent requests
      const connectBtn = document.getElementById("connect_btn");
      if (ids.includes(data._id)) {
        connectBtn.innerHTML = "Sent";
      }
    } else {
      // const connectbtn = document.getElementById("connect_btn").value;
      // console.log(connectbtn);
      // connectbtn.innerHTML = "Sent";
    }
  };

  const redirectUser = () => {
    const user_id = data._id;
    console.log(user_id);
    navigate(`/userprofile/${user_id}`);
    // console.log(data);
  };

  return (
    // <div className="newmatchescard" onClick={redirectUser}>
    //   <div className="newmatchescard_location">
    //     <PlaceIcon />
    //     <h4>{data.home_town}</h4>
    //   </div>
    //   <img src={data.profile_photo} alt="" className="newmatches_profile" />
    //   <div className="newmatchescard_intro">
    //     <p>
    //       {data.user_name}{" "}
    //       <span className="newmatchescard_height">{data.height}</span>
    //     </p>
    //     <p>
    //       {data.age} year,{" "}
    //       <span className="newmatchescard_language">{data.mother_tongue}</span>
    //     </p>
    //     <p>{data.job_title}</p>
    //   </div>
    //   <button
    //     className="newmatchescard_connect_button"
    //     id="connect_btn"
    //     onClick={SendRequest}
    //     disabled={isRequestSent}
    //   >
    //     Connect
    //   </button>
    //   <button
    //     className="newmatchescard_connect_button"
    //     id="connect_btn"
    //     disabled={isRequestSent}
    //     onClick={redirectUser}
    //   >
    //     View Profile
    //   </button>
    // </div>
    <div className="newmatchescard">
      <div className="newmatchescard_location">
        <PlaceIcon />
        <h4>{data.home_town}</h4>
      </div>
      <img
        src={data.profile_photo}
        style={{ cursor: "pointer" }}
        alt=""
        onClick={() =>
          navigate(`/userprofile/${data._id}`, { state: { status: "pending" } })
        }
      />
      <div
        className="newmatchescard_intro"
        style={{ cursor: "pointer" }}
        onClick={() =>
          navigate(`/userprofile/${data._id}`, { state: { status: "pending" } })
        }
      >
        <p>
          {data.user_name}{" "}
          <span className="newmatchescard_height">{data.height}</span>
        </p>
        <p>
          {data.age} years,{" "}
          <span className="newmatchescard_language">{data.mother_tongue}</span>
        </p>
        <p>{data.job_title}</p>
      </div>

      <button className="newmatchescard_connect_button" onClick={SendRequest}>
        Connect now
      </button>
    </div>
  );
};

export default NewMatchesCard;
