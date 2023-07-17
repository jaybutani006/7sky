// import { Search } from "@mui/icons-material";
// import React from "react";
// import PlanCard from "../../Components/PlanCard/PlanCard";
// import "./SelectPlan.css";

// const SelectPlan = () => {
//   return (
//     <div className="selectplan">
//       <div className="selectplan__upper">
//         <p>Pricinig Table</p>
//         <h2>
//           Select Your <span>Plan</span>
//         </h2>
//         <p>Choose the plan that’s right for you.</p>
//       </div>
//       <div className="selectplan__middle">
//         <div className="selectplan_messages_search_input_wrapper">
//           <Search />
//           <input
//             placeholder="Search"
//             type="text"
//             className="selectplan_messages_search_input"
//           />
//         </div>

//         <div className="selectplan__middle_radios">
//           <div className="selectplan__middle_radio_wrapper">
//             <input type="radio" name="plan" id="" />
//             <p>Gold</p>
//           </div>
//           <div className="selectplan__middle_radio_wrapper">
//             <input type="radio" name="plan" id="" />
//             <p>Silver</p>
//           </div>
//         </div>
//       </div>

//       <div className="selectplan__lower">
//         <PlanCard />
//         <PlanCard />
//         <PlanCard />
//       </div>
//     </div>
//   );
// };
// export default SelectPlan;

import { Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import PlanCard from "../../Components/PlanCard/PlanCard";
import "./SelectPlan.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../BASE_URL";
const SelectPlan = () => {
  const [receivedData, setReceivedData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/membership_plan`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (!response.ok) {
          throw new error("Request Failed");
        }

        const responseData = await response.json();
        console.log(responseData);
        setReceivedData(responseData.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  const navigate = useNavigate();
  const renderFeatures = (data) => {
    return data.membership_feature_id.map((feature) => {
      const matchingFeature = data.membership_feature_name.find(
        (item) => item._id === feature.membership_id
      );
      if (matchingFeature) {
        return (
          <div className="d-flex px-2">
            <p style={{ fontSize: "12px" }}>
              {feature.membership_feature_status ? "✅" : "❌"}{" "}
            </p>
            <p className="ps-1" style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.9)" }}>
              {matchingFeature.feature_name}
            </p>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className="selectplan">
      <div className="selectplan__upper">
        <p>Pricinig Table</p>
        <h2>
          Select Your <span>Plan</span>
        </h2>
        <p>Choose the plan that’s right for you.</p>
      </div>
      <div className="selectplan__middle">
        <div className="selectplan_messages_search_input_wrapper">
          <Search />
          <input
            placeholder="Search"
            type="text"
            className="selectplan_messages_search_input"
          />
        </div>

        {/* <div className="selectplan__middle_radios">
          <div className="selectplan__middle_radio_wrapper">
            <input type="radio" name="plan" id="" />
            <p>Gold</p>
          </div>
          <div className="selectplan__middle_radio_wrapper">
            <input type="radio" name="plan" id="" />
            <p>Silver</p>
          </div>
        </div> */}
      </div>

      {/* <div className="selectplan__lower">
        {receivedData &&
          receivedData.map((request) => (
            <PlanCard key={request._id} data={request} />
          ))}
      </div> */}

      {/* <h4>{data && data.plan_name}</h4>
      <p> {data && data.plan_selling_price} per month</p>
      <p> {data && data.plan_days} plan days</p>
      <p> {data && data.contact_limit} contact limits</p> */}
      <div className="selectplan__lower">
        {receivedData &&
          receivedData.map((request) => (
            <div className="for_height">
              <div className="plan_backg">
                <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                  <div className="plan_card_content d-flex flex-column justify-content-between py-2">
                    <div className="">
                      <div className="plan_header_card text-center">
                        <h5>{request.plan_name}</h5>
                        <p className="mb-1">₹ {request.plan_selling_price}</p>
                        <p className="mb-1">{request.plan_days} days plan</p>
                        <p>{request.contact_limit} contact limits</p>
                      </div>
                      <div className="plan_body_card">
                        <div className="text-center">
                          <h4>features</h4>
                        </div>
                      </div>
                      <div className="plan_footer_card">
                        <div className="">
                          {/* <h4>features</h4> */}
                          {renderFeatures(request)}
                        </div>
                      </div>
                    </div>

                    <div className="plan_btn_footer text-center py-2">
                      <button onClick={() => navigate(`/plandetails/displayplan/${request._id}`)}>
                        continue
                      </button>
                    </div>
                  </div>
                  {/* <div className="plan_btn_footer">
                    <button>continue</button>
                  </div> */}
                </div>
              </div>
            </div>
            // <PlanCard key={request._id} data={request} />
          ))}
      </div>
    </div>
  );
};
export default SelectPlan;
