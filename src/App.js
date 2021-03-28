import React, { useState, useEffect } from "react";
import fire from "./fire";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import HomePage from "./homePage/HomePage";
import UnderAge from "./home/underAge/UnderAge";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./about/About";
import Login from "./login/Login";
import MainPage from "./mainPage/MainPage";
import isLoggedInUser from "./store/store";


function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userName) => {
        console.log(userName.user.email);
      })
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

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
        setIsLoggedIn(true);
      } else {
        setUser("");
        setIsLoggedIn(false);
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
    <isLoggedInUser.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login/Login">
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
            </Route>
            <Route path="/homePage/HomePage" component={HomePage} />
            <Route path="/homePage/HomePage" component={HomePage} />
            <Route path="/about/About" component={About}/>
            <Route path="/mainPage/MainPage" component={MainPage} />
            <Route path="/underAge/UnderAge" component={UnderAge} />
          </Switch>
        {/* )} */}
      </div>
    </isLoggedInUser.Provider>
  );
}

export default App;
