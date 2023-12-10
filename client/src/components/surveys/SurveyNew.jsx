import React, { useState } from "react";
import axios from "axios";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyReview from "./SurveyReview";

function SurveyNew() {
  const [showReview, setShowReview] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const res = await axios.post("/api/survey", values);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      {showReview ? (
        <SurveyReview
          //handleSubmit={handleSubmit}
          handleBack={() => setShowReview(false)}
        />
      ) : (
        <SurveyForm handleNext={() => setShowReview(true)} />
      )}
    </div>
  );
}

export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
