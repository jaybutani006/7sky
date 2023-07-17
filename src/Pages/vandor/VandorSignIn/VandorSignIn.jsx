import React, { useState } from "react";
import "./VandorSignIn.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VandorSignIn = () => {
  const history = useNavigate();
  const [logInfo, setLogInfo] = useState({
    contact_no: "",
  });

  const txt = (e) => {
    const { name, value } = e.target;
    setLogInfo({ ...logInfo, [name]: value });
  };
  console.log(logInfo);

  const VandorLogin = () => {
    const { contact_no } = logInfo;

    if (contact_no.length == 10) {
      localStorage.setItem("contact_no", logInfo);
      history("/vandor/passwordreset/otp");
    } else {
      toast.error("Enter Valid Phone Number");
    }
  };

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
            <div className="right_div_mainText py-3">Log In</div>
            <div>
              <Form.Text id="passwordHelpBlock" muted>
                Email/Phone no.:
              </Form.Text>
              <input type="text" name="contact_no" onChange={txt} />
            </div>
            {/* <div className="py-4">
              <Form.Text id="passwordHelpBlock" muted>
                Password:
              </Form.Text>
              <input type="text" />
            </div> */}
            <div className="VandorLogInBtn mx-auto my-5" onClick={VandorLogin}>
              Log in
            </div>
            <div className="d-flex justify-content-evenly">
              <div>
                <span
                  style={{
                    color: "grey",
                    fontWeight: "400",
                    paddingRight: "7px",
                  }}
                >
                  New User?
                </span>
                <span className="VandorForgotPass">Sign Up</span>
              </div>
              {/* <div
                className="VandorForgotPass"
                onClick={() => history("/vandor/passwordreset/e-mail")}
              >
                Forgot Password
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </>
  );
};

export default VandorSignIn;
