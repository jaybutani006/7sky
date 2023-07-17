// import React from "react";
// import "./PlanCard.css";
// import {  useNavigate } from "react-router-dom";

// const PlanCard = () => {
//   var NAVIgate = useNavigate();

//   return (
//     <div className="plancard">
//       <div className="plancard__wrapper">
//         <h3 className="plancard__heading">
//           SILVER | <span>1 MONTH</span>
//         </h3>
//         <hr />
//         <div className="plancard_pricing">
//           <h4>3,000</h4>
//           <p>3,000 per month</p>
//         </div>

//         <div className="plancard__details">
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
//             expedita iusto veritatis, accusantium cum ex dolorum laborum ullam
//             sit. Soluta, omnis culpa quod ipsum repellendus
//           </p>
//         </div>

//         <button className="plancard__continue" onClick={()=>NAVIgate("/plandetails")}>
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PlanCard;


import React, { useState } from "react";
import "./PlanCard.css";
import { useNavigate } from "react-router-dom";

const PlanCard = ({ data }) => {
  const [cardId, setCardId] = useState("");
  // console.log(data._id);
  // console.log(data && data.plan_name);
  var NAVIgate = useNavigate();

  const redirectPlanDetails = () => {
    const plan_id = data._id;
    setCardId(plan_id); // Store the _id in the cardId state
    console.log(plan_id);
    // NAVIgate(`/plandetails/displayplan/${plan_id}`);
  };

  const renderFeatures = () => {
    return data.membership_feature_id.map((feature) => {
      const matchingFeature = data.membership_feature_name.find(
        (item) => item._id === feature.membership_id
      );
      if (matchingFeature) {
        return (
          <li key={feature._id} style={{listStyleType: "none"}}>
            {feature.membership_feature_status ? "✅" : "❌"}{" "}
            {matchingFeature.feature_name}
          </li>
        );
      }
      return null;
    });
  };
  return (
    <div className="plancard" onClick={redirectPlanDetails}>
      <div className="plancard__wrapper">
        <h3 className="plancard__heading">
          {/* SILVER | <span>{data && data.plan_name}</span> */}
        </h3>
        <hr />
        <div className="plancard_pricing">
          <h4>{data && data.plan_name}</h4>
          <p> {data && data.plan_selling_price} per month</p>
          <p> {data && data.plan_days} plan days</p>
          <p> {data && data.contact_limit} contact limits</p>
        </div>

        {/* <div className="plancard__details">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            expedita iusto veritatis, accusantium cum ex dolorum laborum ullam
            sit. Soluta, omnis culpa quod ipsum repellendus
          </p>
        </div> */}
        <div className="plancard__details">
          <p style={{textAlign: "center"}}>Features</p>
          <ul>{renderFeatures()}</ul>
        </div>

        <button
          className="plancard__continue"
          onClick={() => NAVIgate("/plandetails")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
