import fire from "../../fire";
import "./header.css";
import { Navbar, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({ username, isAuthenticated, photo }) {
  const handleLogout = (e) => {
    fire.auth().signOut();
  };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        style={{
          marginBottom: "-40px",
        }}
      >
        <Link className="homeBtn" onClick={handleLogout} to="/">
          SW
        </Link>

        <Nav className="mr-auto">
          {isAuthenticated ? (
            <Nav.Link href="/mainPage/MainPage">Home</Nav.Link>
          ) : (
            <Nav.Link href="/homePage/HomePage">Home</Nav.Link>
          )}

          <Nav.Link href="/about/About">About</Nav.Link>
          {isAuthenticated ? (
            <>
            <Nav.Link href="/quizFolder/Quiz">QnA</Nav.Link>
            </>
          ) : (
            <></>
          )}
          <Nav.Link to="#"> | </Nav.Link>
          {isAuthenticated ? (
            <Nav.Link onClick={handleLogout} href="/login/Login">
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link href="/login/Login">Login / Register</Nav.Link>
          )}
        </Nav>
        {isAuthenticated ? (
          <Form inline>
            <Link to="/imgUpload/ImgUpload"><img className="avatar" src={photo} /></Link>
            <p className="welcome">Welcome {username}</p>
          </Form>
        ) : (
          <Form inline>
            <p className="welcome">Welcome guest</p>
          </Form>
        
        )}
      </Navbar>
      <br />
    </>
  );
}

export default Header;
