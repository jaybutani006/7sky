// import React from "react";
// import "./PlanDetails.css";
// import PlanCard from "../../Components/PlanCard/PlanCard";

// const PlanDetails = () => {
//   return (
//     <div className="plandetails">
//       <div className="plandetails__left">
//         <p>You are getting</p>
//         <PlanCard />
//       </div>
//       <div className="plandetails__right">
//         <p>Payment Information</p>
//         <form className="plandetails__payment_form">
//           <div className="plandetails__payment_form_left">
//             <div className="plandetails_radio_wrapper">
//               <input type="radio" name="plan" id="" />
//               <p>Credit card</p>
//             </div>
//             <div className="plandetails_radio_wrapper">
//               <input type="radio" name="plan" id="" />
//               <p>Debit card</p>
//             </div>
//             <div className="plandetails_radio_wrapper">
//               <input type="radio" name="plan" id="" />
//               <p>Net Banking</p>
//             </div>
//             <div className="plandetails_radio_wrapper">
//               <input type="radio" name="plan" id="" />
//               <p>UPI</p>
//             </div>
//           </div>
//           <div className="plandetails__payment_form_right">
//             <p className="plandetails__payment_form_right_lable">Card number</p>
//             <input
//               type="text"
//               className="plandetails__payment_form_right_input"
//             />
//             <p className="plandetails__payment_form_right_lable">Card number</p>
//             <input
//               type="text"
//               className="plandetails__payment_form_right_input"
//             />
//             <div>
//               <div className="expiry">
//                 <p className="plandetails__payment_form_right_lable">Expiry</p>
//                 <div className="expiry_inputs">
//                   <input type="month" name="" id="" />
//                 </div>
//               </div>
//               <div className="cvv">
//                 <p className="plandetails__payment_form_right_lable">CVV</p>
//                 <input
//                   type="number"
//                   name=""
//                   id=""
//                   maxLength={3}
//                   minLength={3}
//                 />
//               </div>
//             </div>
//             <button className="payment">Pay 4,000/-</button>
//             <p className="payment_safty">
//               Your payments are 100% safe and secure
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PlanDetails;



import React, { useEffect, useState } from "react";
import "./PlanDetails.css";
import PlanCard from "../../Components/PlanCard/PlanCard";
import { useNavigate, useParams } from "react-router-dom";
import PlanDetailsCard from "../../Components/PlanDetailsCard/PlanDetailsCard";
import { BASE_URL } from "../../BASE_URL";
const PlanDetails = () => {
  const [membershipdata, setMembershipData] = useState();
  const { id } = useParams();
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/membership_plan/displayplan?_id=${id}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (!response.ok) {
        alert("Request Failed");
      }

      const responseData = await response.json();
      console.log(responseData);
      setMembershipData(responseData?.data?.[0]);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    console.log("123");
    
    fetchData();
  }, []);
  // const membershipPlan = async () => {
  //   try {
  //     const response = await fetch(
  //       `${BASE_URL}/api/membership_plan/displayplan?_id=${id}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: localStorage.getItem("token"),
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     console.log(data.data);
  //     setMembershipData(data.data);
  //   } catch (error) {
  //     console.log("ERROR: ", error);
  //   }
  // };

  // useEffect(() => {
  //   membershipPlan();
  // }, [id]);
  console.log(membershipdata);
  const navigate = useNavigate();

  const renderFeatures = (data) => {
    return data?.membership_feature_id?.map((feature) => {
      const matchingFeature = data?.membership_feature_name?.find(
        (item) => item._id === feature?.membership_id
      );
      if (matchingFeature) {
        return (
          <div className="d-flex px-2">
            <p style={{ fontSize: "12px" }}>
              {feature?.membership_feature_status ? "✅" : "❌"}{" "}
            </p>
            <p
              className="ps-1"
              style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.9)" }}
            >
              {matchingFeature?.feature_name}
            </p>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className="plandetails">
      <div className="plandetails__left">
        <p>You are getting</p>
        {/* <PlanDetailsCard data={membershipdata} /> */}
        <div className="for_height">
          <div className="plan_backg">
            <div className="h-100 w-100 d-flex justify-content-center align-items-center">
              <div className="plan_card_content d-flex flex-column justify-content-between py-2">
                <div className="">
                  <div className="plan_header_card text-center">
                    <h5>{membershipdata?.plan_name}</h5>
                    <p className="mb-1">₹ {membershipdata?.plan_selling_price}</p>
                    <p className="mb-1">{membershipdata?.plan_days} days plan</p>
                    <p>{membershipdata?.contact_limit} contact limits</p>
                  </div>
                  <div className="plan_body_card">
                    <div className="text-center">
                      <h4>features</h4>
                    </div>
                  </div>
                  <div className="plan_footer_card">
                    <div className="">
                      {/* <h4>features</h4> */}
                      {renderFeatures(membershipdata)}
                    </div>
                  </div>
                </div>

                <div className="plan_btn_footer text-center py-2">
                  <button
                    onClick={() =>
                      navigate(`/plandetails/displayplan/${membershipdata._id}`)
                    }
                  >
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
      </div>
      <div className="plandetails__right">
        <p>Payment Information</p>
        <form className="plandetails__payment_form">
          <div className="plandetails__payment_form_left">
            <div className="plandetails_radio_wrapper">
              <input type="radio" name="plan" id="" />
              <p>Credit card</p>
            </div>
            <div className="plandetails_radio_wrapper">
              <input type="radio" name="plan" id="" />
              <p>Debit card</p>
            </div>
            <div className="plandetails_radio_wrapper">
              <input type="radio" name="plan" id="" />
              <p>Net Banking</p>
            </div>
            <div className="plandetails_radio_wrapper">
              <input type="radio" name="plan" id="" />
              <p>UPI</p>
            </div>
          </div>
          <div className="plandetails__payment_form_right">
            <p className="plandetails__payment_form_right_lable">Card number</p>
            <input
              type="text"
              className="plandetails__payment_form_right_input"
            />
            <p className="plandetails__payment_form_right_lable">Card number</p>
            <input
              type="text"
              className="plandetails__payment_form_right_input"
            />
            <div>
              <div className="expiry">
                <p className="plandetails__payment_form_right_lable">Expiry</p>
                <div className="expiry_inputs">
                  <input type="month" name="" id="" />
                </div>
              </div>
              <div className="cvv">
                <p className="plandetails__payment_form_right_lable">CVV</p>
                <input
                  type="number"
                  name=""
                  id=""
                  maxLength={3}
                  minLength={3}
                />
              </div>
            </div>
            <button className="payment">
              Pay {membershipdata?.plan_original_price}/-
            </button>
            <p className="payment_safty">
              Your payments are 100% safe and secure
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanDetails;
