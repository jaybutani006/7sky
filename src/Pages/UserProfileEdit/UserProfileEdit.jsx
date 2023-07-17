import React, { useEffect, useState } from "react";
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
  import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
  import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
  import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
  import img1 from "../../Assets/userprofile/img1.png";
  import img2 from "../../Assets/userprofile/img2.png";
  import mother from "../../Assets/userprofile/mother.jpg";
  import father from "../../Assets/userprofile/father.png";
  import match from "../../Assets/userprofile/match.png";
  import connect from "../../Assets/userprofile/connection.png";
  import "./UserProfile.css";
  import EditIcon from "@mui/icons-material/Edit";
  import Carousel from "react-bootstrap/Carousel";
  import Modal from "react-bootstrap/Modal";
  
  import vagan from "../../Assets/userprofile/vagan.png";
  import drink from "../../Assets/userprofile/drink.png";
  import smoke from "../../Assets/userprofile/smoke.png";
import { BASE_URL } from "../../BASE_URL";
const UserProfileEdit = () => {
    const [details, setDetails] = useState("");
    const [family, setFamily] = useState("");
    const [preference, setPreference] = useState("");
    const [religion, setReligion] = useState([]);
    const [language, setLanguage] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
  
    const token = localStorage.getItem("token");
    const userDetails = async () => {
      const res = await fetch(
        `${BASE_URL}/api/profile/userdetails`,
        {
          method: "GET",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setDetails(data.data.UserDetails[0]);
      setFamily(data.data.UserDetails[0].family[0]);
      setPreference(data.data.UserDetails[0].preference[0]);
      console.log(data.data.UserDetails[0].preference[0]);
      setReligion(data.data.UserDetails[0].preference[0].religion);
      setLanguage(data.data.UserDetails[0].preference[0].language);
    };
  
    useEffect(() => {
      userDetails();
    }, []);
  return (
    <>
          <div className="userprofile">
      <div className="userprofile__left">
        <div className="userprofile_profile">
          <div className="userprofile_profile_top">
            {details.user_photo ? (
              details.user_photo
            ) : (
              <img
                src="/female.jpeg"
                alt=""
                style={{ borderRadius: "100%" }}
                onClick={() => setModalShow(true)}
              />
            )}
          </div>

          {/*Photo Modal */}
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

          <div className="userprofile_profile_bottom">
            <div className="userprofile_profile_bottom_detail_wrapper">
              <PhoneOutlined />
              {details.contact_no}
              <EditIcon />
            </div>
            <div className="userprofile_profile_bottom_detail_wrapper">
              <MailOutline />
              {details.email}
              <EditIcon />
            </div>
            <div className="userprofile_profile_bottom_detail_wrapper">
              <LockOutlined />
              {details.member_type} Member
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
                {preference.min_age} to {preference.max_age}
              </p>
            </div>
            <div className="userprofile_matches_content">
              <p>Height</p>
              <img src={match} alt="" />
              <p>
                {preference.min_height} to {preference.max_height}
              </p>
            </div>
            <div className="userprofile_matches_content">
              <p>Marital Status</p>
              <img src={match} alt="" />
              <p>{preference.marital_status}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>Religion / Community</p>
              <img src={match} alt="" />
              <p>
                {religion.map((e) => {
                  return (
                    <>
                      <span>{e}</span>
                    </>
                  );
                })}
              </p>
            </div>
            <div className="userprofile_matches_content">
              <p>Mother Tongue</p>
              <img src={match} alt="" />
              <p>
                {language.map((e) => {
                  return (
                    <>
                      <span>{e} </span>
                    </>
                  );
                })}
              </p>
            </div>
            <div className="userprofile_matches_content">
              <p>Country Living in</p>
              <img src={match} alt="" />
              <p>{preference.country}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>State Living in</p>
              <img src={match} alt="" />
              <p>{preference.location}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>Annual I ncome</p>
              <img src={match} alt="" />
              <p>{preference.annual_income}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>Diet</p>
              <img src={match} alt="" />
              <p>{preference.food_preferences}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>Smoke</p>
              <img src={match} alt="" />
              <p>{preference.smoke}</p>
            </div>
            <div className="userprofile_matches_content">
              <p>Drink</p>
              <img src={match} alt="" />
              <p>{preference.drink}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="userprofile__right">
        <div className="userprofile_intro">
          <div className="userprofile_intro_name">
            <h2>{details.user_name}</h2>
            {/* <p className="userprofile_intro_height">25 yrs, 5'55</p> */}
            <p className="userprofile_intro_height">
              {details.age} yrs, {details.height}, {details.weight}kg
            </p>
            <br />
            <p style={{ marginTop: "-40px" }}>{details.community}</p>
          </div>

          <div className="userprofile_intro_bio">
            <h3>Bio</h3>
            <p>{details.bio}</p>
          </div>
        </div>
        <div className="userprofile_basic_details">
          <div className="userprofile_section_header">
            <h3>Basic Details</h3>
          </div>
          <div className="userprofile_basic_details_content_wrapper">
            <div className="userprofile_basic_details_content">
              <FemaleOutlined />
              {details.gender}
            </div>
            <div className="userprofile_basic_details_content">
              <Language />
              {details.mother_tongue}
            </div>
            <div className="userprofile_basic_details_content">
              <CalendarMonth />
              {details.dob}
            </div>
            <div className="userprofile_basic_details_content">
              <PersonOutline />
              {details.religion}
            </div>
            <div className="userprofile_basic_details_content">
              <LocationCityOutlined />
              {/* Lives in Jamnagar, Gujarat-India */}
              Lives in {details.home_town}, {details.state}, {details.country}
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
              {details.marital_status}
            </div>
            <div
              className="userprofile_basic_details_content"
              style={{ fontWeight: "600" }}
            >
              Planning to settle-down in {details.settle_down}
            </div>
          </div>
        </div>
        <div className="userprofile_food_preference">
          <div className="userprofile_section_header">
            <h3>Food Preference</h3>
          </div>
          <div className="userprofile_food_preference_content_wrapper">
            <div className="userprofile_food_preference_content">
              <img src={vagan} alt="" />
              <p>{details.food_preference}</p>
            </div>
            <div className="userprofile_food_preference_content">
              <img src={drink} alt="" />
              <p>{details.drink}</p>
            </div>
            <div className="userprofile_food_preference_content">
              <img src={smoke} alt="" />
              <p>{details.smoke}</p>
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
              <p>IT Diploma - Diploma in Information Technology college</p>
            </div>
            <div className="userprofile_education_content">
              <MilitaryTechIcon />
              <p>Computers / IT</p>
            </div>
            <div className="userprofile_education_content">
              <CalendarTodayIcon />
              <p>Business Owner - Entrepreneurship solution pvt ltd</p>
            </div>
            <div className="userprofile_education_content">
              <BarChart />
              <p>Earns INR {details.salary} annually</p>
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
                <p>{family.mother_occupation}</p>
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
                <p>{family.father_occupation}</p>
              </div>
            </div>
            <div className="userprofile_family_details_content">
              <img src={mother} alt="" />
              <div>
                <span>Sister</span>
                <p>{family.no_of_sister}</p>
              </div>
            </div>
            <div className="userprofile_family_details_content">
              <img src={mother} alt="" />
              <div>
                <span>No Of Married Sister</span>
                <p>{family.no_of_married_sister}</p>
              </div>
            </div>
            <div className="userprofile_family_details_content">
              <img src={father} alt="" />
              <div>
                <span>Brother</span>
                <p>{family.no_of_brother}</p>
              </div>
            </div>
            <div className="userprofile_family_details_content">
              <img src={father} alt="" />
              <div>
                <span>No Of Married Brother</span>
                <p>{family.no_of_married_brother}</p>
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
    </>
  );
};

export default UserProfileEdit;
