import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

function SurveysList(props) {
  const [surveys, setSurveys] = useState([]);


  useEffect(() => {
    getSurveys();
  }, [props])

  const getSurveys = async () => {
    await props.getSurveyList();
    setSurveys(props.surveys);
  };
  

  const renderContent = (surveysList) => {
    return surveysList.map((surveyItem) => {
      return (
        <div key={surveyItem._id}>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{surveyItem.title}</span>
              <p><span>Email body :</span> {surveyItem.body}</p>
            </div>
            <div className="card-action">
              <a href="#">YES: {surveyItem.yes}</a>
              <a href="#">NO: {surveyItem.no}</a>
              <span className="right white-text">Created At : {new Date(surveyItem.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h3 className="header">Surveys List</h3>
      {surveys && renderContent(surveys)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { surveys: state.surveys };
};

export default connect(mapStateToProps, actions)(SurveysList);
