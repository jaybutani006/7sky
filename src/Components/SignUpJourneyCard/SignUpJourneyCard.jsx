import React from "react";
import "./SignUpJourneyCard.css";
import Carousel from "react-material-ui-carousel";
import img1 from "../../Assets/signup/img1.png";
import { Paper, Button } from "@mui/material";

var items = [
  {
    name: "John Roe",
    message:
      "simply unbelievable! I am really very satisfied with people i had mate with.",
    occupation: "Freelancer",
    photo: img1,
  },
  {
    name: "John Roe",
    photo: img1,
    message:
      "simply unbelievable! I am really very satisfied with people i had mate with.",
    occupation: "Freelancer",
  },
  {
    name: "John Roe",
    photo: img1,
    message:
      "simply unbelievable! I am really very satisfied with people i had mate with.",
    occupation: "Freelancer",
  },
];

function Item({ message, photo, name, occupation }) {
  return (
    <div className="signupjourneycard__item">
      <p>{message}</p>
      <div className="signupjourneycard__item_profile">
        <img src={photo} alt="" />
        <div>
          <h4>{name}</h4>
          <p>{occupation}</p>
        </div>
      </div>
    </div>
  );
}

const SignUpJourneyCard = () => {
  return (
    <div className="signupjourneycard">
      <h3>Meet Up</h3>
      <div>
        <h2>Start Your</h2>
        <h3>journey with us.</h3>
      </div>
      <div className="signupjourneycard__carousel_div">
        <p>Discover the world’s best communityfor youngers.</p>
        <Carousel>
          {items.map((item, i) => (
            <Item
              key={i}
              message={item.message}
              photo={item.photo}
              name={item.name}
              occupation={item.occupation}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SignUpJourneyCard;
