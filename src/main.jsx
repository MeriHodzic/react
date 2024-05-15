import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Component from "../../2.cas/Component.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Component />
    <Component />
    <Component />
  </React.StrictMode>
);
