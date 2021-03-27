import React, { useState, useEffect } from "react";
import fire from "./fire";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MainLoginPage from "./login-register/MainLoginPage";
import MainRegisterPage from "./login-register/MainRegisterPage";
// import Home from "./home/Home";
import HomePage from "./homePage/HomePage";
// import UnderAge from "./home/underAge/UnderAge";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./about/About";
import Login from "./login/Login";
import Hero from './login/loginPics/Hero'

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

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

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      {/* <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/homePage/HomePage" component={HomePage} />
        <Route
          path="/login-register/MainLoginPage"
          exact
          component={MainLoginPage}
        />
        <Route
          path="/login-register/MainRegisterPage"
          exact
          component={MainRegisterPage}
        />

        <Route path="/UnderAge/:name" component={UnderAge} />
        <Route path="/about/About" component={About} />
      </Switch> */}
      {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
        <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
      )}
    </div>
  );
}

export default App;
