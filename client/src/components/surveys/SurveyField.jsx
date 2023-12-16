import TextField from "@mui/material/TextField";
import { FormControl, FormHelperText } from "@mui/material";

export default function SurveyField({
  input,
  label,
  meta: { error, touched },
}) {
  return (
    <FormControl error={(touched && error)? true : false}  variant="standard">
      <TextField error={(touched && error)? true : false}  label={label} variant="outlined" {...input} fullWidth/>
      <FormHelperText id="component-error-text">
        {touched && error}
      </FormHelperText>
    </FormControl>
  );
}
