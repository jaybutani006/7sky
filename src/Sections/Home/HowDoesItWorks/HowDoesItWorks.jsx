import React from "react";
import "./HowDoesItWorks.css";
import Carousel from "../Carousel/Carousel";
import ImgCarousel from "../ImgCarousel/ImgCarousel";

const HowDoesItWorks = () => {
  return (
    <div className="howdoesitworks">
      <h2>How does it work?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        <br />
        et dolore magna aliqua.
        <br />
        sed do eiusmod tempor incididunt ut labore
      </p>
      <ImgCarousel />
    </div>
  );
};

export default HowDoesItWorks;
