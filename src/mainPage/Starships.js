import Header from "../commons/Header/Header";
import Footer from "../commons/Footer/Footer";
import { Card } from "react-bootstrap";
import "./components.css";

function Starships({ data }) {
  return (
    <>
      <Header />
      <h1 className="pplHeader">Starships</h1>
      <div className="pplDiv">
      {data.map((starships, i) => {
        return (
          <Card className="pplCard" style={{ width: "18rem" }} key={i}>
            <Card.Body>
              <Card.Title>{starships.name}</Card.Title>
              <Card.Text>
              Please click to reveal information about <b>{starships.name} starship</b>
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

export default Starships;
