import React from "react";
import grp from "../../Assets/Download/grp.png";
import android from "../../Assets/Download/android.png";
import ios from "../../Assets/Download/apple.png";
import phone2 from "../../Assets/Download/phone.png";
import "./Download.css";

const Download = () => {
  return (
    <div className="download">
      <div className="download__information">
        <h3>In search of life partner?</h3>
        <h2>
          Download <span>The</span>
          <br />
          Meet Up App
        </h2>

        <div className="download__buttons">
          <div className="download__button">
            <img src={android} className="download__logo" alt="" />
            <div className="download__button__content">
              <span>GET IT ON</span>
              <p>Google Playstore</p>
            </div>
          </div>
          <div className="download__button">
            <img src={ios} className="download__logo" alt="" />
            <div className="download__button__content">
              <span>GET IT ON</span>
              <p>App Store</p>
            </div>
          </div>
        </div>
      </div>
      <div className="download__images">
        <img src={grp} className="grp" alt="" />
        <img src={phone2} className="phone1" alt="" />
      </div>
    </div>
  );
};

export default Download;
