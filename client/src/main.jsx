import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../src/index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import workoutReducers from "./reducers/reducerWorkout";

const store = configureStore({
  reducer: {
    workouts: workoutReducers,
  },
});
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
