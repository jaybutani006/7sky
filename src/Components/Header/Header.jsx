import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "../../BASE_URL";

const Header = () => {
  const [name, setName] = useState("");
  const naviGATE = useNavigate();
  const token = localStorage.getItem("token");

  const getUset = async () => {
    const res = await fetch(`${BASE_URL}/api/profile/userdetails`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await res.json();
    console.log(data?.data?.UserDetails?.user_name);
    setName(data?.data?.UserDetails?.user_name);
  };
  console.log(name);

  useEffect(() => {
    getUset();
  }, []);
  return (
    <div className="header">
      <NavLink to="/profile" className="h2__link">
        <h2 className="header__h2">
          Meet
          <span>Up</span>
        </h2>
      </NavLink>
      <div className="header__links">
        <Link to="/">Home</Link>
        <Link to="/services">Our Services</Link>
        <Link to="/requests">Requests</Link>
        <Link to="/SelectPlan">Our Plans</Link>
        <Link to="/ContactUs">Contact Us</Link>

        {token ? (
          <p
            className="AfterLogheader__button"
            onClick={() => naviGATE("/userprofile")}
          >
            {name}
          </p>
        ) : (
          <p className="header__button" onClick={() => naviGATE("/login")}>
            Login
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
