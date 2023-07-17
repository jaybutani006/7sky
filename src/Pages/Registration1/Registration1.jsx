// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import SignUpJourneyCard from "../../Components/SignUpJourneyCard/SignUpJourneyCard";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Registration1 = () => {
//   let NAvigate = useNavigate();
//     const routeChange = () => { 
//         let path = `/Profile`; 
//         NAvigate(path);
//       }

//   return (
//     <div className="signup">
//       <div className="signup__top">
//         <div className="signup__left">
//           <SignUpJourneyCard />
//         </div>
//         <div className="signup__right ">
//           <div className="signup__right_top">
//             <h3 className="signup__inpput_heading">Basic Detail</h3>
//             <div className="signup__basic_details">
//                 <select name="drink" id="" className="advancedsearch__element_select" >
//                   <option value="null">select gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               <input type="text" placeholder="Last Name"/>
//               <input type="text" placeholder="@Email"/>
//               <input type="text" placeholder="Enter your mobile number"/>
//               <input type="text" placeholder="Age"/>
//             </div>
//           </div>
//           <div className="signup__right_bottom ">
//             <div className="signup__right_left  ">
//               <div className="signup__education_details ">
//                 <h3 className="signup__inpput_heading">Education Detail</h3>
//                 <input type="text" placeholder="Higher Qualification"/>
//                 <input type="text" placeholder="College" />
//               </div>
//               <div className="signup__occupation_details ">
//                 <h3 className="signup__inpput_heading">Occupation Detail</h3>
//                 <input type="text" placeholder="Job title" />
//                 <input type="text" placeholder="Company name" />
//                 <input type="text" placeholder="Company description" />
//               </div>
//               <div className="signup__diet_prefference  ">
//                 <h3 className="signup__inpput_heading">Diet Preference</h3>
//                 <select name="age" id="" className="advancedsearch__element_select" >
//                   <option value="">Food Preference</option>
//                   <option value="Vegetarian">Vegetarian</option>
//                   <option value="Nonvegetarian">Nonvegetarian</option>
//                   <option value="Eggetarian">Eggetarian</option>
//                 </select>
//                 <select name="drink" id="" className="advancedsearch__element_select" >
//                   <option value="">Drink</option>
//                   <option value="Yes">Yes</option>
//                   <option value="Occasionally">Occasionally</option>
//                   <option value="Never">Never</option>
//                 </select>
//                 <select name="age" id="" className="advancedsearch__element_select" >
//                   <option value="">Smoke</option>
//                   <option value="Yes">Yes</option>
//                   <option value="Occasionally">Occasionally</option>
//                   <option value="Never">Never</option>
//                 </select>
//               </div>
//             </div>
//             <div className="signup__right_right ">
//                 <div className="signup__home_town ">
//                     <h3 className="signup__inpput_heading">Home Town</h3>

//                 <select placeholder="Home town" name="country" id="" >
//                     <option value="">Select your country:</option>
//                 </select>

//                 <select placeholder="Home town" name="country" id="" >
//                     <option value="">Select your State:</option> 
//                 </select>

//                 <select  placeholder="Home town" name="country"  id="" >
//                     <option value="">Select your Home Town:</option> 
//                 </select>

//                 <select name="religion" id="" >
//                     <option value="">Religion</option>
//                     <option value="Hindu">Hindu</option>
//                     <option value="Muslim">Muslim</option>
//                 </select>
//                 <select name="maritalStatus" id="" >
//                     <option value="">MaritalStatus</option>
//                     <option value="Married">Married</option>
//                     <option value="UnMarried">Un married</option>
//                 </select>
//                 <select name="community" id="" >
//                     <option value="">Community</option>
//                     <option value="General">General</option>
//                     <option value="OBC">OBC</option>
//                 </select>
//                 <select name="motherTongue" id="" >
//                     <option value="">motherTongue</option>
//                     <option value="Gujarati">Gujarati</option>
//                     <option value="Hindi">Hindi</option>
//                 </select>
//               </div>
//               <div>
//                 <h3 className="signup__inpput_heading">Bio</h3>
//                 <textarea className="signup__bio" name="" id="" cols="55" rows="5"></textarea>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <button onClick={routeChange}>Submit</button>
//     </div>
//   );
// };

// export default Registration1;



import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SignUpJourneyCard from "../../Components/SignUpJourneyCard/SignUpJourneyCard";
import axios from "axios";
import "./Registration1.css";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import country from "../../country.json";
import { BASE_URL } from "../../BASE_URL";

const Registration1 = () => {
  const [home_town, setHome_town] = useState("Amd");
  const [country, setCountry] = useState("");
  console.log(home_town);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [authToken, setAuthToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // loadCountries();
    loadCountries();
  }, []);
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
  const Height = [
    "4’0”",
    "4’1”",
    "4’2”",
    "4’3”",
    "4’4”",
    "4’5”",
    "4’6”",
    "4’7”",
    "4’8”",
    "4’9”",
    "4’10”",
    "4’11”",
    "5’0”",
    "5’1”",
    "5’2”",
    "5’3”",
    "5’4”",
    "5’5”",
    "5’6”",
    "5’7”",
    "5’8”",
    "5’9”",
    "5’10”",
    "5’11”",
    "6’0”",
    "6’1”",
    "6’2”",
    "6’3”",
    "6’4”",
    "6’5”",
    "6’6”",
    "6’7”",
    "6’8”",
    "6’9”",
    "6’10”",
    "6’11”",
    "7’0”",
    "7’1”",
    "7’2”",
    "7’3”",
    "7’4”",
    "7’5”",
    "7’6”",
    "7’7”",
    "7’8”",
    "7’9”",
    "7’10”",
    "7’11”",
  ];

  let navigate = useNavigate();
  const [age, setAge] = useState("");
  const [dob, setDOB] = useState(); // Added age state
  const [countryid, setCountryid] = useState("");
  const [state, setState] = useState([]);
  const [city, setCity] = useState("");
  console.log(state)
  // Fetching Country from country.json
  const handlecounty = (e) => {
    const getcountryId = e.target.value;
    const getStatedata = country.find(
      (country) => country.country_id === getcountryId
    ).states;
    setState(getStatedata);
    setCountryid(getcountryId);
  };
  console.log()
  // Fetching State based on country
  const handlestate = (e) => {
    const stateid = e.target.value;
    console.log(stateid);
    setCity(stateid); // Set the value of city
  };

  const calculatedAge = () => {
    const dob = document.querySelector(".dob").value;
    setDOB(dob);
    const today = new Date();
    const birthDate = new Date(dob);
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }
    setAge(calculatedAge.toString()); // Update age state
  };

  const handleNext = () => {
    // calculating age based on DOB
    // calculatedAge();

    // getting data to send to API

    // if (!document.querySelector(".gender").value ||
    //   !dob ||
    //   !age ||
    //   !country ||
    //   !state ||
    //   !home_town ||
    //   !document.querySelector(".height").value ||
    //   !document.querySelector(".weight").value ||
    //   !document.querySelector(".religion").value ||
    //   !document.querySelector(".community").value ||
    //   !document.querySelector(".mother-tongue").value ||
    //   !document.querySelector(".marital-status").value ||
    //   !document.querySelector(".food-preference").value ||
    //   !document.querySelector(".smoke").value ||
    //   !document.querySelector(".drink").value ||
    //   !document.querySelector("#bio").value) {
    //   alert("please fill all the fields")
    // }
    const data = {
      gender: document.querySelector(".gender").value,
      dob: dob,
      age: age,
      country: country,
      state: state,
      city: home_town,
      height: document.querySelector(".height").value,
      weight: document.querySelector(".weight").value,
      religion: document.querySelector(".religion").value,
      community: document.querySelector(".community").value,
      mother_tongue: document.querySelector(".mother-tongue").value,
      marital_status: document.querySelector(".marital-status").value,
      food_preference: document.querySelector(".food-preference").value,
      smoke: document.querySelector(".smoke").value,
      drink: document.querySelector(".drink").value,
      bio: document.querySelector("#bio").value,
    };
    console.log(data);
    // Check if any field is empty
    for (const key in data) {
      if (data[key] === "") {
        alert(`Please fill in ${key} fields.`);
        return;
      }
    }
    let path = `/education-Career-details`;
    navigate(path, { state: data });
  };

  const [motherTongues, setMotherTongues] = useState([]);
  const [maritalStatus, setMaritalStatus] = useState([]);
  const [foodPreference, setFoodPreference] = useState([]);
  const [smokePreference, setSmokePreference] = useState([]);
  const [drinkPreference, setDrinkPreference] = useState([]);
  const [religion, setReligion] = useState([]);
  const [communities, setCommunities] = useState([]);

  const [settleDown, setSettleDown] = useState([]);

  useEffect(() => {
    const fetchMotherTongues = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/mother_tongue`
        );
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0]);

        if (Array.isArray(response.data.data)) {
          setMotherTongues(response.data.data);
        } else {
          setMotherTongues([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching mother tongues:", error);
      }
    };

    const fetchMaritalStatus = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/marital_status`
        );
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0].status);

        if (Array.isArray(response.data.data)) {
          setMaritalStatus(response.data.data);
        } else {
          setMaritalStatus([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching Marital Status:", error);
      }
    };

    const fetchFoodPreference = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/food_preference`
        );
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0].fp_name);

        if (Array.isArray(response.data.data)) {
          setFoodPreference(response.data.data);
        } else {
          setFoodPreference([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching Food Preference:", error);
      }
    };

    const fetchSmokePreference = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/smoke_status`
        );
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0].smoke_value);

        if (Array.isArray(response.data.data)) {
          setSmokePreference(response.data.data);
        } else {
          setSmokePreference([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching Smoke Status:", error);
      }
    };

    const fetchDrinkPreference = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/drink_status`
        );
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0].drink_value);

        if (Array.isArray(response.data.data)) {
          setDrinkPreference(response.data.data);
        } else {
          setDrinkPreference([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching Drink Status:", error);
      }
    };

    const fetchReligionPreference = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/religion`
        );
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0].religious_name);
        fetchCommunities(response.data.data[0].religious_name);
        if (Array.isArray(response.data.data)) {
          setReligion(response.data.data);
        } else {
          setReligion([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching Religion Status:", error);
      }
    };

    const fetchCommunities = async (religiousName) => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/community?religious_name=${religiousName}`
        );

        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0]);
        // console.log(response.data.data[0].community_name);

        if (Array.isArray(response.data.data)) {
          setCommunities(response.data.data);
        } else {
          setCommunities([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching Communities:", error);
      }
    };

    const fetchSettleDown = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/settle_down_value`
        );
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data[0].settle_down_value);

        if (Array.isArray(response.data.data)) {
          setSettleDown(response.data.data);
        } else {
          setSettleDown([response.data.data]);
        }
      } catch (error) {
        console.error("Error fetching Settle Down Status:", error);
      }
    };

    fetchMotherTongues();
    fetchMaritalStatus();
    fetchFoodPreference();
    fetchSmokePreference();
    fetchDrinkPreference();
    fetchReligionPreference();
    fetchSettleDown();
  }, []);
  function getMaxDate() {
    const today = new Date();
    const maxDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );
    return maxDate.toISOString().split("T")[0]; // Convert to YYYY-MM-DD format
  }
  
  return (
    <div>
      <div className="r_login__wrapper1">
        <div className="r_login">
          <h2 className="personal_details">Personal Details</h2>
          <div className="gender_state">
            <select className="gender" required>
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <input
            placeholder="DOB"
            type="Date"
            className="dob"
            id="dob"
            max={getMaxDate()}
            onChange={calculatedAge}
          />
          <input
            type="text"
            name="age"
            id="age"
            placeholder="Age"
            className="city"
            value={age}
          />
          <div className="gender_state">
            <select className="height" required>
              <option value="">Height</option>
              {Height.map((height, index) => (
                <option key={index} value={height}>
                  {height}
                </option>
              ))}
            </select>
          </div>
          <input placeholder="Weight" type="text" className="weight" />
          {/* country */}
          {/* <div className="gender_state">
            <select className="gender" onChange={handlecounty}>
              <option value="">Country</option>
              {country.map((country, index) => (
                <option value={country.country_id} key={index}>
                  {country.country_name}
                </option>
              ))}
              <option value="USA">USA</option>
            </select>
          </div>
          <div className="gender_state">
            <select className="gender" onChange={handlestate}>
              <option value="">State</option>
              {state.map((getstate, index) => (
                <option value={getstate.stateid} key={index}>
                  {getstate.state_name}
                </option>
              ))}
            </select>
          </div>
          <input placeholder="City" type="text" className="city" />
          <div className="gender_state">
            <select className="settle-down" required>
              <option value="">Settle Down</option>
              {settleDown &&
                settleDown.map((settleDown, index) => (
                  <option key={index} value={settleDown.settle_down_value}>
                    {settleDown.settle_down_value}
                  </option>
                ))}
            </select>
          </div> */}
          <div className="gender_state">
            <select
              placeholder="Home town"
              // className="settle-down"
              name="country"
              id=""
              onChange={(e) => {
                setCountry(e.target.value);
                loadStates(e.target.value);
              }}
            >
              <option value="">Select your country:</option>
              {countries.map((c) => {
                return <option value={c.country_name}>{c.country_name}</option>;
              })}
            </select>
          </div>
          <div className="gender_state">
            <select
              placeholder="Home town"
              name="country"
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
            <select className="religion" required>
              <option value="">Religion</option>
              {religion &&
                religion.map((religion, index) => (
                  <option key={index} value={religion.religious_name}>
                    {religion.religious_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="gender_state">
            <select className="community" required>
              <option value="">Community</option>
              {communities &&
                communities.map((communities, index) => (
                  <option key={index} value={communities.religious_name}>
                    {communities.community_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="gender_state">
            <select className="mother-tongue" required>
              <option value="">Mothers Tongue</option>
              {motherTongues &&
                motherTongues.map((tongue, index) => (
                  <option key={index} value={tongue.mt_name}>
                    {tongue.mt_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="gender_state">
            <select className="marital-status" required>
              <option value="">Marital Status</option>
              {maritalStatus &&
                maritalStatus.map((marital, index) => (
                  <option key={index} value={marital.status}>
                    {marital.status}
                  </option>
                ))}
            </select>
          </div>
          <div className="gender_state">
            <select className="food-preference" required>
              <option value="">Food Preference</option>
              {foodPreference &&
                foodPreference.map((foodPreference, index) => (
                  <option key={index} value={foodPreference.fp_name}>
                    {foodPreference.fp_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="gender_state">
            <select className="smoke" required>
              <option value="">Smoke</option>
              {smokePreference &&
                smokePreference.map((smokePreference, index) => (
                  <option key={index} value={smokePreference.smoke_value}>
                    {smokePreference.smoke_value}
                  </option>
                ))}
            </select>
          </div>
          <div className="gender_state">
            <select className="drink" required>
              <option value="">Drink</option>
              {drinkPreference &&
                drinkPreference.map((drinkPreference, index) => (
                  <option key={index} value={drinkPreference.drink_value}>
                    {drinkPreference.drink_value}
                  </option>
                ))}
            </select>
          </div>
          <textarea
            name="bio"
            id="bio"
            cols="30"
            rows="5"
            className="bio"
            placeholder="Enter BIO"
            required
          ></textarea>

          <div id="recaptcha"></div>
          <button className="btn__next" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration1;
