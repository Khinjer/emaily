import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore , applyMiddleware } from 'redux';
import { Provider } from "react-redux";


import App from "./components/App";
import reducers from "./reducers";
import "./index.css";

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
