import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SignUpJourneyCard from "../../Components/SignUpJourneyCard/SignUpJourneyCard";
import "./SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../BASE_URL";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_no, setPhone] = useState("");
  const [dob, setDob] = useState(Date.now());
  const [age, setAge] = useState("");

  const [highest_qualification, setHighestQualification] = useState("");
  const [college, setCollege] = useState("");

  const [job_title, setJobTitle] = useState("");
  const [company_name, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [salary, setSalary] = useState(130000);

  const [food_preference, setFoodPreference] = useState("");
  const [drink, setDrink] = useState("");
  const [smoke, setSmoke] = useState("");

  const [home_town, setHome_town] = useState("Amd");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [religion, setReligion] = useState("");
  const [marital_status, setMaritalStatus] = useState("");
  const [community, setCommunity] = useState("");
  const [mother_tongue, setMotherTongue] = useState("");
  const [user_name, serUser_name] = useState("ABC");
  const [settle_down, setSettle_down] = useState("Amd");

  const [bio, setBio] = useState("");

  const [height, setHeight] = useState("135");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(50);
  const [status, setStatus] = useState("active");
  const [designation, setDesignation] = useState("adsfg");

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [authToken, setAuthToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  // ALDMbqqV-UNzxmDMGh6onLipeJ3QgkbmgE4tHNs8mzsDvoK-0qgwKhiEHjkksowe5-o

  // useEffect(() => {
  //   // loadCountries();
  //   loadCountries();
  // }, []);

  // const loadCountries = async () => {
  //   try {
  //     await axios
  //       .get("https://www.universal-tutorial.com/api/getaccesstoken", {
  //         headers: {
  //           Accept: "application/json",
  //           "api-token":
  //             "ALDMbqqV-UNzxmDMGh6onLipeJ3QgkbmgE4tHNs8mzsDvoK-0qgwKhiEHjkksowe5-o",
  //           "user-email": "sarjilp2903@gmail.com",
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res.data.auth_token);
  //         setAuthToken(res.data.auth_token);
  //       })
  //       .catch((err) => console.log(err));
  //     console.log(authToken);
  //     await axios
  //       .get("https://www.universal-tutorial.com/api/countries", {
  //         headers: {
  //           Accept: "application/json",
  //           Authorization: `Bearer ${authToken}`,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         setCountries(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   } catch (error) {}
  // };

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

  // const loadCountries = async () => {
  //   await axios
  //     .get("")
  //     .then((res) => {})
  //     .catch((err) => console.log(err));
  // };
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = {
      user_name,
      contact_no,
      email,
      age,
      weight,
      country,
      state,
      gender,
      dob: new Date(dob).toISOString(),
      bio,
      marital_status,
      religion,
      mother_tongue,
      community,
      settle_down,
      home_town,
      height,
      highest_qualification,
      college,
      job_title,
      company_name,
      salary,
      food_preference,
      smoke,
      drink,
      status,
      designation,
    };
    await axios
      .post(`${BASE_URL}/api/profile`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("user", JSON.stringify(res.data.data.user_data));
        localStorage.setItem("token", res.data.data.token);
        alert("Register success");
        // navigate("/profile");
        navigate("/Registration1");
      })
      .catch((err) => alert(err));
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
  let Navigate = useNavigate();
    const routeChange = () => { 
        let path = `/Registration1`; 
        Navigate(path);
      };

  return (
    <div className="signup">
      <div className="signup__top">
        <div className="signup__left">
          <SignUpJourneyCard />
        </div>
        <div className="signup__right ">
          <div className="signup__right_top">
            <h3 className="signup__inpput_heading">Basic Detail</h3>
            <div className="signup__basic_details">
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                placeholder="@Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter your mobile number"
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="date"
                placeholder="Enter your Birthdate"
                onChange={(e) => setDob(e.target.value)}
              />
              <input
                type="text"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <div className="signup__right_bottom ">
            <div className="signup__right_left  ">
              <div className="signup__education_details ">
                <h3 className="signup__inpput_heading">Education Detail</h3>
                <input
                  type="text"
                  placeholder="Higher Qualification"
                  onChange={(e) => setHighestQualification(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="College"
                  onChange={(e) => setCollege(e.target.value)}
                />
              </div>
              <div className="signup__occupation_details ">
                <h3 className="signup__inpput_heading">Occupation Detail</h3>
                <input
                  type="text"
                  placeholder="Job title"
                  onChange={(e) => setJobTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Company name"
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Company description"
                  onChange={(e) => setCompanyDescription(e.target.value)}
                />
              </div>
              <div className="signup__diet_prefference  ">
                <h3 className="signup__inpput_heading">Diet Preference</h3>
                <select
                  name="age"
                  id=""
                  className="advancedsearch__element_select"
                  onChange={(e) => setFoodPreference(e.target.value)}
                >
                  <option value="">Food Preference</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Nonvegetarian">Nonvegetarian</option>
                  <option value="Eggetarian">Eggetarian</option>
                </select>
                <select
                  name="drink"
                  id=""
                  className="advancedsearch__element_select"
                  onChange={(e) => setDrink(e.target.value)}
                >
                  <option value="">Drink</option>
                  <option value="Yes">Yes</option>
                  <option value="Occasionally">Occasionally</option>
                  <option value="Never">Never</option>
                </select>
                <select
                  name="age"
                  id=""
                  className="advancedsearch__element_select"
                  onChange={(e) => setSmoke(e.target.value)}
                >
                  <option value="">Smoke</option>
                  <option value="Yes">Yes</option>
                  <option value="Occasionally">Occasionally</option>
                  <option value="Never">Never</option>
                </select>
              </div>
            </div>
            <div className="signup__right_right ">
              <div className="signup__home_town ">
                <h3 className="signup__inpput_heading">Home Town</h3>

                <select
                  placeholder="Home town"
                  name="country"
                  id=""
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

                <select
                  name="religion"
                  id=""
                  onChange={(e) => setReligion(e.target.value)}
                >
                  <option value="">Religion</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                </select>
                <select
                  name="maritalStatus"
                  id=""
                  onChange={(e) => setMaritalStatus(e.target.value)}
                >
                  <option value="">MaritalStatus</option>
                  <option value="Married">Married</option>
                  <option value="UnMarried">Un married</option>
                </select>
                <select
                  name="community"
                  id=""
                  onChange={(e) => setCommunity(e.target.value)}
                >
                  <option value="">Community</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                </select>
                <select
                  name="motherTongue"
                  id=""
                  onChange={(e) => setMotherTongue(e.target.value)}
                >
                  <option value="">motherTongue</option>
                  <option value="Gujarati">Gujarati</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              <div>
                <h3 className="signup__inpput_heading">Bio</h3>
                <textarea
                  className="signup__bio"
                  name=""
                  id=""
                  cols="55"
                  rows="5"
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleSubmit}>Submit</button>
      {/* <button onClick={routeChange}>Submit</button> */}
    </div>
  );
};

export default SignUp;
