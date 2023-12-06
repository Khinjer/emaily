import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { useEffect } from "react";
import "../index.css";

import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import Stripe from "./Payment/Stripe";

function App(props) {
  useEffect(() => {
    props.fetchUser();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/surveys">surveys</Route>
        <Stripe />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default connect(null, actions)(App);
