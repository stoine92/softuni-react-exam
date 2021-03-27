import React, { useState, useEffect } from "react";
import fire from "./fire";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// import Home from "./home/Home";
import HomePage from "./homePage/HomePage";
// import UnderAge from "./home/underAge/UnderAge";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./about/About";
import Login from "./login/Login";
import MainPage from './mainPage/MainPage'

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
     
      {user ? (
        <MainPage handleLogout={handleLogout} />
      ) : (
      <Switch>
        {/* <Route path="/" exact component={HomePage} /> */}
        <Route path="/" exact component={HomePage} />
        <Route path="/login/Login" component={Login} />
        <Route path="/homePage/HomePage" component={HomePage} />
        <Route path="/about/About" component={About} />
      </Switch> 
      )}
      
    </div>
  );
}

export default App;
