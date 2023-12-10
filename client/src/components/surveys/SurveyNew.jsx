import React, { useState } from "react";
import axios from "axios";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyReview from "./SurveyReview";
import Loader from "../Loader";

function SurveyNew() {
  const [showReview, setShowReview] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const res = await axios.post("/api/survey", values);
    } catch (err) {
      console.log(err);
    }
  };

  const renderContent = () =>{
    if(showReview){
      return    <SurveyReview
      handleShowLoader={() => {setShowLoader(true); setShowReview(false);}}
      handleBack={() => setShowReview(false)}
    />
    }
      
    if(showLoader){
      return <Loader/>;
    }else{
      return <SurveyForm handleNext={() => setShowReview(true)} />;
    }
    }

  return (
    <div className="container">
      {renderContent()}
    </div>
  );
}

export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
