import {Carousel, Button } from "react-bootstrap";
import "./homePage.css";
import {Link} from 'react-router-dom';

function HomePage() {

  return (
    <>
      <Carousel fade> 
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1459876947801-8879713c9b47?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Exclusive content</h3>
      <p>Information about the most popular characters.</p>
    <Link className="carrouselButton" to="/login/Login" >Sign up today</Link>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1483706571191-85c0c76b1947?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Hidden features and info</h3>
      <p>Shock all your friends with the knolwedge you have.</p>
      <Link className="carrouselButton" to="/login/Login" >Sign up today</Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1592435468595-ab8dd76cd754?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1644&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>True Star Wars fan platform</h3>
      <p>For everyone who is one with the forse and the forse is one with him</p>
      <Link className="carrouselButton" to="/login/Login" >Sign up today</Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </>
  );
}

export default HomePage;
