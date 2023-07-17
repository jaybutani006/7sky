import React, { useState } from "react";
import img1 from "../../../Assets/imgcarousel/img1.png";
import img2 from "../../../Assets/imgcarousel/img2.png";
import "./ImgCarousel.css";

import leftbtn from "../../../Assets/left.png";
import rightbtn from "../../../Assets/right.png";
import ImgCarouselElement from "./ImgCarouselElement/ImgCarouselElement";
const ImgCarousel = () => {
  const [current, setCurrent] = useState(0);
  const imgArray = [img1, img2];
  const contentArray = [
    {
      heading: "Talk about yourself",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      heading: "Fix the Date & Blush",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];

  const handleNext = () => {
    if (current + 1 < 2) {
      setCurrent(current + 1);
    }
    let box = document.querySelector(".imgcarousel__content__wrapper");
    box.scrollLeft = box.scrollLeft + box.clientWidth;
  };

  const handlePref = () => {
    if (current - 1 >= 0) {
      setCurrent(current - 1);
    }
    let box = document.querySelector(".imgcarousel__content__wrapper");
    box.scrollLeft = box.scrollLeft - box.clientWidth;
  };

  return (
    <div className="imgcarousel">
      <div className="imgcarousel__images__wrapper">
        <div className="imgcarousel__images">
          <img className="carousel__img" src={imgArray[current]} alt="" />
          <img
            className="imgcarousel_btn imgcarousel_btn_left"
            src={leftbtn}
            onClick={handlePref}
            alt=""
          />
          <img
            className="imgcarousel_btn imgcarousel_btn_right"
            src={rightbtn}
            onClick={handleNext}
            alt=""
          />
        </div>
      </div>
      <div className="imgcarousel__content__wrapper">
        {contentArray.map((e) => (
          <div className="imgcarousel__content">
            <h2>{e.heading}</h2>
            <p>{e.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgCarousel;
