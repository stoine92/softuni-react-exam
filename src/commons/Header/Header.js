import './header.css'
import { Navbar, Nav, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
  <Navbar bg="dark" variant="dark" style={{
    marginBottom: "-40px"
  }}>
    <Link className="homeBtn" to="/">SW</Link>
    <Nav className="mr-auto">
      <Nav.Link href="/homePage/HomePage">Home</Nav.Link>
      <Nav.Link href="/about/About">About</Nav.Link>
      <Nav.Link to="#pricing">FAQ</Nav.Link>
      <Nav.Link to="#pricing"> | </Nav.Link>
      <Nav.Link href="/login-register/MainLoginPage">Login</Nav.Link>
    </Nav>
    <Form inline>
      <p className="welcome">Welcome, stoine92@gmail.com </p>
    </Form>
  </Navbar>
  <br />
  
</>
  );
}

export default Header;
