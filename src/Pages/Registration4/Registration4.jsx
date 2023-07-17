import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Registration4.css";
import country from "../../country.json";
import { faHandFist } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Select from "react-select";
import { State } from "country-state-city"; 
import ReactSlider from "react-slider";
import Slider from "@material-ui/core/Slider";
import { BASE_URL } from "../../BASE_URL";

function Registration4() {
  const [selectedState, setSelectedState] = useState("");
  const [states1, setStates1] = useState([]);
  const [preferences, setPreferences] = useState(null);
  const token = localStorage.getItem("token");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [authToken, setAuthToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
    // const preferences = data?.data?.UserDetails?.preference;

    // const [minHeightInput, setMinHeightInput] = useState("");
    // const [maxHeightInput, setMaxHeightInput] = useState("");
    // const [maritualStatusSend, setMaritualStatusSend] = useState("");
    // const [highestQualificationInput, setHighestQualificationInput] =
    //   useState("");
    // const [salaryInput, setSalaryInput] = useState("");
    // const [jobTitileInput, setJobTitileInput] = useState("");
    // const [other, setOther] = useState("");
    setPreferences(data?.data?.UserDetails?.preference);
    console.log(data?.data?.UserDetails?.preference);
    if (data?.data?.UserDetails?.preference) {
      setJobTitileInput(data?.data?.UserDetails?.preference?.[0]?.job_title);
      setMinHeightInput(data?.data?.UserDetails?.preference?.[0]?.min_height);
      setMaxHeightInput(data?.data?.UserDetails?.preference?.[0]?.max_height);
      setSalaryInput(data?.data?.UserDetails?.preference?.[0]?.annual_income);
      setAgeRange([
        data?.data?.UserDetails?.preference?.[0]?.min_age,
        data?.data?.UserDetails?.preference?.[0]?.max_age,
      ]);
      setCountry(data?.data?.UserDetails?.preference?.[0]?.country);
      loadStates(data?.data?.UserDetails?.preference?.[0]?.country);
      setState(data?.data?.UserDetails?.preference?.[0]?.state);
      loadCities(data?.data?.UserDetails?.preference?.[0]?.state);
      setHome_town(data?.data?.UserDetails?.preference?.[0]?.location);
      setOther(data?.data?.UserDetails?.preference?.[0]?.explanation);
      selectedValues = data?.data?.UserDetails?.preference?.[0]?.marital_status;
      const selectedMaritual =
        data.data.UserDetails.preference[0].marital_status.map((status) => ({
          value: status,
          label: status,
        }));
      setSelectedOptionsMaritual(selectedMaritual);
      const selectedoptions2 =
        data.data.UserDetails.preference[0].religion.map((status) => ({
          value: status,
          label: status,
        }));
      setSelectedOptions2(selectedoptions2);
      const selectedoptions = data.data.UserDetails.preference[0].language.map(
        (status) => ({
          value: status,
          label: status,
        })
      );
      setSelectedOptions(selectedoptions);
      const selectedHigh =
        data.data.UserDetails.preference[0].highest_qualification.map(
          (status) => ({
            value: status,
            label: status,
          })
        );
      setSelectedOptionsHigh(selectedHigh);
      const selectedFood =
        data.data.UserDetails.preference[0].food_preferences.map((status) => ({
          value: status,
          label: status,
        }));
      setSelectedOptionsFood(selectedFood);
      const selectedDrink =
        data.data.UserDetails.preference[0].drink.map((status) => ({
          value: status,
          label: status,
        }));
      setSelectedOptionsDrink(selectedDrink);
      const selectedSmoke = data.data.UserDetails.preference[0].smoke.map(
        (status) => ({
          value: status,
          label: status,
        })
      );
      setSelectedOptionsSmoke(selectedSmoke);

      // const [selectedOptions, setSelectedOptions] = useState([]);
      // const [selectedOptions2, setSelectedOptions2] = useState([]);
      // const [selectedOptionsMaritual, setSelectedOptionsMaritual] = useState(
      //   []
      // );
      // const [selectedOptionsHigh, setSelectedOptionsHigh] = useState([]);
      // const [selectedOptionsFood, setSelectedOptionsFood] = useState([]);
      // const [selectedOptionsDrink, setSelectedOptionsDrink] = useState([]);
      // const [selectedOptionsSmoke, setSelectedOptionsSmoke] = useState([]);
      // setAgeRange
    }
  };
  useEffect(() => {
    // loadCountries();
    loadCountries();
    userDetails();
  }, [countries]);
  useEffect(() => {
    // loadCountries();
    loadCountries2();
  }, [isLoading]);
  const [ageRange, setAgeRange] = useState([18, 80]);

  const handleAgeChange = (event, newAgeRange) => {
    setAgeRange(newAgeRange);
    console.log(ageRange);
  };
  const navigate = useNavigate();
  const [home_town, setHome_town] = useState("Amd");
  const [country, setCountry] = useState("");
  console.log(home_town);
  console.log(country);
  
  

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
  const [maritalStatus, setMaritalStatus] = useState([]);
  const [religion, setReligion] = useState([]);
  const [motherTongues, setMotherTongues] = useState([]);
  const [highestQualification, setHighestQualification] = useState([]);
  const [salary, setSalary] = useState([]);
  const [foodPreference, setFoodPreference] = useState([]);
  const [drinkPreference, setDrinkPreference] = useState([]);
  const [smokePreference, setSmokePreference] = useState([]);
  const [jobTitlePreference, setJobTitlePreference] = useState([]);

  const [startAgeValue, setStartAgeValue] = useState(0);

  const [city, setCity] = useState("");
  const [isPreferenceExist, setIsPreferenceExist] = useState(false);
  const [height, setHeight] = useState([]);

  useEffect(() => {
    loadPreference();
  }, []);

  const Token = localStorage.getItem("token");

  const loadPreference = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/preference/preferencedata`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: Token,
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      console.log(responseData.data);
      setHeight(responseData.data.height);
      console.log(height);

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
      setIsPreferenceExist(Object.keys(preferenceData).length > 0);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
  console.log(highestQualification?.[0]);

  const [countryid, setCountryid] = useState("");
  const [state, setState] = useState([]);

  const handlecounty = (e) => {
    const getcountryId = e.target.value;
    const getStatedata = country.find(
      (country) => country.country_id === getcountryId
    ).states;
    setState(getStatedata);
    setCountryid(getcountryId);
  };

  const handlestate = (e) => {
    const stateid = e.target.value;
    console.log(stateid);
    setCity(stateid); // Set the value of city
  };

  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  // console.log(minAge)
  // console.log(maxAge);
  const ageOptions = [];
  for (let age = 18; age <= 100; age++) {
    ageOptions.push(
      <option key={age} value={age}>
        {age}
      </option>
    );
  }

  const handleMinAgeChange = (e) => {
    setMinAge(e.target.value);
  };

  const handleMaxAgeChange = (e) => {
    setMaxAge(e.target.value);
  };

  const [minHeightInput, setMinHeightInput] = useState("");
  const [maxHeightInput, setMaxHeightInput] = useState("");
  const [maritualStatusSend, setMaritualStatusSend] = useState("");
  const [highestQualificationInput, setHighestQualificationInput] =
    useState("");
  const [salaryInput, setSalaryInput] = useState("");
  const [jobTitileInput, setJobTitileInput] = useState("");
  const [other, setOther] = useState("");
  const [dietInput, setDietInput] = useState("");
  const [drinkInput, setDrinkInput] = useState("");
  const [smokeInput, setSmokeInput] = useState("");
  console.log(minHeightInput);
  console.log(maxHeightInput);
  console.log(maritualStatusSend);
  console.log(highestQualificationInput);
  console.log(salaryInput);
  const handleMinHeightChange = (e) => {
    setMinHeightInput(e.target.value);
  };

  const handleMaxHeightChange = (e) => {
    setMaxHeightInput(e.target.value);
  };
  const handleMaritalStatusChange = (e) => {
    setMaritualStatusSend(e.target.value);
  };
  const handleHighestQualification = (e) => {
    setHighestQualificationInput(e.target.value);
  };
  const handleSalaryChange = (e) => {
    setSalaryInput(e.target.value);
  };
  const handlejobTitleChange = (e) => {
    setJobTitileInput(e.target.value);
  };
  const handleDietChange = (e) => {
    setDietInput(e.target.value);
  };
  const handleDrinkChange = (e) => {
    setDrinkInput(e.target.value);
  };
   const handleSmokeChange = (e) => {
     setSmokeInput(e.target.value);
   };
  console.log();

  // const maritalStatusOptions = [
  //   { _id: "62bc3", marital_status: "Single" },
  //   { _id: "62bc4", marital_status: "Married" },
  //   { _id: "62bc5", marital_status: "Divorced" },
  // ];

  // const handleMaritalStatusChange = (e) => {
  //   setMaritalStatus([e.target.value]);
  // };

  // console.log(state)
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     if (isPreferenceExist) {
  //       // Preference already exists, make a PUT request to update
  //       const updateResponse = await fetch(
  //         "https://metrimonial.onrender.com/api/preference",
  //         {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: Token,
  //           },
  //           body: JSON.stringify({
  //             marital_status: maritalStatus,
  //             religion: religion,
  //             mother_tongue: motherTongues,
  //             min_height: minHeightInput,
  //             max_height: maxHeightInput,
  //             age_from: minAge,
  //             age_to: maxAge,
  //             highest_qualification: highestQualification,
  //             annual_income: salary,
  //             food_preference: foodPreference,
  //             drink: drinkPreference,
  //             smoke: smokePreference,
  //             country: countryid,
  //             state: state,
  //             city: city,
  //           }),
  //         }
  //       );

  //       const updateData = await updateResponse.json();
  //       console.log(updateData);
  //       // Handle the update response as needed
  //     } else {
  //       // Preference doesn't exist, make a POST request to create
  //       const createResponse = await fetch(
  //         "https://metrimonial.onrender.com/api/preference",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: Token,
  //           },
  //           body: JSON.stringify({
  //             marital_status: maritalStatus,
  //             religion: religion,
  //             mother_tongue: motherTongues,
  //             min_height: minHeightInput,
  //             max_height: maxHeightInput,
  //             age_from: minAge,
  //             age_to: maxAge,
  //             highest_qualification: highestQualification,
  //             annual_income: salary,
  //             food_preference: foodPreference,
  //             drink: drinkPreference,
  //             smoke: smokePreference,
  //             country: countryid,
  //             state: state,
  //             city: city,
  //           }),
  //         }
  //       );

  //       const createData = await createResponse.json();
  //       console.log(createData);
  //       // Handle the create response as needed
  //     }
  //   } catch (error) {
  //     console.log("ERROR: ", error);
  //   }
  // };

  const handleStateChange = (e) => {
    setState([e.target.value]);
  };

  
 
  console.log(maritalStatus);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform form validation
      // if (
      //   !minAge ||
      //   !maxAge ||
      //   !minHeightInput ||
      //   !maxHeightInput ||
      //   !maritalStatus ||
      //   !salary ||
      //   !highestQualification ||
      //   !drinkPreference ||
      //   !smokePreference ||
      //   !city
      // ) {
      //   alert("Please fill in all required fields");
      //   return;
      // }
      // onst[(minHeightInput, setMinHeightInput)] = useState("");
      // const [maxHeightInput, setMaxHeightInput] = useState("");
      // const [maritualStatusSend, setMaritualStatusSend] = useState("");
      // const [highestQualificationInput, setHighestQualificationInput] =
      //   useState("");
      // const [salaryInput, setSalaryInput] = useState("");
      // const [dietInput, setDietInput] = useState("");
      // const [drinkInput, setDrinkInput] = useState("");
      // const [smokeInput, setSmokeInput] = useState("");
      const formData = {
        marital_status: selectedMaritual,
        // marital_status: JSON.stringify(maritalStatus),
        religion: selectedReligion,
        // weigth: ,
        language: selectedValues,
        min_height: minHeightInput,
        max_height: maxHeightInput,
        job_title: jobTitileInput,
        min_age: ageRange[0],
        max_age: ageRange[1],
        highest_qualification: selectedHigh,
        annual_income: salaryInput,
        food_preferences: selectedFood,
        drink: selectedDrink,
        smoke: selectedSmoke,
        country: country,
        state: state,
        location: home_town,
        explanation: other,
      };

      for (const key in formData) {
        if (formData[key] === "" || formData[key] === []) {
          alert(`Please fill in ${key} fields.`);
          return;
        }
      }
      if (preferences) {
        const requestOptions = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: Token,
          },
          body: JSON.stringify(formData),
        };
  
        const response = await fetch(
          `${BASE_URL}/api/preference`,
          requestOptions
        );
        const responseData = await response.json();
  
        console.log(responseData);
        if (responseData.data.status === 200) {
          navigate("/uploadphotos");
        }
      }
      else {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: Token,
          },
          body: JSON.stringify(formData),
        };
  
        const response = await fetch(
          `${BASE_URL}/api/preference`,
          requestOptions
        );
        const responseData = await response.json();
  
        console.log(responseData);
        if (responseData.data.status === 200) {
          navigate("/uploadphotos");
        }
      }
      // Handle the response as needed
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [selectedOptionsMaritual, setSelectedOptionsMaritual] = useState([]);
  const [selectedOptionsHigh, setSelectedOptionsHigh] = useState([]);
  const [selectedOptionsFood, setSelectedOptionsFood] = useState([]);
  const [selectedOptionsDrink, setSelectedOptionsDrink] = useState([]);
  const [selectedOptionsSmoke, setSelectedOptionsSmoke] = useState([]);
  // const handleSelectChange = (event) => {
  //   const selectedValues = Array.from(
  //     event.target.selectedOptions,
  //     (option) => option.value
  //   );
  //   setSelectedOptions(selectedValues);
  //   console.log(selectedOptions);
  // };
  let selectedValues = selectedOptions.map((option) => option.value);
  console.log(selectedValues);
  // religion;
  const selectedReligion = selectedOptions2.map((option) => option.value);
  let selectedMaritual = selectedOptionsMaritual.map((option) => option.value);
  const selectedHigh = selectedOptionsHigh.map((option) => option.value);
  const selectedFood = selectedOptionsFood.map((option) => option.value);
  const selectedDrink = selectedOptionsDrink.map((option) => option.value);
  const selectedSmoke = selectedOptionsSmoke.map((option) => option.value);
  console.log(selectedReligion);

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
  console.log(selectedOptions);
  console.log(selectedOptions2);

  // const [selectedOptions, setSelectedOptions] = useState([]);
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
        selectedOptions[1]
        // { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    }
      else if (hasDoesntMatter) {
        setSelectedOptionsMaritual([
          { value: "Doesn't Matter", label: "Doesn't Matter" },
        ]);
      } else {
        setSelectedOptionsMaritual(selectedOptions);
      }
  };
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
  const optionsDrink = drinkPreference.map((motherTongue) => ({
    value: motherTongue.drink_value,
    label: motherTongue.drink_value,
    // isSelected: selectedOptions.some(
    //   (option) => option.value === motherTongue.mt_name
    // ),
  }));
  const formatOptionLabelDrink = ({ label, isSelected }) => (
    <div>
      <span>{label}</span>
      {isSelected && <span className="selected-indicator">Selected</span>}
    </div>
  );
  const handleSelectChangeDrink = (selectedOptions) => {
    // setSelectedOptionsDrink(selectedOptions);
    const hasDoesntMatter = selectedOptions.some(
      (option) => option.value === "Doesn't Matter"
    );
    if (
      selectedOptions[0].value === "Doesn't Matter" &&
      selectedOptions[1].value !== "Doesn't Matter"
    ) {
      setSelectedOptionsDrink([
        selectedOptions[1],
        // { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    } else if (hasDoesntMatter) {
      setSelectedOptionsDrink([
        { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    } else {
      setSelectedOptionsDrink(selectedOptions);
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
  const optionsSmoke = smokePreference.map((motherTongue) => ({
    value: motherTongue.smoke_value,
    label: motherTongue.smoke_value,
    // isSelected: selectedOptions.some(
    //   (option) => option.value === motherTongue.mt_name
    // ),
  }));
  const formatOptionLabelSmoke = ({ label, isSelected }) => (
    <div>
      <span>{label}</span>
      {isSelected && <span className="selected-indicator">Selected</span>}
    </div>
  );
  const handleSelectChangeSmoke = (selectedOptions) => {
    // setSelectedOptionsSmoke(selectedOptions);
    const hasDoesntMatter = selectedOptions.some(
      (option) => option.value === "Doesn't Matter"
    );
    if (
      selectedOptions[0].value === "Doesn't Matter" &&
      selectedOptions[1].value !== "Doesn't Matter"
    ) {
      setSelectedOptionsSmoke([
        selectedOptions[1],
        // { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    } else if (hasDoesntMatter) {
      setSelectedOptionsSmoke([
        { value: "Doesn't Matter", label: "Doesn't Matter" },
      ]);
    } else {
      setSelectedOptionsSmoke(selectedOptions);
    }
  };
  return (
    <div>
      <div className="p_login__wrapepr">
        <div className="p_login p_login-padding">
          <h2 className="title_partnerpreference">Partner Preference</h2>

          {/* <div className="range-container">
            Age:
            <div className="age_from"></div>
            From:
            <input
              type="range"
              id="Age"
              name="min_age"
              min="0"
              max="70"
              placeholder="Start Age"
              className="age_scroll"
              value={startAgeValue}
              onChange={handleStartAgeChange}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <div className="age_to">
              TO:
              <input
                type="range"
                id="Age1"
                name="max_age"
                min="0"
                max="70"
                placeholder="End Age"
                className="age_scroll"
                value={endAgeValue}
                onChange={handleEndAgeChange}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </div>
          {isHovered && (
            <span id="age-tooltip">
              {startAgeValue} - {endAgeValue}
            </span>
          )} */}
          {/* <Select
            options={states1}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.name}
            value={selectedState}
            onChange={(selectedOption) => setSelectedState(selectedOption)}
          /> */}
          {/* <div className="gender_state">
            <select
              className="gender"
              value={minAge}
              onChange={handleMinAgeChange}
            >
              <option value="">Min Age</option>
              {ageOptions}
            </select>
          </div>
          <div className="gender_state">
            <select
              className="gender"
              value={maxAge}
              onChange={handleMaxAgeChange}
            >
              <option value="">Max Age</option>
              {ageOptions}
            </select>
          </div> */}

          <div className="gender_state">
            <p>Age</p>
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

          {/* <input placeholder="Height" type="text" /> */}

          <div className="gender_state">
            <p>height</p>
            <div style={{ display: "flex" }}>
              <select
                className="gender"
                value={minHeightInput}
                onChange={handleMinHeightChange}
                style={{ marginRight: "20px" }}
              >
                <option value="">min Height</option>
                {height?.map((ele, index) => (
                  <option key={index}>{ele.height_value}</option>
                ))}
              </select>
              <select
                className="gender"
                value={maxHeightInput}
                onChange={handleMaxHeightChange}
              >
                <option value="">max Height</option>
                {height?.map((ele, index) => (
                  <option key={index}>{ele.height_value}</option>
                ))}
              </select>
            </div>
          </div>
          {/* <div className="gender_state">
          </div> */}
          {/* <input placeholder="Weight" value={weight}  type="text" /> */}
          {/* <div className="gender_state">
            <select
              className="gender"
              value={maritualStatusSend}
              onChange={handleMaritalStatusChange}
            >
              <option value="">Marital Status</option>
              {maritalStatus?.map((ele, index) => (
                <option key={index}>{ele.status}</option>
              ))}
            </select>
          </div> */}
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
          {/* <div className="gender_state">
            <select
              className="gender"
              value={maritalStatus}
              onChange={handleMaritalStatusChange}
            >
              <option value="">Marital Status</option>
              {maritalStatusOptions.map((option) => (
                <option key={option._id} value={option._id}>
                  {option.marital_status}
                </option>
              ))}
            </select>
          </div> */}
          {/* <div className="gender_state">
            <select className="gender">
              <option value="">Religion</option>
              {religion &&
                religion.map((religion, index) => (
                  <option key={index} value={religion.religious_name}>
                    {religion.religious_name}
                  </option>
                ))}
            </select>
          </div> */}
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
          {/* <div className="gender_state">
            <select className="gender" multiple>
              <option value="">Mother Tongue</option>
              {motherTongues &&
                motherTongues.map((motherTongues, index) => (
                  <option key={index} value={motherTongues.mt_name}>
                    {motherTongues.mt_name}
                  </option>
                ))}
            </select>
          </div> */}

          {/* <div className="gender_state">
            <select className="gender" multiple onChange={handleSelectChange}>
              <option value="">Mother Tongue</option>
              {motherTongues &&
                motherTongues.map(
                  (motherTongue, index) =>
                    !selectedOptions.includes(motherTongue.mt_name) && (
                      <option key={index} value={motherTongue.mt_name}>
                        {motherTongue.mt_name}
                      </option>
                    )
                )}
            </select>
          </div> */}

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

          {/* <div className="gender_state">
            <select
              className="gender"
              value={highestQualificationInput}
              onChange={handleHighestQualification}
            >
              <option value="">Highest Qualification</option>
              {highestQualification?.map((ele, index) => (
                <option key={index}>{ele.hq_name}</option>
              ))}
            </select>
          </div> */}

          {/* <div className="gender_state">
            <select
              className="gender"
              name="highestQualification"
              // value={highestQualification}
              // onChange={handleHighestQualification}
            >
              <option
                value={highestQualification}
                onChange={handleHighestQualification}
              >
                Highest Qualification
              </option>
              {highestQualification &&
                highestQualification.map((highestQualification, index) => (
                  <option key={index} value={highestQualification.hq_name}>
                    {highestQualification.hq_name}
                  </option>
                ))}
            </select>
          </div> */}

          <div className="gender_state">
            <select
              className="gender"
              value={salaryInput}
              onChange={handleSalaryChange}
            >
              <option value="">Salary</option>
              {salary?.map((ele, index) => (
                <option key={index}>{ele.salary_value}</option>
              ))}
            </select>
          </div>
          <div className="gender_state">
            <select
              className="gender"
              value={jobTitileInput}
              onChange={handlejobTitleChange}
            >
              <option value="">JobTitle</option>
              {jobTitlePreference?.map((ele, index) => (
                <option key={index}>{ele.jt_name}</option>
              ))}
            </select>
          </div>
          {/* <div className="gender_state">
            <select className="gender" name="SelectSalary">
              <option value={salary} onChange={handleSalaryChange}>
                Salary
              </option>
              {salary &&
                salary.map((salary, index) => (
                  <option key={index} value={salary.salary_value}>
                    {salary.salary_value}
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
              value={country}
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
          {/* <div className="gender_state">
            <select
              className="gender"
              value={dietInput}
              onChange={handleDietChange}
            >
              <option value="">Diet</option>
              {foodPreference?.map((ele, index) => (
                <option key={index}>{ele.fp_name}</option>
              ))}
            </select>
          </div> */}

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
              options={optionsDrink}
              isMulti
              value={selectedOptionsDrink}
              onChange={handleSelectChangeDrink}
              styles={{
                control: (provided) => ({
                  ...provided,
                  border: "2px solid #f97096",
                }),
              }}
              formatOptionLabel={formatOptionLabelDrink}
              placeholder="Select Drink"
            />
          </div>
          <div className="gender_state">
            <Select
              className="gender"
              options={optionsSmoke}
              isMulti
              value={selectedOptionsSmoke}
              onChange={handleSelectChangeSmoke}
              styles={{
                control: (provided) => ({
                  ...provided,
                  border: "2px solid #f97096",
                }),
              }}
              formatOptionLabel={formatOptionLabelSmoke}
              placeholder="Select Smoke"
            />
          </div>
          {/* <div className="gender_state">
            <input
              type="text"
              name="father_occupation"
              id="father_occupation"
              value={other}
              placeholder="Other"
              onChange={(e) => setOther(e.target.value)}
              required
            />
          </div> */}
          <textarea
            name="bio"
            value={other}
            id="bio"
            cols="30"
            rows="5"
            style={{ border: "2px solid rgb(249, 112, 150)" }}
            className="bio"
            placeholder="Other"
            onChange={(e) => setOther(e.target.value)}
            required
          ></textarea>
          {/* <div className="gender_state">
            <select className="gender">
              <option value="">Diet</option>
              {highestQualification &&
                foodPreference.map((foodPreference, index) => (
                  <option key={index} value={foodPreference.fp_name}>
                    {foodPreference.fp_name}
                  </option>
                ))}
            </select>
          </div> */}
          {/* <div className="gender_state">
            <select
              className="gender"
              value={drinkInput}
              onChange={handleDrinkChange}
            >
              <option value="">Drink</option>
              {drinkPreference?.map((ele, index) => (
                <option key={index}>{ele.drink_value}</option>
              ))}
            </select>
          </div>
          <div className="gender_state">
            <select
              className="gender"
              value={smokeInput}
              onChange={handleSmokeChange}
            >
              <option value="">Smoke</option>
              {smokePreference?.map((ele, index) => (
                <option key={index}>{ele.smoke_value}</option>
              ))}
            </select>
          </div>
          <div className="gender_state">
            <input
              type="text"
              name="father_occupation"
              id="father_occupation"
              placeholder="Other"
              onChange={(e) => setOther(e.target.value)}
              required
            />
          </div> */}
          {/* <div className="gender_state">
            <select className="gender">
              <option value="">Drink</option>
              {drinkPreference &&
                drinkPreference.map((drinkPreference, index) => (
                  <option key={index} value={drinkPreference.drink_value}>
                    {drinkPreference.drink_value}
                  </option>
                ))}
            </select>
          </div> */}
          {/* <div className="gender_state">
            <select className="gender">
              <option value="">Smoke</option>
              {smokePreference &&
                smokePreference.map((smokePreference, index) => (
                  <option key={index} value={smokePreference.smoke_value}>
                    {smokePreference.smoke_value}
                  </option>
                ))}
            </select>
          </div> */}
          <div id="recaptcha"></div>
          {/* onClick={handleSubmit} */}
          <button className="text-light" onClick={handleSubmit}>
            Submit
          </button>
          <NavLink to="/" style={{ textAlign: "center", marginBottom: "15px" }}>
            skip
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Registration4;
