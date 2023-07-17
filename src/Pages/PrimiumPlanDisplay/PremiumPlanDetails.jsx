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
import "./PremiumPlanDetails.css";
import PlanCard from "../../Components/PlanCard/PlanCard";
import { useNavigate, useParams } from "react-router-dom";
import PlanDetailsCard from "../../Components/PlanDetailsCard/PlanDetailsCard";
import axios from "axios";
import { BASE_URL } from "../../BASE_URL";

const PremiumPlanDetails = () => {
  const [membershipdata, setMembershipData] = useState();
  const [userData, setUserData] = useState();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/profile/premimumdetails`,
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
      if (responseData?.status === "OK") {
        setMembershipData(responseData?.data?.[0]);
        setUserData(responseData?.data?.[0]?.count_contact_details);
        console.log(responseData);
      }
      // console.log(responseData);
      // setMembershipData(responseData?.data?.[0]);
    } catch (error) {
      alert(error);
    }
  };
  console.log(userData);
  useEffect(() => {
    console.log("123");

    fetchData();
  }, []);

  const [seenContactDetails, setSeenContactDetails] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  console.log(selectedUserId);
  const handleContactButtonClick = (userId) => {
    setSelectedUserId(userId);
    setSeenContactDetails(null);
  };
  const handleClickYes = async () => {
    try {
        const response = await axios.post(
          `${BASE_URL}/api/count_of_contact_details`,
          { profile_id: selectedUserId },
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data.code === 200) {
          setSeenContactDetails(response.data.data);
        }
        // });
    } catch (err) {
      alert(err);
    }
    // setOpenPopUp(false);
  };
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
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-3">
            <div className="text-center mb-3">
              <h5>Package Details</h5>
            </div>
            <div className="package_border_detail pt-3 px-3">
              <div className="d-flex">
                <p>Active Package : </p>
                <p>3 Month</p>
              </div>
              <div className="d-flex">
                <p>Activation Date : </p>
                <p>2023-07-14</p>
              </div>
              <div className="d-flex">
                <p>Remaining Days : </p>
                <p>89</p>
              </div>
              <div className="d-flex">
                <p>Seen contact : </p>
                <p>3</p>
              </div>
              <div className="d-flex">
                <p>Membership Plan Status : </p>
                <p>Active</p>
              </div>
            </div>
          </div>
          {seenContactDetails ? (
            <div
              className={`modal fade ${isModalOpen ? "show" : ""}`}
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              // aria-hidden={!isModalOpen}
              // onClick={handleModalOverlayClick}
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    Phone number : {seenContactDetails?.[0]?.contact_no}
                  </div>
                  <div className="modal-body">
                    Email : {seenContactDetails?.[0]?.email}
                  </div>
                  {/* <div
                    className="modal-footer justify-content-center"
                    style={{ borderTop: "none" }}
                  >
                    <button
                      type="button"
                      className=""
                      data-dismiss="modal"
                      style={{
                        border: "none",
                        width: "90px",
                        padding: "7px 10px",
                        borderRadius: "10px",
                        color: "white",
                        background:
                          "linear-gradient(180deg, #cf166f 0%, rgba(253, 7, 7, 0.5) 100%)",
                      }}
                      onClick={handleModalClose}
                    >
                      No
                    </button>
                    <button
                      type="button"
                      className=" md-4"
                      // data-dismiss="modal"
                      onClick={handleClickYes}
                      style={{
                        border: "none",
                        width: "90px",
                        padding: "7px 10px",
                        borderRadius: "10px",
                        color: "white",
                        background:
                          "linear-gradient(180deg, #cf166f 0%, rgba(253, 7, 7, 0.5) 100%)",
                      }}
                    >
                      Yes
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`modal fade ${isModalOpen ? "show" : ""}`}
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              // aria-hidden={!isModalOpen}
              // onClick={handleModalOverlayClick}
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    Are you sure you want to see the contact of this user?
                  </div>
                  <div
                    className="modal-footer justify-content-center"
                    style={{ borderTop: "none" }}
                  >
                    <button
                      type="button"
                      className=""
                      data-dismiss="modal"
                      style={{
                        border: "none",
                        width: "90px",
                        padding: "7px 10px",
                        borderRadius: "10px",
                        color: "white",
                        background:
                          "linear-gradient(180deg, #cf166f 0%, rgba(253, 7, 7, 0.5) 100%)",
                      }}
                      onClick={handleModalClose}
                    >
                      No
                    </button>
                    <button
                      type="button"
                      className=" md-4"
                      // data-dismiss="modal"
                      onClick={handleClickYes}
                      style={{
                        border: "none",
                        width: "90px",
                        padding: "7px 10px",
                        borderRadius: "10px",
                        color: "white",
                        background:
                          "linear-gradient(180deg, #cf166f 0%, rgba(253, 7, 7, 0.5) 100%)",
                      }}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="col-9">
            <div className="row gy-3">
              <div className="col-12 ">
                <h5>seen contact details</h5>
              </div>
              {/* map here  */}
              {userData?.map((user, index) => (
                <div className="col-6 d-flex justify-content-center">
                  <div
                    className="package_border_detail py-3"
                    style={{ width: "85%" }}
                  >
                    <div className="d-flex justify-content-center">
                      <div>
                        <img
                          className="me-2"
                          src={user?.contect_user_profiles?.[0]?.profile_photo}
                          alt="photo"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <div>
                        <div className="d-flex ">
                          <span className="mb-1">Name</span>
                          <span className="mx-1"> :</span>
                          <span className="mb-0 ms-1">
                            {user?.contect_user_profiles?.[0]?.user_name}
                          </span>
                        </div>
                        <p>Date : 2023-07-12</p>
                      </div>
                    </div>
                    <div>
                      <div className="package_contact_button d-flex justify-content-center">
                        <button
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => handleContactButtonClick(user?.contect_user_profiles?.[0]?._id)}
                        >
                          Contact
                        </button>
                        <button
                          onClick={() =>
                            navigate(
                              `/userprofile/${user?.contect_user_profiles?.[0]?._id}`
                            )
                          }
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumPlanDetails;
