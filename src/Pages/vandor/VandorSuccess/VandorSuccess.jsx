import React from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./VandorSuccess.css";

const VandorSignIn = () => {
  const history = useNavigate();
  return (
    <>
      <div>
        <div className="row d-flex justify-content-evenly py-4">
          <div className="left_div col-5 d-xl-flex d-lg-flex d-md-flex d-sm-none d-none">
            <div className="px-4">
              <div className="left_div_mainText">
                Let us help you with your business
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper ac commodo
                maecenas sit ultrices Lorem ipsum dolor sit amet consectetur.
                Ullamcorper ac commodo maecenas sit ultrices.
              </div>
            </div>
          </div>
          <div className="col-5 py-5">
            <div className="Success_Right_div">
              <div className="right_div_mainText py-4">Success!</div>
              <div className="DoneText">
                Your Password was changed successfully!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VandorSignIn;
