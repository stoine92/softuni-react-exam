import React, { useState, useEffect } from "react";
import fire from "../fire";
import Header from "../commons/Header/Header";
import Footer from "../commons/Footer/Footer";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MainRegisterPage = () => {
  // const {
  //   email,
  //   setEmail,
  //   password,
  //   setPassword,
  //   handleLogin,
  //   handleSignUp,
  //   hasAccount,
  //   setHasAccount,
  //   emailError,
  //   passwordError,
  // } = props;

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

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
    <div className="login-form">
      <Header />
      {/* <Form
        // onSubmit={onSubmitForm}
        style={{
          width: "20rem",
          margin: "0 auto",
          marginTop: "30px",
          padding: "10px 25px 15px 25px",
          backgroundColor: "#222",
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@email.com"
            name="email"
            defaultDalue={email}
            onClick={handleSignUp}

          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
           
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Repeat password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Re-password"
            name="rePassword"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <Link className="regClass" to="/login-register/MainLoginPage">
          / Login
        </Link>
      </Form> */}

<form className="login">
        <div className="loginContainer">
          <label>Username</label><br/>
          <input
            type="email"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <p className="errorMsg">{emailError}</p>
          <label>Password</label><br/>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            
              <>
              <button type="submit" onClick={handleSignUp}>Sign up</button>
              <p>Don't have an account ? <Link to="./MainLoginPage" >Sign in</Link></p>
              </>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default MainRegisterPage;
