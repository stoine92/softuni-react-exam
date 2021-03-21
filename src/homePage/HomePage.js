import Header from '../commons/Header/Header';
import Footer from '../commons/Footer/Footer';
import { Carousel } from 'react-bootstrap';



function HomePage () {
    return (
        <>
        <Header />
        <Carousel>
  <Carousel.Item interval={30000} style={{
      width: '30rem',
      margin: '50px 0px 50px 450px',
  }}>
    <img
      className="d-block w-100"
      src="https://i.insider.com/5d939b852e22af3f020abf3d?width=1136&format=jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item >
  <Carousel.Item interval={50000} style={{
      width: '30rem',
      margin: '50px 0px 50px 450px',
  }}>
    <img
      className="d-block w-100"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-in-order-resize-1585339521.jpg?crop=1.00xw:0.752xh;0,0.106xh&resize=1200:*"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{
      width: '30rem',
      margin: '50px 0px 50px 450px',
  }}>
    <img
      className="d-block w-100"
      src="https://media.wired.com/photos/5dfbd908d3b6cd00083b529f/1:1/w_1280,h_1280,c_limit/Cul-starwars-EP9-FF-001686.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <Footer />
        </>
    )
}

export default HomePage;