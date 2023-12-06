import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Header(props) {
  const renderContent = () => {
    switch (props.auth) {
      case null:
        return "Loading...";
      case false:
        return (
          <li>
            <a
              className="waves-effect waves-light btn pulse"
              href="/auth/google"
            >
              Login With Google
            </a>
          </li>
        );
      default:
        return (
          <>
          <li>
          <Link
            to="/checkout"
            className="checkout-btn btn waves-effect waves-light black"
          >
            Add Credit
          </Link>
          </li>
            <li>
              <span className="credit badge orange white-text">
                Credit : {props.auth.credit}
              </span>
            </li>
            <li>
              <a className="logout" href="/auth/logout">
                <i className="material-icons left">power_settings_new</i>Logout
              </a>
            </li>
          </>
        );
    }
  };

  return (
    <header>
      <nav className="teal" style={{ fontSize: "24px" }}>
        <div className="nav-wrapper  container">
          <Link to={props.auth ? "/surveys" : "/"} className="left brand-logo">
            Emaîly
          </Link>
          <ul
            className="right"
            style={{ display: "flex", alignItems: "center" }}
          >
            {renderContent()}
          </ul>
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
