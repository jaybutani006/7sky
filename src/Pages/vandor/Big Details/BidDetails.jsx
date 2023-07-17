import React from "react";
import "./BidDetails.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const BidDetails = () => {
  return (
    <>
      <div className="container mt-5">
        <div style={{ fontSize: "32px", fontWeight: "600" }}>Bid Details</div>
        <div className="row py-4">
          <div className="col-lg-6 d-flex">
            <span className="pe-5 BigDetailsDate">Date:</span>
            <span className="col-9">
              <input
                type="text"
                name="contact_no"
                placeholder="Alternate no / Manager no"
              />
            </span>
          </div>
          <div className="col-lg-6 d-flex pt-lg-0 pt-5">
            <span className="pe-lg-5 pe-md-0 BigDetailsDate">
              Requested by:
            </span>
            <span className="col-8 ms-3">
              <input
                type="text"
                name="contact_no"
                placeholder="Alternate no / Manager no"
              />
            </span>
          </div>
        </div>

        <div className="py-5">
          <div className="BigDetailsDate pb-3">Services Requested</div>
          <div className="d-flex justify-content-between w-50">
            <div>
              <input type="radio" name="1" />
              <span className="px-3">Mehandi</span>
            </div>
            <div>
              <input type="radio" name="1" />
              <span className="px-3">Salon</span>
            </div>
            <div>
              <input type="radio" name="1" />
              <span className="px-3">venue</span>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-between py-4">
          <div className="col-md-5">
            <div className="BigDetailsDate py-1">Vendor Names:</div>
            <div className="py-2">
              <input type="text" name="contact_no" placeholder="vendor 1" />
            </div>
            <div className="py-2">
              <input type="text" name="contact_no" placeholder="vendor 2" />
            </div>
            <div className="py-2">
              <input type="text" name="contact_no" placeholder="vendor 3" />
            </div>
            <div className="BigDetailsDate pt-5 pb-2">
              Vendor Bid(Accepred):
            </div>
            <div>
              <input type="text" name="contact_no" />
            </div>
          </div>
          <div className="col-md-5 pt-sm-5 pt-md-0 pt-lg-0">
            <div className="BigDetailsDate py-1">Amount of Bid:</div>
            <div className="py-2">
              <input type="text" name="contact_no" placeholder="Service 1" />
            </div>
            <div className="py-2">
              <input type="text" name="contact_no" placeholder="Service 2" />
            </div>
            <div className="py-2">
              <input type="text" name="contact_no" placeholder="Service 3" />
            </div>
            <div className="BigDetailsDate pt-5 pb-3">Amount of the Bid:</div>
            <div>
              <input type="text" name="contact_no" placeholder="Rs." />
            </div>
          </div>
        </div>
        <div>
          <div className="BigDetailsDate">Terms and Conditions</div>
          <div className="pt-3 pb-5">
            <CKEditor
              editor={ClassicEditor}
              data="<p>Share the necessary information , terms and condition that the client is supposed to know.</p>"
            />
          </div>
        </div>
        <div className="BigDetailsDate">Other attachments</div>
        <div className="attachments">Paste your work here</div>
        <div className="VandorLogInBtn mx-auto my-5">Submit</div>
      </div>
    </>
  );
};

export default BidDetails;
