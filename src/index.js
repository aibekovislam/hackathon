import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import Footer from "./components/Footer"
import MyFooter from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
    <MyFooter />
  </BrowserRouter>
);
