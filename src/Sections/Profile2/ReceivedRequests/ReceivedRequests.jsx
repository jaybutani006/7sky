import React, { useEffect, useState } from "react";
import ReceivedRequestCard from "../../../Components/Profile2/ReceivedRequestCard/ReceivedRequestCard";
import "./ReceivedRequests.css";
import { BASE_URL } from "../../../BASE_URL";

const ReceivedRequests = ({ horizontal, setValue }) => {
  var ReceivedRequestsClasses =
    horizontal === true
      ? "profile2_received_request received_request_horizontal"
      : "profile2_received_request received_request_vertical";

  const [error, setError] = useState(null);
  const [receivedData, setReceivedData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/request/pending`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const responseData = await response.json();
      const receivedRequests = responseData.data[0]?.received || [];
      setReceivedData(receivedRequests);
      // console.log(responseData);
      // console.log(receivedRequests);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="profile_received_requests_wrapper">
      <div className="profile_received_requests_wrapper_top">
        <h3 className="profile_requests_title">
          Received Request <span>( {receivedData.length} )</span>
        </h3>
        <p
          onClick={() => {
            setValue("2");
          }}
        >
          View All
        </p>
      </div>
      <div className={ReceivedRequestsClasses} id="card">
        {receivedData.map((request) => (
          <ReceivedRequestCard key={request._id} data={request} />
        ))}
      </div>
    </div>
  );
};

export default ReceivedRequests;
