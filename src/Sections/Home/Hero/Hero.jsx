import React from "react";
import brain from "../../../Assets/Hero/brain.png";
import members from "../../../Assets/Hero/members.png";
import smile from "../../../Assets/Hero/smile.png";
import pizza from "../../../Assets/Hero/pizza.png";
import message from "../../../Assets/Hero/message.png";
import img1 from "../../../Assets/Hero/img1.jpg";
import img2 from "../../../Assets/Hero/img2.jpg";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__intro">
        <h3>Find Your Love</h3>
        <h2 className="hero__h2">By being</h2>
        <h1>YOURSELF</h1>

        <div className="hero__groups">
          <div className="hero__group">
            <img src={brain} alt="" />
            <p>Smart AI</p>
          </div>
          <div className="hero__group">
            <img src={members} alt="" />
            <p>10K+ Members</p>
          </div>
          <div className="hero__group">
            <img src={smile} alt="" />
            <p>Perfect Match</p>
          </div>
        </div>
        <div className="hero__logo__images">
          <img src={pizza} alt="" className="hero__pizza" />
          <img src={message} alt="" className="hero__message" />
        </div>
      </div>
      <div className="hero__images">
        <div className="image__wrapper">
          <div className="blue hero__box">
            <img src={img1} alt="" />
            <h3 className="hero__img__tag">Find Your Love</h3>
          </div>
          <div className="pink hero__box">
            <img src={img2} alt="" />
            <h3 className="hero__img__tag">Meet People</h3>
          </div>
          <div className="dark_pink hero__box">
            <img src={img2} alt="" />
            <h3 className="hero__img__tag">Made With Love</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
