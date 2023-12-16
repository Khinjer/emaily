import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

function SurveysList(props) {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    getSurveys();
  }, [props]);

  const getSurveys = async () => {
    await props.getSurveyList();
    setSurveys(props.surveys);
  };

  const renderContent = (surveysList) => {
    return surveysList.map((surveyItem) => {
      return (
        <TableRow
          key={surveyItem._id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {surveyItem.title}
          </TableCell>
          <TableCell align="right">{surveyItem.subject}</TableCell>
          <TableCell align="right">{surveyItem.body}</TableCell>
          <TableCell align="right">{surveyItem.yes}</TableCell>
          <TableCell align="right">{surveyItem.no}</TableCell>
          <TableCell align="right">
            {new Date(surveyItem.createdAt).toLocaleDateString()}
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <Box sx={{ mt : 5}}>
      <Typography variant="h3" color="primary" gutterBottom>
        Surveys List
      </Typography>
      <TableContainer elevation={2} sx={{ borderRadius: 2 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "secondary.main" }}>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Subject</TableCell>
              <TableCell align="right">Body</TableCell>
              <TableCell align="right">Yes</TableCell>
              <TableCell align="right">NO</TableCell>
              <TableCell align="right">Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{surveys && renderContent(surveys)}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return { surveys: state.surveys };
};

export default connect(mapStateToProps, actions)(SurveysList);
