import React, { useState } from "react";
import "./CarouselCard.css";

import leftbtn from "../../Assets/left.png";
import rightbtn from "../../Assets/right.png";

const CarouselCard = ({
  active,
  cardno,
  btnpressnext,
  btnpressprev,
  logo,
  heading,
  content,
}) => {
  let classes = active == cardno ? "carousel__card active" : "carousel__card";
  return (
    <div className={classes}>
      <img className="card__logo" src={logo} />
      <h4>{heading}</h4>
      <p>{content}</p>

      {cardno == active + 1 ? (
        <>
          <img
            className="btn btn_left"
            src={leftbtn}
            onClick={btnpressprev}
            alt=""
          />
          <img
            className="btn btn_right"
            src={rightbtn}
            onClick={btnpressnext}
            alt=""
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default CarouselCard;
