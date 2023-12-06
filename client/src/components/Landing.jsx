import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <div className="container center-align">
        <h1 className="header center orange-text">Emaîly</h1>
        <div className="row center">
          <h5 className="header col s12 light">Get feedback from your users</h5>
        </div>
        <div className="row center">
          <Link
            to="/checkout"
            id="download-button"
            className="btn-large waves-effect waves-light orange"
          >
            Add Credit
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text">
                  <i className="material-icons">flash_on</i>
                </h2>
                <h5 className="center">Create unlimited compaigns</h5>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text">
                  <i className="material-icons">group</i>
                </h2>
                <h5 className="center">User Experience Focused</h5>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text">
                  <i className="material-icons">settings</i>
                </h2>
                <h5 className="center">Easy to use</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
