import Header from "../commons/Header/Header";
import Footer from "../commons/Footer/Footer";
import { Card } from "react-bootstrap";

function Starships({ data }) {
  return (
    <>
      <Header />
      <h1>Starships</h1>
      {data.map((starships, i) => {
        return (
          <Card style={{ width: "18rem" }} key={i}>
            <Card.Body>
              <Card.Title>{starships.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        );
      })}

      <Footer />
    </>
  );
}

export default Starships;