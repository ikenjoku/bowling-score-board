import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppStateProvider } from "./context";
import "./index.css";

ReactDOM.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>,
  document.getElementById("root")
);
