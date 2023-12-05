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
          <li>
            <a className="" href="/auth/logout">
              <i class="material-icons left">power_settings_new</i>Logout
            </a>
          </li>
        );
    }
  };

  return (
    <header>
      <nav className="teal">
        <div className="nav-wrapper  container">
          <Link to={props.auth ? "/surveys" : "/"} className="left brand-logo">
            Emaîly
          </Link>
          <ul className="right">{renderContent()}</ul>
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
