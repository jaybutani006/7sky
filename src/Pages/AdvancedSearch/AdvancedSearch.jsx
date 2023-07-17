import React, { useState } from "react";
import "./AdvancedSearch.css";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

const AdvancedSearch = () => {
  const [value, setvalue] = useState("");

  const handleOnchange = (val) => {
    setvalue(val);
  };

  const options = [
    { label: "Option 1", value: "option_1" },
    { label: "Option 2", value: "option_2" },
    { label: "Option 3", value: "option_3" },
    { label: "Option 4", value: "option_4" },
  ];
  return (
    <div className="advancedsearch">
      <h2>Advanced Search</h2>
      <div className="advancedsearch__elements_wrapper">
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Age</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <select name="age" id="" className="advancedsearch__element_select">
              <option value="0">18</option>
              <option value="1">19</option>
              <option value="2">20</option>
              <option value="3">21</option>
              <option value="4">22</option>
              <option value="5">23</option>
              <option value="6">24</option>
            </select>
            <p>between</p>
            <select name="age" id="" className="advancedsearch__element_select">
              <option value="0">18</option>
              <option value="1">19</option>
              <option value="2">20</option>
              <option value="3">21</option>
              <option value="4">22</option>
              <option value="5">23</option>
              <option value="6">24</option>
            </select>
          </div>
        </div>
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Height</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <select name="age" id="" className="advancedsearch__element_select">
              <option value="0">18</option>
              <option value="1">19</option>
              <option value="2">20</option>
              <option value="3">21</option>
              <option value="4">22</option>
              <option value="5">23</option>
              <option value="6">24</option>
            </select>
            <p>between</p>
            <select name="age" id="" className="advancedsearch__element_select">
              <option value="0">18</option>
              <option value="1">19</option>
              <option value="2">20</option>
              <option value="3">21</option>
              <option value="4">22</option>
              <option value="5">23</option>
              <option value="6">24</option>
            </select>
          </div>
        </div>
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Age</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <MultiSelect onChange={handleOnchange} options={options} />
          </div>
        </div>
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Height</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <MultiSelect onChange={handleOnchange} options={options} />
          </div>
        </div>
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Religion</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <MultiSelect onChange={handleOnchange} options={options} />
          </div>
        </div>
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Mother Tongue</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <MultiSelect onChange={handleOnchange} options={options} />
          </div>
        </div>
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Country</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <MultiSelect onChange={handleOnchange} options={options} />
          </div>
        </div>
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Age</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <MultiSelect onChange={handleOnchange} options={options} />
          </div>
        </div>
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">City</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <MultiSelect onChange={handleOnchange} options={options} />
          </div>
        </div>
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Address</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <MultiSelect onChange={handleOnchange} options={options} />
          </div>
        </div>
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Income</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <MultiSelect onChange={handleOnchange} options={options} />
          </div>
        </div>
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Height</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <select name="age" id="" className="advancedsearch__element_select">
              <option value="0">Select Height Range</option>
              <option value="1">4.0'' - 4.3''</option>
              <option value="2">4.4'' - 4.6''</option>
              <option value="3">4.7'' - 4.9''</option>
              <option value="4">5.0'' - 5.3''</option>
              <option value="5">5.4'' - 5.6''</option>
              <option value="6">5.7'' - 5.9''</option>
            </select>
          </div>
        </div>
      </div>
      <h2>Education & Career</h2>
      <div className="advancedsearch__elements_wrapper">
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Higher Education</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <select name="age" id="" className="advancedsearch__element_select">
              <option value="0">Select Higher education</option>
              <option value="1">10th</option>
              <option value="2">12th</option>
              <option value="3">UG</option>
              <option value="4">PG</option>
            </select>
          </div>
        </div>
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Occupation</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <select name="age" id="" className="advancedsearch__element_select">
              <option value="0">Select Occupation</option>
              <option value="1">Goverment</option>
              <option value="2">IT and Development</option>
              <option value="3">Private</option>
            </select>
          </div>
        </div>
      </div>
      <h2>Food Preference</h2>
      <div className="advancedsearch__elements_wrapper">
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Diet</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <select name="age" id="" className="advancedsearch__element_select">
              <option value="0">Regular</option>
              <option value="1">Occasionally</option>
              <option value="1">Never</option>
            </select>
          </div>
        </div>
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Drink</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <select name="age" id="" className="advancedsearch__element_select">
              <option value="0">Regular</option>
              <option value="1">Occasionally</option>
              <option value="1">Never</option>
            </select>
          </div>
        </div>
        <div className="advancedsearch__element">
          <p className="advancedsearch__element_lable">Smoke</p>
          <div className="advancedsearch__element_selects_wrapepr">
            <select name="age" id="" className="advancedsearch__element_select">
              <option value="0">Regular</option>
              <option value="1">Occasionally</option>
              <option value="1">Never</option>
            </select>
          </div>
        </div>
      </div>

      <button>Submit</button>
    </div>
  );
};

export default AdvancedSearch;
