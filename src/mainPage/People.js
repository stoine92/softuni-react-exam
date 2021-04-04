import Header from "../commons/Header/Header";
import Footer from "../commons/Footer/Footer";
import { Card } from "react-bootstrap";
import "./components.css";

function People({ data }) {
  return (
    <>
      <Header />
      <h1 className="pplHeader">Movie characters</h1>
      <div className="pplDiv">
        {data.map((people, i) => {
          return (
            <Card
              className="pplCard"
              style={{
                width: "18rem",
              }}
              key={i}
            >
              <Card.Body>
                <h2>{people.name}</h2>
                <strong>
                  Height: <p>{people.height}</p>
                </strong>
                <strong>
                  Weight: <p>{people.mass}</p>
                </strong>
                <strong>
                  Hair color: <p>{people.hair_color}</p>
                </strong>
                <strong>
                  Born: <p>{people.birth_year}</p>
                </strong>
                <strong>
                  Gender: <p>{people.gender}</p>
                </strong>
              </Card.Body>
            </Card>
          );
        })}

        <Footer />
      </div>
    </>
  );
}

export default People;
