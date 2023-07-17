import React from "react";
import "./Footer.css";
import android from "../../Assets/Download/android.png";
import ios from "../../Assets/Download/apple.png";
import facebook from "../../Assets/footer/facebook.png";
import insta from "../../Assets/footer/insta.png";
import linkedin from "../../Assets/footer/linkedin.png";
import youtube from "../../Assets/footer/youtube.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <h3 className="footer_h3">Meet Up</h3>
        <Link to="/career">Career</Link>
        <Link to="/comunity-guidelines">Comunity guidelines</Link>
        <Link to="/terms-and-conditions">Terms and conditions</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/faqs">Frequently Asked Questions</Link>
        <Link to="/contactus">Contact us</Link>
        <Link to="/partner-community">Partner Community</Link>
      </div>
      <div className="footer__contact_us">
        <h3 className="footer_h3">Contact Us</h3>
        <a href="mailto:email@example.com">feedback@meetup.com</a>
        <a href="tel:+918596223102">+918596223102</a>

        <div className="footer__button">
          <img src={android} className="download__logo" alt="" />
          <div className="download__button__content">
            <span>GET IT ON</span>
            <p>Google Playstore</p>
          </div>
        </div>
      </div>
      <div className="footer__connect-us">
        <h3 className="footer_h3">Connect Us On</h3>
        <div className="connect__linkes">
          <img className="footer__logo" src={facebook} alt="" />
          <img className="footer__logo" src={insta} alt="" />
          <img className="footer__logo" src={linkedin} alt="" />
          <img className="footer__logo" src={youtube} alt="" />
        </div>
        <div className="footer__button">
          <img src={ios} className="download__logo" alt="" />
          <div className="download__button__content">
            <span>GET IT ON</span>
            <p>App Store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
