import React from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./VandorForgotPassEmail.css";

const VandorForgotPassEmail = () => {
  const history = useNavigate();
  return (
    <>
      <div className="row d-flex justify-content-evenly py-4 w-100">
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
          <div>
            <div className="right_div_mainText py-4">Forgot Password?</div>
            <div className="emailText">
              Don’t worry! It happens. Please enter the Email/Phone no.
              associated with your account
            </div>
            <div>
              <Form.Text id="passwordHelpBlock" muted>
                Email/Phone no.:
              </Form.Text>
              <input type="text" />
            </div>
            <div
              className="VandorLogInBtn mx-auto my-5"
              onClick={() => history("/vandor/passwordreset/otp")}
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VandorForgotPassEmail;
