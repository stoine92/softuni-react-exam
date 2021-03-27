import fire from "../../fire";
import './header.css'
import { Navbar, Nav, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  const handleLogout = () => {
    fire.auth().signOut();
  };
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
      <Nav.Link to="#"> | </Nav.Link>
      <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
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
