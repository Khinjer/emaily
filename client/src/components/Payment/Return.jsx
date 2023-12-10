import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";
import * as actions from "../../actions";

function Return(props) {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const sessionId = urlParams.get("session_id");

  useEffect(() => {
    const getSessionStatus = async () => {
      const res = await axios.get(
        `/stripe/session-status?session_id=${sessionId}`
      );

      setStatus(res.data.status);
      setCustomerEmail(res.data.customer_email);
      if (res.data.status === "complete") {
        props.fetchUser();
      }
    };

    getSessionStatus();
  }, []);

  if (status === "open") {
    return <Redirect to="/checkout" />;
  }

  if (status === "complete") {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    );
  }

  return null;
}

export default connect(null, actions)(Return);
