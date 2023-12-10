import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { useHistory } from "react-router-dom";

function SurveyReview(props) {
  const history = useHistory();
  const [content, setContent] = useState(null);
  const [values, setValues] = useState(null); 

  useEffect(() => {
    if (props.form.surveyForm) {
    setValues(props.form.surveyForm.values);
      let content = [];
      let i = 0;
      for (let value in props.form.surveyForm.values) {
        content.push(
          <p key={i}>
            {value} : {props.form.surveyForm.values[value]}
          </p>
        );
        i++;
      }
      setContent(content);
    }
  }, [props]);

  return (
    <div className="container">
      <h2 className="orange-text center">SurveyReview</h2>
      <div style={{ marginTop: "50px" }}>{content}</div>
      <div style={{ marginTop: "50px" }}>
        <button
          onClick={props.handleBack}
          className="black btn-flat white-text left"
        >
          back
        </button>
        <button onClick={() => props.submitSurvey(values, history)} className="green btn-flat white-text right">
          Send
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({form}) => {
  return { form };
};

SurveyReview = connect(mapStateToProps, actions)(SurveyReview);

export default SurveyReview;
