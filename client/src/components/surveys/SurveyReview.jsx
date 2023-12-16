import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { useHistory } from "react-router-dom";
import {
  Box,
  Card,
  Typography,
  CardContent,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import { Check, Send } from "@mui/icons-material";

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
          <Box>
            <Typography
              key={i}
              textTransform="uppercase"
              color="primary"
              variant="h6"
              gutterBottom
            >
              <Check color="secondary" sx={{ marginRight: 2 }} /> {value} :
              <Typography
                ml={5}
                key={i}
                variant="body2"
                component="span"
                color="black"
                gutterBottom
              >
                {props.form.surveyForm.values[value]}
              </Typography>
            </Typography>
            <Divider />
          </Box>
        );
        i++;
      }
      setContent(content);
    }
  }, [props]);

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Typography
        variant="h2"
        color="secondary"
        textAlign="center"
        gutterBottom
        mt={5}
      >
        Survey Review
      </Typography>

      <Card
        elevation={3}
        sx={{
          borderRadius: 5,
          marginY: 5,
          width: "70%",
          paddingY: 4,
          paddingX: 1,
        }}
      >
        <CardContent>{content}</CardContent>
      </Card>

      <Stack direction="row" justifyContent="space-between" width="50%">
        <Button
          onClick={props.handleBack}
          variant="contained"
          color="secondary"
        >
          back
        </Button>
        <Button
          onClick={() => {
            props.submitSurvey(values, history);
            props.handleShowLoader();
          }}
          variant="contained"
          endIcon={<Send />}
        >
          Send
        </Button>
      </Stack>
    </Box>
  );
}

const mapStateToProps = ({ form }) => {
  return { form };
};

SurveyReview = connect(mapStateToProps, actions)(SurveyReview);

export default SurveyReview;
