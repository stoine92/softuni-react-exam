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
            <Nav.Link><Link className="nav" to="/mainPage/MainPage">Home</Link></Nav.Link>
          ) : (
            <Nav.Link><Link className="nav" to="/homePage/HomePage">Home</Link></Nav.Link>
          )}

          <Nav.Link><Link className="nav" to="/about/About">About</Link></Nav.Link>
          {isAuthenticated ? (
            <>
            <Nav.Link><Link className="nav" to="/quizFolder/Quiz">QnA</Link></Nav.Link>
            </>
          ) : (
            <></>
          )}
          <Nav.Link> | </Nav.Link>
          {isAuthenticated ? (
            <Nav.Link>
              <Link className="nav" onClick={handleLogout} to="/" >Logout</Link>
              
            </Nav.Link>
          ) : (
            <Nav.Link><Link className="nav" to="/login/Login">Login / Register</Link></Nav.Link>
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
