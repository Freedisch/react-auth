import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { WorkoutContextProvider } from "./context/WorkoutContext";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WorkoutContextProvider>
      <App />
    </WorkoutContextProvider>
  </React.StrictMode>
);
