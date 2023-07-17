import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Registration2.css";
import axios from "axios";
import { BASE_URL } from "../../BASE_URL";

function Registration2() {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const [higherQualification, setHigherQualification] = useState([]);
  const [salaryRange, setSalaryRange] = useState([]);
  const [formData, setFormData] = useState({
    highest_qualification: "",
    college: "",
    job_title: "",
    company_name: "",
    salary: "",
    designation: "",
    // profile_photo: "",
  });

  console.log(formData);

  useEffect(() => {
    fetchHighestQualification();
    fetchSalaryRange();
  }, []);

  const fetchHighestQualification = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/highest_qualification`
      );

      if (Array.isArray(response.data.data)) {
        setHigherQualification(response.data.data);
      } else {
        setHigherQualification([response.data.data]);
      }
    } catch (error) {
      console.error("Error fetching Higher Qualification status:", error);
    }
  };

  const fetchSalaryRange = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/salary`
      );

      if (Array.isArray(response.data.data)) {
        setSalaryRange(response.data.data);
      } else {
        setSalaryRange([response.data.data]);
      }
    } catch (error) {
      console.error("Error fetching Salary Range:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (
        !formData.highest_qualification ||
        !formData.college ||
        !formData.job_title ||
        !formData.company_name ||
        !formData.salary ||
        !formData.designation
      ) {
        alert("Please fill in all the fields.");
        return;
      }

      // Create a new FormData object
      const combinedFormData = new FormData();

      // Append the data from `data` object
      Object.entries(data).forEach(([key, value]) => {
        combinedFormData.append(key, value);
      });
      // Append the data from `formData` object
      Object.entries(formData).forEach(([key, value]) => {
        combinedFormData.append(key, value);
      });

      const response = await axios.put(
        `${BASE_URL}/api/profile`,
        combinedFormData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
          },
        }
      );

      if (response.status === 200) {
        // Data stored or updated successfully
        console.log("Data stored or updated successfully");
        navigate("/uploadphotos");
      }
    } catch (error) {
      console.error("Error storing or updating data:", error);
    }
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div className="m_login__wrapepr">
        <div className="m_login m_login-padding">
          <h2>Education/Career Details</h2>
          <div className="gender_state">
            <select
              className="gender"
              name="highest_qualification"
              value={formData.highest_qualification}
              onChange={handleChange}
              required
            >
              <option value="">Highest Qualification</option>
              {higherQualification &&
                higherQualification.map((item, index) => (
                  <option key={index} value={item.hq_name}>
                    {item.hq_name}
                  </option>
                ))}
            </select>
          </div>
          <input
            placeholder="College Name"
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Job Title"
            type="text"
            name="job_title"
            value={formData.job_title}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Company Name"
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            required
          />
          <div className="gender_state">
            <select
              className="gender"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
            >
              <option value="">Salary Range</option>
              {salaryRange &&
                salaryRange.map((item, index) => (
                  <option key={index} value={item.salary_value}>
                    {item.salary_value}
                  </option>
                ))}
            </select>
          </div>
          <input
            placeholder="Designation"
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />

          {/* photo upload field */}
          {/* Add input field for profile photo */}
          <input
            type="file"
            name="profile_photo"
            id="profile_photo"
            onChange={handleChange}
          />
          {/* <input type="file" name="" id="" /> */}

          {/* <input type="file" name="profile_photo" id="profile_photo" /> */}

          <div id="recaptcha"></div>
          <button className="text-light" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration2;
