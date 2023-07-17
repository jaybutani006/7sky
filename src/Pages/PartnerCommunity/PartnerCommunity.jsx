import React from "react";
import "./PartnerCommunity.css";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const PartnerCommunity = () => {
  return (
    <div className="container__wrapper partner__community">
      <span>Home &gt; Partner community</span>
      <h2 className="open__positions">Sign up as partner</h2>
      <h3>Your Personal Details</h3>
      <div className="partner__personal__details">
        <div>
          <input
            type="text"
            className="partner__personal__details__input"
            placeholder="Your full name"
          />
          <input
            type="text"
            className="partner__personal__details__input"
            placeholder="Your Company name"
          />
          <input
            type="text"
            className="partner__personal__details__input"
            placeholder="Your Phone number"
          />
        </div>
        <div>
          <input
            type="text"
            className="partner__personal__details__input"
            placeholder="Years of experience"
          />
          <input
            type="text"
            className="partner__personal__details__input"
            placeholder="Designation"
          />
          <input
            type="text"
            className="partner__personal__details__input"
            placeholder="Alternate no / Manager no"
          />
        </div>
      </div>

      <h3>Your Work Details</h3>
      <div className="partner__work__details">
        <div>
          <label class="custom-file-upload">
            <input type="file" />
            <FileUploadOutlinedIcon /> Upload Your Image
          </label>
          <div className="partner__work__details__images">
            <h4>Upload Your Images</h4>
            <label class="custom-file-upload">
              <input type="file" />
              <FileUploadOutlinedIcon /> Upload your image (Front)
            </label>
            <label class="custom-file-upload">
              <input type="file" />
              <FileUploadOutlinedIcon /> Upload your image (Back)
            </label>
          </div>
        </div>
        <div>
          <div>
            <h4>Select Your service</h4>
            <p>You can select multiple services</p>
          </div>
          <div className="services__inputs">
            <div className="services__input">
              <input type="radio" name="" id="" />
              <p>Decoration</p>
            </div>
            <div className="services__input">
              <input type="radio" name="" id="" />
              <p>Photography</p>
            </div>
            <div className="services__input">
              <input type="radio" name="" id="" />
              <p>Food and Catering</p>
            </div>
            <div className="services__input">
              <input type="radio" name="" id="" />
              <p>Bridal Makeup</p>
            </div>
            <div className="services__input">
              <input type="radio" name="" id="" />
              <p>Mahendi Artist</p>
            </div>
            <div className="services__input">
              <input type="radio" name="" id="" />
              <p>Makeup Artist</p>
            </div>
            <div className="services__input">
              <input type="radio" name="" id="" />
              <p>Entertainment</p>
            </div>
            <div className="services__input">
              <input type="radio" name="" id="" />
              <p>Others</p>
            </div>
          </div>
        </div>
      </div>

      <h3>Your Work Images</h3>
      <div className="work__images">
        <div>
          <label class="custom-file-upload">
            <input type="file" />
            <FileUploadOutlinedIcon /> Upload your image
          </label>
          <label class="custom-file-upload">
            <input type="file" />
            <FileUploadOutlinedIcon /> Upload your image
          </label>
        </div>
        <div>
          <label class="custom-file-upload">
            <input type="file" />
            <FileUploadOutlinedIcon /> Upload your image
          </label>
          <label class="custom-file-upload">
            <input type="file" />
            <FileUploadOutlinedIcon /> Upload your image
          </label>
        </div>
      </div>
      <h3>Upload Your video</h3>
      <div className="work__videos">
        <label class="custom-file-upload">
          <input type="file" />
          <FileUploadOutlinedIcon /> Upload your video
        </label>
        <label class="custom-file-upload">
          <input type="file" />
          <FileUploadOutlinedIcon /> Upload your video
        </label>
      </div>
      <p>Or</p>
      <div className="work__others">
        <p>Share your drive/other link here</p>
        <label class="custom-file-upload">
          <input type="file" />
          Custom Upload
        </label>
      </div>

      <h3>Your Service Area</h3>
      <div className="service__area__inputs">
        <div className="service__area__input">
          <input type="radio" name="service__area__input" id="" />
          <p>PAN India</p>
        </div>
        <div className="service__area__input">
          <input type="radio" name="service__area__input" id="" />
          <p>Pune, Maharastra</p>
        </div>
      </div>
      <div className="partner__agreement">
        <input type="checkbox" name="agreement" id="" />
        <p>
          By filling this form, hereby you are consenting meetup to use your
          portfolio/photographs for marketing and promotional prposes
          irrespective of the medium.
        </p>
      </div>

      <button>Submit</button>
    </div>
  );
};

export default PartnerCommunity;
