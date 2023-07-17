import {
  ArrowUpward,
  BarChart,
  CalendarMonth,
  CastForEducationOutlined,
  FemaleOutlined,
  GirlOutlined,
  Group,
  GroupOutlined,
  Language,
  LocationCityOutlined,
  Lock,
  LockOutlined,
  Mail,
  MailOutline,
  Person,
  Person2Outlined,
  Person3Outlined,
  PersonOutline,
  Phone,
  PhoneOutlined,
  SchoolOutlined,
} from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PeopleIcon from "@mui/icons-material/People";
import HeightIcon from "@mui/icons-material/Height";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import img1 from "../../Assets/userprofile/img1.png";
import img2 from "../../Assets/userprofile/img2.png";
import mother from "../../Assets/userprofile/mother.jpg";
import father from "../../Assets/userprofile/father.png";
import match from "../../Assets/userprofile/match.png";
import connect from "../../Assets/userprofile/connection.png";
import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import EditIcon from "@mui/icons-material/Edit";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import ChatIcon from "@mui/icons-material/Chat";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import vagan from "../../Assets/userprofile/vagan.png";
import drink from "../../Assets/userprofile/drink.png";
import smoke from "../../Assets/userprofile/smoke.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
// import PhoneIcon from "@mui/icons-material/Phone";
import crown from "./crown.png";
import SchoolIcon from "@mui/icons-material/School";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../BASE_URL";

import { OverlayTrigger, Popover } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel variant="dark">
          {Array.isArray(props?.userPhotos) &&
            props?.userPhotos?.map((ele) => (
              <Carousel.Item key={ele}>
                <img className="d-block w-100" src={ele} alt="First slide" />
              </Carousel.Item>
            ))}
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=eee"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=e5e5e5"
              alt="Third slide"
            />
          </Carousel.Item> */}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
}

const UserProfileById = () => {
  const location = useLocation();
  const stateData = location.state;
  // console.log(stateData.status);
  const [details, setDetails] = useState("");
  const { id } = useParams();
  const [family, setFamily] = useState("");
  const [preference, setPreference] = useState("");
  const [religion, setReligion] = useState([]);
  const [language, setLanguage] = useState([]);
  const [contactDetail, setcontactDetail] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userDetails = async () => {
    const res = await fetch(
      `${BASE_URL}/api/profile/userdetails?user_id=${id}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data?.data?.UserDetails);
    setDetails(data?.data?.UserDetails);
    setcontactDetail(data?.data?.contect_info);
    setFamily(data?.data?.UserDetails?.family[0]);
    setPreference(data?.data?.UserDetails?.preference[0]);
    console.log(data?.data?.UserDetails?.preference?.[0]?.religion);
    setReligion(data?.data?.UserDetails?.preference?.[0]?.religion);
    setLanguage(data?.data?.UserDetails?.preference?.[0]?.language);
  };

  const member_type = localStorage.getItem("memberType");
  const handlePendingConnect = async () => {
    // console.log(data._id);
    try {
      const response = await fetch(`${BASE_URL}/api/request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          receiver_id: id,
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
        // if (ids.includes(data._id)) {
        //   connectBtn.innerHTML = "Sent";
        // }
      }
    } catch (err) {
      alert(err);
    }
  };
  const handleUnblock = async (id) => {
    try {
      await axios
        .delete(`${BASE_URL}/api/blockuser?_id=${id}`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.code === 200) {
            alert("unblock Successfully");
          }
        })
        .catch((err) => alert(err));
    } catch (err) {
      alert(err);
    }
  };
  const handleSentCancel = async (_id) => {
    // console.log("Decline Request");
    try {
      const response = await fetch(
        `${BASE_URL}/api/request?_id=${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            // receiver_id: data._id,
            request_status: "cancel",
            request_type: "request",
          }),
        }
      );
      // console.log(response);
      if (response.status == 200) {
        // setIsRequestSent(true);
        alert("Request decline Successfully");
      }
    } catch (err) {
      alert(err);
    }
  };
  const handleDeclineCancel = async (_id) => {
    console.log("Decline Request");
    try {
      const response = await fetch(
        `${BASE_URL}/api/request?request_id=${_id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      // console.log(response);
      if (response.status == 200) {
        // setIsRequestSent(true);
        alert("Request Deleted Successfully");
      }
    } catch (err) {
      alert(err);
    }
  };
  const handleDeclineDecline = async (_id) => {
    console.log("Decline Request");
    try {
      const response = await fetch(
        `${BASE_URL}/api/request?_id=${_id}`,
        {
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
        }
      );
      // console.log(response);
      if (response.status == 200) {
        // setIsRequestSent(true);
        alert("Request decline Successfully");
      }
    } catch (err) {
      alert(err);
    }
  };
  console.log(details);
  const handleInviteAccept = async (_id) => {
    console.log("Decline Request");
    try {
      const response = await fetch(
        `${BASE_URL}/api/request?_id=${_id}`,
        {
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
        }
      );
      // console.log(response);
      if (response.status == 200) {
        // setIsRequestSent(true);
        alert("Request decline Successfully");
      }
    } catch (err) {
      alert(err);
    }
  };
  const handleInviteDecline = async (_id) => {
    console.log("Decline Request");
    try {
      const response = await fetch(
        `${BASE_URL}/api/request?_id=${_id}`,
        {
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
        }
      );
      // console.log(response);
      if (response.status == 200) {
        // setIsRequestSent(true);
        alert("Request decline Successfully");
      }
    } catch (err) {
      alert(err);
    }
  };
  const handleAcceptDecline = async (_id) => {
    console.log("Decline Request");
    try {
      const response = await fetch(
        `${BASE_URL}/api/request?_id=${_id}`,
        {
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
        }
      );
      // console.log(response);
      if (response.status == 200) {
        // setIsRequestSent(true);
        alert("Request decline Successfully");
      }
    } catch (err) {
      alert(err);
    }
  };

  const handleBlock = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/blockuser`,
        { block_id: id },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.code === 200) {
        alert("block successfully");
      }
    } catch (err) {
      alert(err);
    }
  };
  console.log(religion);
  useEffect(() => {
    userDetails();
  }, []);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOverlayClick = (e) => {
    if (e.target.id === "exampleModal") {
      setIsModalOpen(false);
    }
  };
  const hnadleClickContact = () => {
    setOpenPopUp(true);
  };
  const [seenContactDetails, setSeenContactDetails] = useState();
  const [showContactDetails, setShowContactDetails] = useState(false);
  console.log(showContactDetails);
  const handleClickYes =async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/count_of_contact_details`,
        { profile_id: id },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.code === 200) {
        // alert("block successfully");
        // setIsModalOpen(false);
        setSeenContactDetails(response.data.data);
        // setShowContactDetails(true);
      }
    } catch (err) {
      alert(err);
    }
    // setOpenPopUp(false);
  };
  console.log(seenContactDetails);

  return (
    <div className="userprofile">
      <div className="userprofile__left">
        <div className="userprofile_profile">
          <div
            className="userprofile_profile_top"
            style={{ position: "relative" }}
          >
            {details?.profile_photo ? (
              <img
                src={details?.profile_photo}
                alt=""
                style={{ borderRadius: "100%" }}
                onClick={() => setModalShow(true)}
              />
            ) : (
              details?.user_photo
            )}
            {details?.member_type === "paid" && (
              <img
                src={crown}
                style={{
                  width: "15px",
                  height: "15px",
                  position: "absolute",
                  top: "85px",
                  left: "185px",
                }}
                alt=""
              />
            )}
          </div>
          {/*Photo Modal */}
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            userPhotos={details?.user_photo}
          />

          <div className="userprofile_profile_bottom">
            <div className="userprofile_profile_bottom_detail_wrapper">
              <PhoneOutlined />
              {details?.contact_no}
              <EditIcon />
            </div>
            <div className="userprofile_profile_bottom_detail_wrapper">
              <MailOutline />
              {details?.email}
              <EditIcon />
            </div>
            <div className="userprofile_profile_bottom_detail_wrapper">
              <LockOutlined />
              {details?.member_type} Member
              <EditIcon />
            </div>
          </div>
        </div>
        <div className="userprofile_matches">
          <div className="userprofile_matches_profile_images">
            <img src={img1} alt="" className="userprofile_matches_me" />
            <img
              src={connect}
              alt=""
              className="userprofile_matches_connection"
            />
            <img src={img2} alt="" className="userprofile_matches_user" />
          </div>
          <div className="userprofile_matches_description">
            <span>You match 8/8 of his</span>
            <p>Desired Preferences</p>
          </div>
          <div className="userprofile_matches_content_wrapper">
            <div className="userprofile_matches_content">
              <p>Age:</p>
              <img src={match} alt="" />
              {/* <p>18 to 25</p> */}
              <p>
                {preference?.min_age || preference?.max_age ? (
                  <>
                    {preference?.min_age} to {preference?.max_age}
                  </>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div className="userprofile_matches_content">
              <p>Height</p>
              <img src={match} alt="" />
              <p>
                {preference?.min_height} to {preference?.max_height}
              </p>
            </div>
            <div
              className="userprofile_matches_content"
              style={{ position: "relative" }}
            >
              <p>Marital Status</p>
              <img src={match} alt="" />
              {/* <p>{preference?.marital_status}</p> */}
              <p>
                <button
                  type="button"
                  className=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title={preference?.marital_status?.join("\n")}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    textAlign: "left",
                  }}
                >
                  {preference?.marital_status?.slice(0, 2).map((e, index) => (
                    <span key={index} className="d-block">
                      {e}
                    </span>
                  ))}
                </button>
              </p>
              {/* <p className="my_class">
                {preference?.marital_status?.map((e) => {
                  return (
                    <>
                      <span className="d-block">{e}</span>
                    </>
                  );
                })}
              </p> */}
            </div>
            <div className="userprofile_matches_content">
              <p>Religion / Community</p>
              <img src={match} alt="" />
              <p>
                <button
                  type="button"
                  className=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title={religion?.join("\n")}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    textAlign: "left",
                  }}
                >
                  {religion?.slice(0, 2)?.map((e) => {
                    return (
                      <>
                        <span className="d-block">{e}</span>
                      </>
                    );
                  })}
                </button>
              </p>
            </div>
            <div className="userprofile_matches_content">
              <p>Mother Tongue</p>
              <img src={match} alt="" />
              <p>
                <button
                  type="button"
                  className=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title={language?.join("\n")}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    textAlign: "left",
                  }}
                >
                  {language?.slice(0, 2)?.map((e) => {
                    return (
                      <>
                        <span className="d-block">{e} </span>
                      </>
                    );
                  })}
                </button>
              </p>
            </div>
            <div className="userprofile_matches_content">
              <p>Country Living in</p>
              <img src={match} alt="" />
              <p>{preference?.country}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>State Living in</p>
              <img src={match} alt="" />
              <p>{preference?.location}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>Annual I ncome</p>
              <img src={match} alt="" />
              <p>{preference?.annual_income}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>Diet</p>
              <img src={match} alt="" />
              {/* <p>{preference?.food_preferences}</p> */}
              <p>
                <button
                  type="button"
                  className=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title={preference?.food_preferences?.join("\n")}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    textAlign: "left",
                  }}
                >
                  {preference?.food_preferences?.slice(0, 2)?.map((e) => {
                    return (
                      <>
                        <span className="d-block">{e}</span>
                      </>
                    );
                  })}
                </button>
              </p>
            </div>
            <div className="userprofile_matches_content">
              <p>Smoke</p>
              <img src={match} alt="" />
              {/* <p>{preference?.smoke}</p> */}
              <p>
                <button
                  type="button"
                  className=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title={preference?.smoke?.join("\n")}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    textAlign: "left",
                  }}
                >
                  {preference?.smoke?.slice(0, 2)?.map((e) => {
                    return (
                      <>
                        <span className="d-block">{e}</span>
                      </>
                    );
                  })}
                </button>
              </p>
            </div>
            <div className="userprofile_matches_content">
              <p>Drink</p>
              <img src={match} alt="" />
              {/* <p>{preference?.drink}</p> */}
              <p>
                <button
                  type="button"
                  className=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title={preference?.drink?.join("\n")}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    textAlign: "left",
                  }}
                >
                  {preference?.drink?.slice(0, 2)?.map((e) => {
                    return (
                      <>
                        <span className="d-block">{e}</span>
                      </>
                    );
                  })}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="userprofile__right">
        <div className="userprofile_intro">
          <div className="userprofile_intro_name">
            <h2>{details?.user_name}</h2>
            {/* <p className="userprofile_intro_height">25 yrs, 5'55</p> */}
            <p className="userprofile_intro_height">
              <HeightIcon style={{ marginRight: "5px" }} />
              {details?.age} yrs, {details?.height}, {details?.weight}kg
            </p>
            <br />
            <p style={{ marginTop: "-40px" }}>
              <PeopleIcon style={{ marginRight: "5px" }} />
              {details?.community}
            </p>
            {stateData?.status === "invite" && (
              <>
                <div className="block_buton">
                  <button
                    onClick={() => handleInviteAccept(stateData.id)}
                    className="me-2"
                  >
                    <DoneAllIcon
                      sx={{
                        height: "20px",
                        cursor: "pointer",
                        marginRight: "3px",
                      }}
                    />
                    Accept
                  </button>
                  <button
                    onClick={() => handleInviteDecline(stateData.id)}
                    className="me-2"
                  >
                    <RemoveDoneIcon
                      sx={{
                        height: "20px",
                        cursor: "pointer",
                        marginRight: "3px",
                      }}
                    />
                    Decline
                  </button>
                  <button onClick={handleBlock} className="me-2">
                    Block
                  </button>
                </div>
              </>
            )}
            {stateData?.status === "accept" && (
              <>
                <div className="block_buton">
                  <button
                    className="me-2"
                    onClick={() => navigate("/messages")}
                  >
                    <ChatIcon
                      sx={{
                        height: "20px",
                        cursor: "pointer",
                        marginRight: "3px",
                      }}
                    />
                    Chat
                  </button>
                  <button className="me-2">
                    <PhoneIcon
                      sx={{
                        height: "20px",
                        cursor: "pointer",
                        marginRight: "3px",
                      }}
                    />
                    Contact
                  </button>
                  <button
                    onClick={() => handleAcceptDecline(stateData.id)}
                    className="me-2"
                  >
                    <CancelOutlinedIcon
                      sx={{
                        height: "20px",
                        cursor: "pointer",
                        marginRight: "3px",
                      }}
                    />
                    Decline
                  </button>
                  {/* <button onClick={handleBlock}>Chat</button>
                  <button onClick={handleBlock}>Contact</button>
                  <button onClick={handleBlock}>Cancle</button> */}
                  <button onClick={handleBlock}>Block</button>
                </div>
              </>
            )}
            {stateData?.status === "pending" && (
              <>
                <div className="block_buton">
                  <button onClick={handlePendingConnect} className="me-2">
                    <FavoriteIcon
                      sx={{
                        height: "20px",
                        cursor: "pointer",
                        marginRight: "3px",
                      }}
                    />
                    Connect
                  </button>
                  {/* <button onClick={handleBlock}>Connect </button> */}
                  <button onClick={handleBlock}>Block</button>
                </div>
              </>
            )}
            {stateData?.status === "sent" && (
              <>
                <div className="block_buton">
                  <button
                    onClick={() => {
                      navigate("/messages");
                    }}
                    className="me-2"
                  >
                    <ChatIcon
                      sx={{
                        height: "20px",
                        cursor: "pointer",
                        marginRight: "3px",
                      }}
                    />
                    Chat
                  </button>

                  <button className="me-2">
                    <PhoneIcon
                      sx={{
                        height: "20px",
                        cursor: "pointer",
                        marginRight: "3px",
                      }}
                    />
                    Contact
                  </button>
                  <button
                    onClick={() => handleSentCancel(stateData.id)}
                    className="me-2"
                  >
                    <CancelOutlinedIcon
                      sx={{
                        height: "20px",
                        cursor: "pointer",
                        marginRight: "3px",
                      }}
                    />
                    Cancle
                  </button>
                  {/* <button onClick={handleBlock}>Chat</button>
                  <button onClick={handleBlock}>Contact</button>
                  <button onClick={handleBlock}>Cancle</button> */}
                  <button onClick={handleBlock}>Block</button>
                </div>
              </>
            )}
            {stateData?.status === "decline" && (
              <>
                <div className="block_buton">
                  <button
                    onClick={() => handleDeclineDecline(stateData.id)}
                    className="me-2"
                  >
                    <HeartBrokenIcon
                      sx={{
                        height: "20px",
                        cursor: "pointer",
                        marginRight: "3px",
                      }}
                    />
                    Reconnect
                  </button>
                  <button onClick={handleBlock}>Block</button>
                </div>
              </>
            )}
            {stateData?.status === "block" && (
              <>
                <div className="block_buton">
                  <button
                    onClick={() => handleUnblock(stateData.id)}
                    className="me-2"
                  >
                    Unblock
                  </button>
                </div>
              </>
            )}
            {stateData?.status === "cancel" && (
              <>
                <div className="block_buton">
                  <button
                    onClick={() => handleDeclineCancel(stateData.id)}
                    className="me-2"
                  >
                    <CancelOutlinedIcon
                      sx={{
                        height: "20px",
                        cursor: "pointer",
                        marginRight: "3px",
                      }}
                    />
                    Cancel
                  </button>
                  <button onClick={handleBlock}>Cancel</button>
                </div>
              </>
            )}
            {/* <div className="block_buton">
              <button onClick={handleBlock}>Block</button>
            </div>
            <div className="block_buton">
              <button onClick={handleBlock}>Block</button>
            </div> */}
            {/* <div className="block_buton">
              <button onClick={handleBlock}>Block</button>
            </div> */}
          </div>
          <div className="userprofile_intro_bio">
            <h3>Bio</h3>
            <p style={{ overflowWrap: "anywhere" }}>{details?.bio}</p>
          </div>
        </div>
        <div className="userprofile_basic_details">
          <div className="userprofile_section_header">
            <h3>Basic Details</h3>
          </div>
          <div className="userprofile_basic_details_content_wrapper">
            <div className="userprofile_basic_details_content">
              <FemaleOutlined />
              {details?.gender}
            </div>
            <div className="userprofile_basic_details_content">
              <Language />
              {details?.mother_tongue}
            </div>
            <div className="userprofile_basic_details_content">
              <CalendarMonth />
              {details?.dob}
            </div>
            <div className="userprofile_basic_details_content">
              <PersonOutline />
              {details?.religion}
            </div>
            <div className="userprofile_basic_details_content">
              <LocationCityOutlined />
              {/* Lives in Jamnagar, Gujarat-India */}
              Lives in {details?.home_town}, {details?.state},{" "}
              {details?.country}
            </div>
            <div className="userprofile_basic_details_content">
              <img
                src="weddingRing.png"
                style={{
                  height: "20px",
                  fontWeight: "600",
                  paddingRight: "5px",
                }}
              />
              {details?.marital_status}
            </div>
            <div
              className="userprofile_basic_details_content"
              style={{ fontWeight: "600" }}
            >
              Planning to settle-down in {details?.settle_down}
            </div>
          </div>
        </div>
        <div className="userprofile_basic_details">
          <div className="userprofile_section_header">
            <h3>Contact</h3>
          </div>
          <div className="userprofile_basic_details_content_wrapper">
            <div className="userprofile_family_details_content">
              {/* <img src={mother} alt="" /> */}
              <PhoneIcon />
              <div>
                <span>Phone</span>
                <p>{contactDetail?.contact_no}</p>
                {/* <p>{`${details?.contact_no?.substring(
                  0,
                  5
                )}******${details?.contact_no?.substring(
                  details?.contact_no?.length - 2
                )}`}</p> */}
              </div>
            </div>
            <div className="userprofile_family_details_content">
              <EmailIcon />
              <div>
                <span>Email</span>
                <p>{contactDetail?.Email_id}</p>
                {/* <p>
                  {details?.email?.substr(0, 2)}********
                  {details?.email?.substring(details?.email?.indexOf("@"))}
                </p> */}
              </div>
            </div>
          </div>
          <div className="">
            <div className="d-flex align-items-center flex-column">
              <p>To unlock Contact No. & Email ID</p>
              {/* <p>{details?.email}</p> */}
              {member_type === "paid" ? (
                <button
                  className="text-white"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  style={{
                    border: "none",
                    padding: "10px 10px",
                    borderRadius: "40px",
                    background:
                      "linear-gradient(180deg, #cf166f 0%, rgba(253, 7, 7, 0.5) 100%)",
                  }}
                  onClick={hnadleClickContact}
                >
                  View Contact
                </button>
              ) : (
                <button
                  className="text-white"
                  style={{
                    border: "none",
                    padding: "10px 10px",
                    borderRadius: "40px",
                    background:
                      "linear-gradient(180deg, #cf166f 0%, rgba(253, 7, 7, 0.5) 100%)",
                  }}
                  onClick={() => navigate("/selectplan")}
                >
                  Upgrade Plan
                </button>
              )}
            </div>
          </div>
        </div>
        {showContactDetails && (
          <div
            className="modal fade bd-example-modal-sm"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="mySmallModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                {seenContactDetails.contact_no}
              </div>
              <div className="modal-content">{seenContactDetails.email}</div>
            </div>
          </div>
        )}
        {/* <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button> */}
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
        <div className="userprofile_food_preference">
          <div className="userprofile_section_header">
            <h3>Food Preference</h3>
          </div>
          <div className="userprofile_food_preference_content_wrapper">
            <div className="userprofile_food_preference_content">
              <img src={vagan} alt="" />
              <p>{details?.food_preference}</p>
            </div>
            <div className="userprofile_food_preference_content">
              <img src={drink} alt="" />
              <p>{details?.drink}</p>
            </div>
            <div className="userprofile_food_preference_content">
              <img src={smoke} alt="" />
              <p>{details?.smoke}</p>
            </div>
          </div>
        </div>
        <div className="userprofile_education">
          <div className="userprofile_section_header">
            <h3>Education & Career</h3>
          </div>
          <div className="userprofile_education_content_wrapper">
            <div className="userprofile_education_content">
              <WorkOutlineIcon />
              {/* <p>IT Diploma - Diploma in Information Technology college</p> */}
              <p>
                {details?.highest_qualification} - {details?.college}
              </p>
            </div>
            <div className="userprofile_education_content">
              <MilitaryTechIcon />
              <p>{details?.company_name}</p>
            </div>
            <div className="userprofile_education_content">
              <CalendarTodayIcon />
              <p>{details?.job_title}</p>
            </div>
            <div className="userprofile_education_content">
              <BarChart />
              <p>Earns INR {details?.salary} annually</p>
            </div>
          </div>
        </div>
        <div className="userprofile_family_details">
          <div className="userprofile_section_header">
            <h3>Family Details</h3>
          </div>
          <div className="userprofile_family_details_content_wrapper">
            {/* <div className="userprofile_family_details_content">
              <img src={mother} alt="" />
              <div>
                <span>Mother’s name</span>
                <p>Josey Doe</p>
              </div>
            </div> */}
            <div className="userprofile_family_details_content">
              <img src={mother} alt="" />
              <div>
                <span>Mother’s Occupation</span>
                <p>{family?.mother_occupation}</p>
              </div>
            </div>
            {/* <div className="userprofile_family_details_content">
              <img src={father} alt="" />
              <div>
                <span>Father’s name</span>
                <p>Maneik Doe</p>
              </div>
            </div> */}
            <div className="userprofile_family_details_content">
              <img src={father} alt="" />
              <div>
                <span>Father’s Occupatio</span>
                <p>{family?.father_occupation}</p>
              </div>
            </div>
            <div className="userprofile_family_details_content">
              <img src={mother} alt="" />
              <div>
                <span>Sister</span>
                <p>{family?.no_of_sister}</p>
              </div>
            </div>
            <div className="userprofile_family_details_content">
              <img src={mother} alt="" />
              <div>
                <span>No Of Married Sister</span>
                <p>{family?.no_of_married_sister}</p>
              </div>
            </div>
            <div className="userprofile_family_details_content">
              <img src={father} alt="" />
              <div>
                <span>Brother</span>
                <p>{family?.no_of_brother}</p>
              </div>
            </div>
            <div className="userprofile_family_details_content">
              <img src={father} alt="" />
              <div>
                <span>No Of Married Brother</span>
                <p>{family?.no_of_married_brother}</p>
              </div>
            </div>
            {/* <div className="userprofile_family_details_content">
              <GroupOutlined />
              <div>
                <span>Family Status</span>
                <p>Upper Middle</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileById;
