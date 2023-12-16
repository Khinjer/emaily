import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../index.css";

import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import Stripe from "./Payment/Stripe";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
function App({ fetchUser }) {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <Box display="flex" flexDirection="column">
      <BrowserRouter>
        <Header />
        <Container component="main" maxWidth="lg">
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/surveys" component={Dashboard} exact></Route>
          <Route path="/surveys/new" component={SurveyNew}></Route>
          <Elements stripe={stripePromise}>
            <Stripe />
          </Elements>
        </Container>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default connect(null, actions)(App);
