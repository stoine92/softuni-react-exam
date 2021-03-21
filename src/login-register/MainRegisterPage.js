import { Component } from "react";
import Header from "../commons/Header/Header";
import Footer from "../commons/Footer/Footer";
import { Link } from 'react-router-dom';
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class MainRegisterPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-form">
        <Header />
        <Form style={{
        width: '20rem',
        margin: '0 auto',
        marginTop: '30px',
        padding: '10px 25px 15px 25px',
       backgroundColor: "#222",
      }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="email" placeholder="email@email.com" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Repeat password:</Form.Label>
          <Form.Control type="password" placeholder="Re-password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <Link className ="regClass" to="/login-register/MainLoginPage">
           / Login
        </Link>
      </Form>
      <Footer />
      </div>
    );
  }
}

export default MainRegisterPage;
