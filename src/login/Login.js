import React, { useState, useEffect } from "react";
import fire from "../fire";
import "./loginStyles.css";
import HeaderNotSigned from "../commons/Header/HeaderNotSigned";
import Footer from "../commons/Footer/Footer";
import { Button } from "react-bootstrap";
const Login = () => {
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
    <div className="login-form">
      <HeaderNotSigned />
      <section className="login">
        <div className="loginContainer">
          <label>Username</label>
          <br />
          <input
            className="input"
            type="email"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p>{emailError}</p>
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            autoFocus
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <p>{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <Button variant="primary" onClick={handleSignUp}>
                  Sign in
                </Button>
                <p>
                  Don't have an account ?
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <Button variant="primary" onClick={handleSignUp}>
                  Sign up
                </Button>
                <p>
                  Have an account ?
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign in
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
