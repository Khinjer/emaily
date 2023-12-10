import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";


const Fields = [
  {
    label: "Survey Title",
    name: "title",
  },

  {
    label: "Subject Line",
    name: "subject",
  },

  {
    label: "Email Body",
    name: "body",
  },

  {
    label: "Recipients List",
    name: "recipients",
  },
];

function SurveyForm(props) {
  const renderFields = () => {
    return Fields.map((field) => (
      <Field
        key={field.name}
        type="text"
        label={field.label}
        name={field.name}
        component={SurveyField}
      />
    ));
  };

  return (
    <>
      <h2 className="center orange-text">Create new Survey</h2>
      <form style={{ marginTop: "30px" }} onSubmit={props.handleSubmit(props.handleNext)}>
        {renderFields()}
        <Link to="/surveys">
          <button
            className="btn red waves-effect waves-light left"
            type="button"
          >
            Cancel
            <i className="material-icons left">close</i>
          </button>
        </Link>
        <button
          //onClick={props.handleNext}
          className="btn waves-effect waves-light right"
          type="submit"
        >
          Next
          <i className="material-icons right">navigate_next</i>
        </button>
      </form>
    </>
  );
}

const validate = (values) => {
  const errors = {};

  Fields.forEach((field) => {
    if (!values[field.name]) {
      errors[field.name] = `${field.label} is required`;
    }
  });
  const invalidEmails = validateEmails(values.emails || "");
  if (values.emails && invalidEmails.length > 0) {
    errors.emails = `${invalidEmails.join(",")} these emails are invalid`;
  }

  return errors;
};

export default reduxForm({
  form: "surveyForm",
  destroyOnUnmount: false,
  validate,
})(SurveyForm);
