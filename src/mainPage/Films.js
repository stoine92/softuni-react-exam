import Header from "../commons/Header/Header";
import Footer from "../commons/Footer/Footer";
import { Card } from "react-bootstrap";
import "./components.css";

function Films({ data }) {
  return (
    <>
      <Header />
      <h1 className="pplHeader">Films</h1>
      <div className="pplDiv">
        {data.map((films, i) => {
          return (
            <Card className="pplCard" style={{ width: "18rem" }} key={i}>
              <Card.Body>
                <h3>{films.title}</h3>
                <strong>Director: <p>{films.director}</p></strong>
                <strong>Producers: <p>{films.producer}</p></strong>
                <strong>Release date: <p>{films.release_date}</p></strong>
              </Card.Body>
            </Card>
          );
        })}
        <Footer />
      </div>
    </>
  );
}

export default Films;
