import fire from "../../fire";
import IsLoggedInUser from "../../store/store";
import { useContext } from "react";
import "./header.css";
import { Navbar, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  
  const handleLogout = () => {
    fire.auth().signOut();
  };

  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInUser);
  
  return (
    
    <>
      <Navbar
        bg="dark"
        variant="dark"
        style={{
          marginBottom: "-40px",
        }}
      >
        <Link className="homeBtn"  onClick={handleLogout} to="/">
          SW
        </Link>

        <Nav className="mr-auto">
          {isLoggedIn ? (<Nav.Link href="/mainPage/MainPage">Home</Nav.Link>) : (<Nav.Link href="/homePage/HomePage">Home</Nav.Link>)}
          
          <Nav.Link href="/about/About">About</Nav.Link>
          <Nav.Link to="#pricing">FAQ</Nav.Link>
          <Nav.Link to="#"> | </Nav.Link>
          {isLoggedIn ? (
            <Nav.Link onClick={handleLogout} href="/login/Login">Logout</Nav.Link>
          ) : (
            <Nav.Link href="/login/Login">Login</Nav.Link>
          )}
        </Nav>
        {isLoggedIn ? (
          <Form inline>
            <p className="welcome">Welcome</p>
          </Form>
        ) : (
          <Form inline>
            <p className="welcome">Please sign in</p>
          </Form>
        )}
      </Navbar>
      <br />
    </>
  );
}

export default Header;
