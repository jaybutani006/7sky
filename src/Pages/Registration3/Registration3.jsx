import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Registration3.css";
import { NavLink, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../BASE_URL";
function Registration3() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/family`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setData(response.data.data);
  //       const [selectedFatherOccupation, setSelectedFatherOccupation] = useState("");
  // const [selectedMotherOccupation, setSelectedMotherOccupation] = useState("");
  // const [selectedNumberOfBrothers, setSelectedNumberOfBrothers] = useState("");
  // const [selectedNumberOfSisters, setSelectedNumberOfSisters] = useState("");
  // const [selectedNumberOfMarriedBrothers, setSelectedNumberOfMarriedBrothers] =
  //   useState("");
  // const [selectedNumberOfMarriedSisters, setSelectedNumberOfMarriedSisters]
        if (response.data.data !== null) {
          setSelectedFatherOccupation(response.data.data.father_occupation);
          setSelectedMotherOccupation(response.data.data.mother_occupation);
          setSelectedNumberOfBrothers(response.data.data.no_of_brother);
          setSelectedNumberOfSisters(response.data.data.no_of_sister);
          setSelectedNumberOfMarriedBrothers(
            response.data.data.no_of_married_brother
          );
          setSelectedNumberOfMarriedSisters(
            response.data.data.no_of_married_sister
          );
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const token = localStorage.getItem("token");

  let navigate = useNavigate();

  // const handleSubmit = async () => {
  //   try {
  //     if (selectedFatherOccupation === data.father_occupation) {
  //       // If the selected father's occupation is equal to the fetched value, make a PUT request
  //       console.log("PUT API CALLED !!!");
  //       const response = await axios.put(
  //         "https://metrimonial.onrender.com/api/family",
  //         {
  //           fatherOccupation: selectedFatherOccupation,
  //           motherOccupation: selectedMotherOccupation,
  //           numberOfBrothers: selectedNumberOfBrothers,
  //           numberOfSisters: selectedNumberOfSisters,
  //           numberOfMarriedBrothers: selectedNumberOfMarriedBrothers,
  //           numberOfMarriedSisters: selectedNumberOfMarriedSisters,
  //         },
  //         {
  //           headers: {
  //             Authorization: token,
  //           },
  //         }
  //       );

  //       console.log("Family data updated:", response.data);
  //       // Add your desired actions here, such as navigating to the next page
  //     } else {
  //       // If the selected father's occupation is different, make a POST request
  //       console.log("POST API CALLED");
  //       const response = await axios.post(
  //         "https://metrimonial.onrender.com/api/family",
  //         {
  //           fatherOccupation: selectedFatherOccupation,
  //           motherOccupation: selectedMotherOccupation,
  //           numberOfBrothers: selectedNumberOfBrothers,
  //           numberOfSisters: selectedNumberOfSisters,
  //           numberOfMarriedBrothers: selectedNumberOfMarriedBrothers,
  //           numberOfMarriedSisters: selectedNumberOfMarriedSisters,
  //         },
  //         {
  //           headers: {
  //             Authorization: token,
  //           },
  //         }
  //       );

  //       console.log("Family data updated:", response.data);
  //       // Add your desired actions here, such as navigating to the next page
  //     }
  //   } catch (error) {
  //     console.error("Error updating family data:", error);
  //     // Handle the error as needed (e.g., show error message)
  //   }

  //   let path = `/Registration4`;
  //   navigate(path);
  // };
  const handleSubmit = async () => {
    try {
      // Check for empty form fields
      if (
        !selectedFatherOccupation ||
        !selectedMotherOccupation ||
        !selectedNumberOfBrothers ||
        !selectedNumberOfSisters ||
        !selectedNumberOfMarriedBrothers ||
        !selectedNumberOfMarriedSisters
      ) {
        alert("Please fill in all the fields.");
        return;
      }
      if (data) {
        const response = await axios.put(
          `${BASE_URL}/api/family`,
          {
            father_occupation: selectedFatherOccupation,
            mother_occupation: selectedMotherOccupation,
            no_of_brother: selectedNumberOfBrothers,
            no_of_sister: selectedNumberOfSisters,
            no_of_married_brother: selectedNumberOfMarriedBrothers,
            no_of_married_sister: selectedNumberOfMarriedSisters,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
  
        // console.log(data);
        console.log("Family data updated:", response.data);
      }
      else {
        const response = await axios.post(
          `${BASE_URL}/api/family`,
          {
            father_occupation: selectedFatherOccupation,
            mother_occupation: selectedMotherOccupation,
            no_of_brother: selectedNumberOfBrothers,
            no_of_sister: selectedNumberOfSisters,
            no_of_married_brother: selectedNumberOfMarriedBrothers,
            no_of_married_sister: selectedNumberOfMarriedSisters,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
  
        // console.log(data);
        console.log("Family data uploaded:", response.data);
      }

      // Add your desired actions here, such as navigating to the next page
    } catch (error) {
      console.error("Error updating family data:", error);
      // Handle the error as needed (e.g., show error message)
    }

    let path = `/partner-preference`;
    navigate(path);
  };

  const [selectedFatherOccupation, setSelectedFatherOccupation] = useState("");
  const [selectedMotherOccupation, setSelectedMotherOccupation] = useState("");
  const [selectedNumberOfBrothers, setSelectedNumberOfBrothers] = useState("");
  const [selectedNumberOfSisters, setSelectedNumberOfSisters] = useState("");
  const [selectedNumberOfMarriedBrothers, setSelectedNumberOfMarriedBrothers] =
    useState("");
  const [selectedNumberOfMarriedSisters, setSelectedNumberOfMarriedSisters] =
    useState("");
  return (
    <div>
      <div className="my_login__wrapepr">
        <div className="my_login my_login-padding py-5">
          <h2>Family Details</h2>
          <div className="gender_state">
            {/* <label htmlFor="">father_occupation</label> */}
            <input
              type="text"
              name="father_occupation"
              id="father_occupation"
              value={selectedFatherOccupation}
              placeholder="Father's Occupation"
              onChange={(e) => setSelectedFatherOccupation(e.target.value)}
              required
            />
          </div>
          <div className="gender_state">
            <input
              type="text"
              name="mother_occupation"
              id="mother_occuption"
              value={selectedMotherOccupation}
              placeholder="Mother's Occupation"
              onChange={(e) => setSelectedMotherOccupation(e.target.value)}
              required
            />
          </div>
          <div className="gender_state">
            <select
              className="gender"
              value={selectedNumberOfBrothers}
              onChange={(e) => setSelectedNumberOfBrothers(e.target.value)}
            >
              <option value="">No. Of Brother</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className="gender_state">
            <select
              className="gender"
              value={selectedNumberOfSisters}
              onChange={(e) => setSelectedNumberOfSisters(e.target.value)}
            >
              <option value="">No. Of Sister</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className="gender_state">
            <select
              className="gender"
              value={selectedNumberOfMarriedBrothers}
              onChange={(e) =>
                setSelectedNumberOfMarriedBrothers(e.target.value)
              }
            >
              <option value="">No. Of Married Brother</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className="gender_state">
            <select
              className="gender"
              value={selectedNumberOfMarriedSisters}
              onChange={(e) =>
                setSelectedNumberOfMarriedSisters(e.target.value)
              }
            >
              <option value="">No. Of Married Sister</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div id="recaptcha"></div>
          <button className="btn__next" onClick={handleSubmit}>
            Next
          </button>
          <NavLink
            to="/partner-preference"
            style={{ textAlign: "center", marginBottom: "15px" }}
          >
            skip
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Registration3;
