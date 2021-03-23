import './header.css'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Link className="homeBtn" to="/">SW</Link>
    <Nav className="mr-auto">
      <Nav.Link href="/homePage/HomePage">Home</Nav.Link>
      <Nav.Link href="/about/About">About</Nav.Link>
      <Nav.Link to="#pricing">FAQ</Nav.Link>
      <Nav.Link to="#pricing"> | </Nav.Link>
      <Nav.Link href="/login-register/MainLoginPage">Login/Register</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  
</>
  );
}

export default Header;
