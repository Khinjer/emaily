import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";

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
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        mb={5}
        textAlign="center"
        color="primary"
        textTransform="uppercase"
      >
        Create new Survey
      </Typography>
      <Box
        component="form"
        onSubmit={props.handleSubmit(props.handleNext)}
        sx={{ mt: 1, width: "60%" }}
      >
        <Stack direction="column" gap={5} mb={5}>
          {renderFields()}
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Link to="/surveys">
            <Button variant="contained" color="secondary" type="button">
              Cancel
            </Button>
          </Link>
          <Button variant="contained" type="submit">
            Next
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

const validate = (values) => {
  const errors = {};

  Fields.forEach((field) => {
    if (!values[field.name]) {
      errors[field.name] = `${field.label} is required`;
    }
  });

  const invalidEmails = validateEmails(values.recipients || "");

  if (values.recipients && invalidEmails.length > 0) {
    errors.recipients = `${invalidEmails.join(",")} these emails are invalid`;
  }

  return errors;
};

export default reduxForm({
  form: "surveyForm",
  destroyOnUnmount: false,
  validate,
})(SurveyForm);
