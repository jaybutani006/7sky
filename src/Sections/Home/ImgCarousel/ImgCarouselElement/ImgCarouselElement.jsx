import React from "react";
import "../ImgCarousel.css";

const ImgCarouselElement = ({ heading, content }) => {
  return (
    <div className="imgcarousel__content">
      <h2>{heading}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ImgCarouselElement;
