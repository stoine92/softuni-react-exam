import Header from "../commons/Header/Header";
import Footer from "../commons/Footer/Footer";
import { Card } from "react-bootstrap";
import "./components.css";

function Planets({ data }) {
  return (
    <>
      <Header />
      <h1 className="pplHeader">Planets</h1>
      <div className="pplDiv">
      {data.map((planets, i) => {
        return (
          <Card className="pplCard" style={{ width: "18rem" }} key={i}>
            <Card.Body>
              <Card.Title>{planets.name}</Card.Title>
              <Card.Text>
              Please click to reveal information about planet <b>{planets.name}</b>
              </Card.Text>
              <Card.Link href="#">Continue</Card.Link>
              <Card.Link href="#">Go back</Card.Link>
            </Card.Body>
          </Card>
        );
      })}

      <Footer />
      </div>
    </>
  );
}

export default Planets;
