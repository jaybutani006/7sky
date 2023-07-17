import React from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VandorPasswordReset = () => {
  const history = useNavigate();

  const popup = () => {
    toast.success("Password change succesfully");
    setTimeout(() => {
      history("/vandor/signin");
    }, 6500);
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
            <div className="right_div_mainText py-4">Log In</div>
            <div>
              <Form.Text id="passwordHelpBlock" muted>
                New Password:
              </Form.Text>
              <input type="text" />
            </div>
            <div className="py-5">
              <Form.Text id="passwordHelpBlock" muted>
                Confirm Password:
              </Form.Text>
              <input type="text" />
            </div>
            <div className="VandorLogInBtn mx-auto my-5" onClick={popup}>
              Reset
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

export default VandorPasswordReset;
