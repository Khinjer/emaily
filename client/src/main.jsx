import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import authReducer from "./slices/authSlice";

import App from "./components/App";
import "./index.css";

const store = configureStore({
  reducer: {
    auth : authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), 
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
