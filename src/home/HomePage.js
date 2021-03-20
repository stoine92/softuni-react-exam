import React from "react";
import "./homePage.css";
import { Route, Switch } from "react-router-dom";
import UnderAge from "./underAge/UnderAge";

function HomePage() {
  return (
    <div className="main">
      <h1 className="main-h1">Star Wars fanpage</h1>
      <div className="wrapper">
        <p className="main-p">Please verify your age: </p>
        <a href="#">I declare, that I am 16 years or older</a>
        <a href="#">I am under 16 years of age</a>
      </div>
    </div>
  );
}

export default HomePage;
