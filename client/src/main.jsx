import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore , applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import {thunk} from 'redux-thunk';

import App from "./components/App";
import reducers from "./reducers";


const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
