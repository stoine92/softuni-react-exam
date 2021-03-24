import "./mainLogin.css";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../commons/Header/Header";
import Footer from "../commons/Footer/Footer";

const MainLoginPage = (props) => {
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const {email, password} = e.target;
  //   console.log(email.value);
  //   console.log(password.value);
  // };

  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <div className="login-form">
      <Header />
      <Form
        // onSubmit={submitHandler}
        style={{
          width: "20rem",
          margin: "0 auto",
          marginTop: "100px",
          padding: "40px 25px 40px 25px",
          backgroundColor: "#222",
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@email.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleLogin}>
          Login
        </Button>
        <Link className="regClass" to="/login-register/MainRegisterPage">
          / Register
        </Link>
      </Form>
      <Footer />
    </div>
  );
};

export default MainLoginPage;
