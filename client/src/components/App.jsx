import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { useEffect } from "react";
import "../index.css";

import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";

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
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default connect(null, actions)(App);
