import React, { useEffect, useState } from "react";
import MatchesRequestCard from "../../../Components/Profile2/MatchesRequestCard/MatchesRequestCard";
import "./MatchesRequests.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// import React from "react";
// import "./MatchesRequestCard.css";
import img1 from "../../../Assets/profile2/img1.jpg";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LanguageIcon from "@mui/icons-material/Language";
import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonIcon from "@mui/icons-material/Person";
import BoltIcon from "@mui/icons-material/Bolt";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HeightIcon from "@mui/icons-material/Height";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ChatIcon from "@mui/icons-material/Chat";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { useNavigate } from "react-router-dom";
import Slider from "@material-ui/core/Slider";
import axios from "axios";
import Select from "react-select";
import { BASE_URL } from "../../../BASE_URL";

import crown from "./crown.png";
const MatchesRequests = ({ horizontal, setValue }) => {
  var declinedRequestsClasses =
    horizontal === true
      ? "profile2_declined_request declined_request_horizontal"
      : "profile2_declined_request declined_request_vertical";

  const [error, setError] = useState(null);
  const [receivedData, setReceivedData] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/profile/userlist`,
          {
            method: "POST",
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
        console.log(responseData?.data);

        // const receivedRequests = responseData.data[0]?.profile || [];
        setReceivedData(responseData?.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
    getAllShortListed();
  }, []);
  const [shortData, setShortData] = useState();
  const SendRequest = async (data) => {
    console.log(data._id);
    try {
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

  const handleShortlistDelete = async (id) => {
    try {
      await axios
        .delete(`${BASE_URL}/api/shortlist?shortlist_id=${id}`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.code === 200) {
            getAllShortListed();
            alert("remove from shortlist successfully");
          }
        })
        .catch((err) => alert(err));
    } catch (err) {
      alert(err);
    }
  };
  const getAllShortListed = async () => {
    try {
      await axios
        .get(`${BASE_URL}/api/shortlist`, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          console.log(res.data.data);
          setShortData(res.data.data);
        })
        .catch((err) => alert(err));
    } catch (err) {
      alert(err);
    }
  };
  // useEffect(() => {
  //   getAllShortListed();
  // }, []);
  console.log(shortData);
  const handleShortlist = async (data) => {
    // console.log(data._id);
    try {
      console.log("shortlist send request");
      const response = await fetch(`${BASE_URL}/api/shortlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          shortlist_id: data._id,
        }),
      });

      // console.log(response);
      if (response.status == 200) {
        // setIsRequestSent(true);
        getAllShortListed();

        alert("shortlist added Successfully");

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
  const navigate = useNavigate();
  // const handleChat = async () => {
  //   navigate("/messages");
  // };

  const [maritalStatus, setMaritalStatus] = useState([]);
  const [religion, setReligion] = useState([]);
  const [motherTongues, setMotherTongues] = useState([]);
  const [highestQualification, setHighestQualification] = useState([]);
  const [salary, setSalary] = useState([]);
  const [foodPreference, setFoodPreference] = useState([]);
  const [drinkPreference, setDrinkPreference] = useState([]);
  const [smokePreference, setSmokePreference] = useState([]);
  const [jobTitlePreference, setJobTitlePreference] = useState([]);


  const loadPreference = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/preference/preferencedata`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      console.log(responseData.data);

      const preferenceData = responseData.data;

      setMaritalStatus(preferenceData.marital_status);
      setReligion(preferenceData.religion);
      setMotherTongues(preferenceData.mother_tongue);
      setHighestQualification(preferenceData.highest_qualification);
      setSalary(preferenceData.salary);
      setFoodPreference(preferenceData.food_preference);
      setDrinkPreference(preferenceData.drink);
      setSmokePreference(preferenceData.smoke);
      setJobTitlePreference(preferenceData.job_title);
      // Check if preference exists
      // setIsPreferenceExist(Object.keys(preferenceData).length > 0);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  useEffect(() => {
    loadPreference();
  }, []);

  const [ageRange, setAgeRange] = useState([18, 80]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionsMaritual, setSelectedOptionsMaritual] = useState([]);
  const [selectedOptionsHigh, setSelectedOptionsHigh] = useState([]);
  const [selectedOptionsFood, setSelectedOptionsFood] = useState([]);
  const [selectedOptionsSalary, setSelectedOptionsSalary] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);


  const optionsHigh = highestQualification.map((motherTongue) => ({
    value: motherTongue.hq_name,
    label: motherTongue.hq_name,
    // isSelected: selectedOptions.some(
    //   (option) => option.value === motherTongue.mt_name
    // ),
  }));
  const formatOptionLabelHigh = ({ label, isSelected }) => (
    <div>
      <span>{label}</span>
      {isSelected && <span className="selected-indicator">Selected</span>}
    </div>
  );
  const handleSelectChangeHigh = (selectedOptions) => {
    // setSelectedOptionsHigh(selectedOptions);
    const hasDoesntMatter = selectedOptions.some(
      (option) => option.value === "Doesn't Matter"
    );
    if (
      selectedOptions[0].value === "Doesn't Matter" &&
      selectedOptions[1].value !== "Doesn't Matter"
    ) {
      setSelectedOptionsHigh([
        selectedOptions[1],
        // { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    } else if (hasDoesntMatter) {
      setSelectedOptionsHigh([
        { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    } else {
      setSelectedOptionsHigh(selectedOptions);
    }
  };
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [authToken, setAuthToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState([]);
  const [home_town, setHome_town] = useState("Amd");
  const [country, setCountry] = useState("");

  useEffect(() => {
    // loadCountries();
    loadCountries();
  }, [countries]);
  useEffect(() => {
    // loadCountries();
    loadCountries2();
  }, [isLoading]);

  const loadCountries = async () => {
    try {
      await axios
        .get("https://www.universal-tutorial.com/api/getaccesstoken", {
          headers: {
            Accept: "application/json",
            "api-token":
              "ALDMbqqV-UNzxmDMGh6onLipeJ3QgkbmgE4tHNs8mzsDvoK-0qgwKhiEHjkksowe5-o",
            "user-email": "sarjilp2903@gmail.com",
          },
        })
        .then((res) => {
          console.log(res.data.auth_token);
          setAuthToken(res.data.auth_token);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
      console.log(authToken);
      // await axios
      //   .get("https://www.universal-tutorial.com/api/countries", {
      //     headers: {
      //       Accept: "application/json",
      //       Authorization: `Bearer ${authToken}`,
      //     },
      //   })
      //   .then((res) => {
      //     console.log(res.data);
      //     setCountries(res.data);
      //   })
      //   .catch((err) => console.log(err));
    } catch (error) {}
  };
  const loadCountries2 = async () => {
    try {
      await axios
        .get("https://www.universal-tutorial.com/api/countries", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setCountries(res.data);
        })
        .catch((err) => console.log(err));
    } catch (error) {}
  };
  const loadStates = async (country) => {
    await axios
      .get(`https://www.universal-tutorial.com/api/states/${country}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${authToken}`,
          "user-email": "sarjilp2903@gmail.com",
        },
      })
      .then((res) => {
        console.log(res.data);
        setStates(res.data);
      })
      .catch((err) => console.log(err));
  };

  const loadCities = async (state) => {
    await axios
      .get(`https://www.universal-tutorial.com/api/cities/${state}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${authToken}`,
          "user-email": "sarjilp2903@gmail.com",
        },
      })
      .then((res) => {
        console.log(res.data);
        setCities(res.data);
      })
      .catch((err) => console.log(err));
  };

  let selectedValues = selectedOptions.map((option) => option.value);
  const selectedReligion = selectedOptions2.map((option) => option.value);
  let selectedMaritual = selectedOptionsMaritual.map((option) => option.value);
  const selectedHigh = selectedOptionsHigh.map((option) => option.value);
  const selectedSalary = selectedOptionsSalary.map((option) => option.value);
  const selectedFood = selectedOptionsFood.map((option) => option.value);
  const handleAgeChange = (event, newAgeRange) => {
    setAgeRange(newAgeRange);
    console.log(ageRange);
  };
  
  const options1 = religion.map((motherTongue) => ({
    value: motherTongue.religious_name,
    label: motherTongue.religious_name,
    // isSelected: selectedOptions.some(
    //   (option) => option.value === motherTongue.mt_name
    // ),
  }));
  const formatOptionLabel1 = ({ label, isSelected }) => (
    <div>
      <span>{label}</span>
      {isSelected && <span className="selected-indicator">Selected</span>}
    </div>
  );

  const handleSelectChange2 = (selectedOptions) => {
    // setSelectedOptions2(selectedOptions);
    const hasDoesntMatter = selectedOptions.some(
      (option) => option.value === "Doesn't Matter"
    );
    if (
      selectedOptions[0].value === "Doesn't Matter" &&
      selectedOptions[1].value !== "Doesn't Matter"
    ) {
      setSelectedOptions2([
        selectedOptions[1],
        // { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    } else if (hasDoesntMatter) {
      setSelectedOptions2([
        { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    } else {
      setSelectedOptions2(selectedOptions);
    }
  };

  const options = motherTongues.map((motherTongue) => ({
    value: motherTongue.mt_name,
    label: motherTongue.mt_name,
    // isSelected: selectedOptions.some(
    //   (option) => option.value === motherTongue.mt_name
    // ),
  }));
  const formatOptionLabel = ({ label, isSelected }) => (
    <div>
      <span>{label}</span>
      {isSelected && <span className="selected-indicator">Selected</span>}
    </div>
  );

  const handleSelectChange = (selectedOptions) => {
    // const selectedValues = selectedOptions
    //   ? selectedOptions.map((option) => option.value)
    //   : [];
    // setSelectedOptions(selectedOptions);
    // setSelectedOptions(selectedOptions);
    const hasDoesntMatter = selectedOptions.some(
      (option) => option.value === "Doesn't Matter"
    );
    // if (
    //   selectedOptions[0].value === "Doesn't Matter" &&
    //   selectedOptions[1].value !== "Doesn't Matter"
    // ) {
    //   setSelectedOptions([
    //     selectedOptions[1],
    //     // { value: "Doesn't Matter", label: "Doesn't Matter" },
    //   ]);
    // } else
    if (hasDoesntMatter) {
      setSelectedOptions([
        { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    } else {
      setSelectedOptions(selectedOptions);
    }
  };

  const filterData = async () => {
    try {

      const data = {
          min_age: ageRange[0],
          max_age: ageRange[1],
          salary: selectedSalary,
          marital_status: selectedMaritual,
          religion: selectedReligion,
          mother_tongue: selectedValues,
          highest_qualification: selectedHigh,
          food_preference: selectedFood,
      }
      console.log(data);
      const response = await axios.post(
        `${BASE_URL}/api/profile/userlist`,
        data,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json", // Set the content type to multipart/form-data
          },
        }
      );

      if (response.status === 200) {
        // Data stored or updated successfully
        //console.log("Data stored or updated successfully");
        // navigate("/edit-education-Career-details");
        setReceivedData(response.data.data)
      }
    } catch (error) {
      setError(error.message);
    }
  };


  const optionsFood = foodPreference.map((motherTongue) => ({
    value: motherTongue.fp_name,
    label: motherTongue.fp_name,
    // isSelected: selectedOptions.some(
    //   (option) => option.value === motherTongue.mt_name
    // ),
  }));
  const formatOptionLabelFood = ({ label, isSelected }) => (
    <div>
      <span>{label}</span>
      {isSelected && <span className="selected-indicator">Selected</span>}
    </div>
  );
  const handleSelectChangeFood = (selectedOptions) => {
    // setSelectedOptionsFood(selectedOptions);
    const hasDoesntMatter = selectedOptions.some(
      (option) => option.value === "Doesn't Matter"
    );
    if (
      selectedOptions[0].value === "Doesn't Matter" &&
      selectedOptions[1].value !== "Doesn't Matter"
    ) {
      setSelectedOptionsFood([
        selectedOptions[1],
        // { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    } else if (hasDoesntMatter) {
      setSelectedOptionsFood([
        { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    } else {
      setSelectedOptionsFood(selectedOptions);
    }
  };

  const optionsSalary = salary.map((motherTongue) => ({
    value: motherTongue.salary_value,
    label: motherTongue.salary_value,
    // isSelected: selectedOptions.some(
    //   (option) => option.value === motherTongue.mt_name
    // ),
  }));

  const formatOptionLabelSalary = ({ label, isSelected }) => (
    <div>
      <span>{label}</span>
      {isSelected && <span className="selected-indicator">Selected</span>}
    </div>
  );

  const handleSelectChangeSalary = (selectedOptions) => {
    // setSelectedOptionsFood(selectedOptions);
    const hasDoesntMatter = selectedOptions.some(
      (option) => option.value === "Doesn't Matter"
    );
    if (
      selectedOptions[0].value === "Doesn't Matter" &&
      selectedOptions[1].value !== "Doesn't Matter"
    ) {
      setSelectedOptionsSalary([
        selectedOptions[1],
        // { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    } else if (hasDoesntMatter) {
      setSelectedOptionsSalary([
        { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    } else {
      setSelectedOptionsSalary(selectedOptions);
    }
  };



  
  const optionsMaritual = maritalStatus.map((motherTongue) => ({
    value: motherTongue.status,
    label: motherTongue.status,
    // isSelected: selectedOptions.some(
    //   (option) => option.value === motherTongue.mt_name
    // ),
  }));
  const formatOptionLabelMaritual = ({ label, isSelected }) => (
    <div>
      <span>{label}</span>
      {isSelected && <span className="selected-indicator">Selected</span>}
    </div>
  );
  const handleSelectChangeMaritual = (selectedOptions) => {
    const hasDoesntMatter = selectedOptions.some(
      (option) => option.value === "Doesn't Matter"
    );
    if (
      selectedOptions[0].value === "Doesn't Matter" &&
      selectedOptions[1].value !== "Doesn't Matter"
    ) {
      setSelectedOptionsMaritual([
        selectedOptions[1],
        // { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    } else if (hasDoesntMatter) {
      setSelectedOptionsMaritual([
        { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    } else {
      setSelectedOptionsMaritual(selectedOptions);
    }
  };



  return (
    <div className="profile_declined_requests_wrapper">
      <div className="profile_declined_requests_wrapper_top">
        <h3 className="profile_requests_title">
          Matches <span>({receivedData.length})</span>
        </h3>
        <button
          className="filter_btn_set"
          variant="primary"
          onClick={handleShow}
        >
          filter
        </button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>filter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="gender_state">
              <p className="mb-1">Age</p>
              <Slider
                value={ageRange}
                onChange={handleAgeChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={18}
                max={80}
                style={{ color: "#f97096" }}
              />
            </div>
            <div className="gender_state">
              <Select
                className="gender"
                options={optionsMaritual}
                isMulti
                value={selectedOptionsMaritual}
                onChange={handleSelectChangeMaritual}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "2px solid #f97096",
                  }),
                }}
                formatOptionLabel={formatOptionLabelMaritual}
                placeholder="Select Maritual Status"
              />
            </div>
            <div className="gender_state">
              <Select
                className="gender"
                options={options1}
                isMulti
                value={selectedOptions2}
                onChange={handleSelectChange2}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "2px solid #f97096",
                    borderColor: "#f97096",
                  }),
                }}
                formatOptionLabel={formatOptionLabel1}
                placeholder="Select Religion"
              />
            </div>
            <div className="gender_state">
              <Select
                className="gender"
                options={options}
                isMulti
                value={selectedOptions}
                onChange={handleSelectChange}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "2px solid #f97096",
                  }),
                }}
                formatOptionLabel={formatOptionLabel}
                placeholder="Select Mother Tounge"
              />
            </div>
            <div className="gender_state">
              <Select
                className="gender"
                options={optionsHigh}
                isMulti
                value={selectedOptionsHigh}
                onChange={handleSelectChangeHigh}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "2px solid #f97096",
                  }),
                }}
                formatOptionLabel={formatOptionLabelHigh}
                placeholder="Select Highest Qualification"
              />
            </div>
            <div className="gender_state">
              <Select
                className="gender"
                options={optionsFood}
                isMulti
                value={selectedOptionsFood}
                onChange={handleSelectChangeFood}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "2px solid #f97096",
                  }),
                }}
                formatOptionLabel={formatOptionLabelFood}
                placeholder="Select Food Preference"
              />
            </div>
            <div className="gender_state">
              <Select
                className="gender"
                options={optionsSalary}
                isMulti
                value={selectedOptionsSalary}
                onChange={handleSelectChangeSalary}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "2px solid #f97096",
                  }),
                }}
                formatOptionLabel={formatOptionLabelSalary}
                placeholder="Select Annual Income"
              />
            </div>
            <div className="gender_state">
              <select
                placeholder="Home town"
                // className="settle-down"
                name="country"
                id=""
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  loadStates(e.target.value);
                }}
              >
                <option value="">Select your country:</option>
                {countries.map((c) => {
                  return (
                    <option value={c.country_name}>{c.country_name}</option>
                  );
                })}
              </select>
            </div>
            <div className="gender_state">
              <select
                placeholder="Home town"
                name="country"
                value={state}
                id=""
                onChange={(e) => {
                  setState(e.target.value);
                  loadCities(e.target.value);
                }}
              >
                <option value="">Select your State:</option>
                {states.map((c) => {
                  return <option value={c.state_name}>{c.state_name}</option>;
                })}
              </select>
            </div>
            <div className="gender_state">
              <select
                placeholder="Home town"
                name="country"
                value={home_town}
                id=""
                onChange={(e) => setHome_town(e.target.value)}
              >
                <option value="">Select your Home Town:</option>
                {cities.map((c) => {
                  return <option value={c.city_name}>{c.city_name}</option>;
                })}
              </select>
            </div>
            <div className="gender_state">
              <button onClick={filterData}>
                Apply
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        {/* <p
          onClick={() => {
            setValue("4");
          }}
        >
          View All
        </p> */}
      </div>
      <div className={declinedRequestsClasses} id="card">
        {receivedData?.map((data) => (
          // <MatchesRequestCard key={request._id} data={request} />
          <div className="received_request_card">
            <div
              className="received_request_card_left"
              style={{ position: "relative" }}
            >
              {data.member_type === "paid" && (
                <img
                  src={crown}
                  style={{
                    width: "15px",
                    height: "15px",
                    position: "absolute",
                    top: "40px",
                    right: "10px",
                  }}
                  alt=""
                />
              )}
              <div className="left_intro_group">
                <img
                  src={data && data?.profile_photo}
                  alt=""
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/userprofile/${data._id}`, {
                      state: { status: "pending" },
                    });
                  }}
                />
                <div className="received_request_card_name">
                  <PersonIcon sx={{ height: "15px" }} />
                  {data && data.user_name}
                  <BoltIcon style={{ color: "#FCF204", height: "15px" }} />
                </div>
                {/* {data && data[0]?.profile && data[0].profile[0]?.user_name} */}
                <p className="online_now">
                  Online now
                  <FiberManualRecordIcon
                    sx={{ height: "8px", color: "#22B00B", margin: "0px" }}
                  />
                </p>
              </div>
            </div>
            <div className="received_request_card_right">
              <div
                className="card_right_top"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/userprofile/${data._id}`, {
                    state: { status: "pending" },
                  });
                }}
              >
                <p>
                  <TrendingUpIcon sx={{ height: "15px" }} />
                  {/* 23 yrs, 5’8” */}
                  {data && data.age} yrs, {data && data?.height}
                </p>
                <p>
                  <LanguageIcon sx={{ height: "15px" }} />
                  {/* Gujarati, Ahir */}
                  {data && data?.mother_tongue}, {data && data?.community}
                </p>
                <p>
                  <PlaceIcon sx={{ height: "15px" }} />
                  {/* Surat, Gujarat */}
                  {data && data?.home_town}, {data && data?.state}
                </p>

                <p>
                  <TempleHinduIcon sx={{ height: "15px" }} />
                  {/* B.E./B.Tech */}
                  {data && data.religion}
                </p>
                <p>
                  <WorkOutlineIcon sx={{ height: "15px" }} />
                  {/* Software Developer / Programmar */}
                  {data && data.highest_qualification}
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ textAlign: "center" }}>
                  <FavoriteBorderIcon
                    sx={{ height: "25px", cursor: "pointer" }}
                    onClick={() => SendRequest(data)}
                  />
                  {/* <i>int</i> */}
                  <p style={{ fontWeight: "400", fontSize: "10px" }}>
                    Interested
                  </p>
                </div>
                <div style={{ marginLeft: "15px", textAlign: "center" }}>
                  {shortData &&
                  shortData.length > 0 &&
                  shortData.some((item) => item.shortlist_id === data._id) ? (
                    <StarOutlinedIcon
                      sx={{ height: "25px", cursor: "pointer" }}
                      onClick={() => handleShortlistDelete(data._id)}
                    />
                  ) : (
                    <StarBorderIcon
                      sx={{ height: "25px", cursor: "pointer" }}
                      onClick={() => handleShortlist(data)}
                    />
                  )}
                  {/* <StarBorderIcon
                    sx={{ height: "25px", cursor: "pointer" }}
                    onClick={() => handleShortlist(data)}
                  /> */}
                  {/* <i>int</i> */}
                  <p style={{ fontWeight: "400", fontSize: "10px" }}>
                    shortlist
                  </p>
                </div>
                <div style={{ marginLeft: "20px", textAlign: "center" }}>
                  <ChatIcon
                    sx={{ height: "25px", cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/messages/${data._id}`);
                    }}
                  />
                  {/* <i>int</i> */}
                  <p style={{ fontWeight: "400", fontSize: "10px" }}>chat</p>
                </div>
                <div style={{ marginLeft: "20px", textAlign: "center" }}>
                  {/* <i>int</i> */}
                  <CancelOutlinedIcon
                    sx={{ height: "25px", cursor: "pointer" }}
                  />
                  <p style={{ fontWeight: "400", fontSize: "10px" }}>cancel</p>
                </div>
              </div>
              {/* <p className="received_request_card_more_details">
               { data && data?.bio.substr(100) + "..."}
                <span>Upgrade Now</span>
              </p> */}
            </div>
          </div>
          // "jay"
        ))}
      </div>
    </div>
  );
};

export default MatchesRequests;
