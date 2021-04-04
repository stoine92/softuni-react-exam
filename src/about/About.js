import { Jumbotron, Button } from "react-bootstrap";
import Header from "../commons/Header/Header";
import Footer from "../commons/Footer/Footer";


function About(props) {
  console.log(props.test)
  return (
    <>

      <Header />
      <Jumbotron>
        <h3>My mission</h3>
        <p>
          This is Stoyan's first project with ReactJS assigned by Softuni Sofia. The mission of this website is to provide some information for the Star Wars Movies and its content. In this site you can find useful information about heroes, planets, starships and the actual films. There also is a small quiz for the biggest fans to test their knowledge about the movies and give themselves a bit of a challenge ! 
        </p>
        <h3>My story</h3>
        <p>
          I started studying in Softuni Sofia in January 2020, as I applied for the free JavaScript basics course provided by them. As putting hard work into account I had the chance to continue with the Fundamentals, Advanced course and now with their ReactJS course. Throughout the journey I can proudly say I have learnt a new skill and hopefully soon can name myself as a FrontEnd Developer.
        </p>
        <h3>Contact</h3>
        <p>
          Stoyan Nikolov <br />
          Tel: +44 7843 138809 <br />
          Email: tical9212@gmail.com
        </p>
        
      </Jumbotron>
      <Footer />
    </>
  );
}

export default About;
