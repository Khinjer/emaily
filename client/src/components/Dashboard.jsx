import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/dashboard.css";
import CheckoutForm from "./Payment/CheckoutForm";

function Dashboard() {
  return (
    <>
      <div className="container">Dashboard</div>
      <div className="fixed-action-btn btn-survey">
        <Link to="/surveys/new" className="btn-floating btn-large teal">
        <i className="large material-icons">add</i>
        </Link>
      </div>
    </>
  );
}

export default Dashboard;
