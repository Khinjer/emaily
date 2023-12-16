import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import LoginWithGoogleBtn from "./LoginWithGoogleBTN";

function Landing({ auth }) {
  const history = useHistory();


  if(auth){
    history.push('/surveys');  
  }

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        gap: 10,
        height: {
          sm: "auto",
          md: "80vh",
        },
        mb: 5,
      }}
    >
      <Container maxWidth="sm" flex={3}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Emaîly
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Easy and fast way to Get feedback from your users. Don't waste time
          Sign up , add credit and start sending emails to your clients!
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <LoginWithGoogleBtn />
        </Stack>
      </Container>
      <Box
        elevation={3}
        sx={{
          flex: {
            xs: 6,
            lg: 3,
          },
        }}
      >
        <Box
          component="img"
          sx={{
            width: {
              xs: 400,
              sm: 500,
              md: 600,
            },
            borderRadius: 5,
          }}
          src="../../public/using_laptop.jpg"
          alt=""
        />
      </Box>
    </Box>
  );
}

const mapsStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapsStateToProps, null)(Landing);
