import React, { useState } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyReview from "./SurveyReview";
import Loader from "../Loader";
import { Box } from "@mui/material";

function SurveyNew() {
  const [showReview, setShowReview] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

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
    <Box>
      {renderContent()}
    </Box>
  );
}

export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
