import Header from "../commons/Header/Header";
import Footer from "../commons/Footer/Footer";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MainRegisterPage = () => {
  
  const onSubmitForm = (event) => {
    event.preventDefault();
    const {email, password, rePassword} = event.target;
      
  };
  
    return (
      <div className="login-form">
        <Header />
        <Form 
        onSubmit={onSubmitForm}
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
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Repeat password:</Form.Label>
            <Form.Control type="password" placeholder="Re-password" name="rePassword" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <Link className="regClass" to="/login-register/MainLoginPage">
            / Login
          </Link>
        </Form>
        <Footer />
      </div>
    );
  }


export default MainRegisterPage;
