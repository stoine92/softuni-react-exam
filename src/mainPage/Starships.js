import { Card } from "react-bootstrap";
import "./components.css";

function Starships({ data }) {
  return (
    <>
      <h1 className="pplHeader">Starships</h1>
      <div className="pplDiv">
      {data.map((starships, i) => {
        return (
          <Card className="pplCard" style={{ width: "18rem" }} key={i}>
            <Card.Body>
              <h3>{starships.name}</h3>
              
        <strong>Crew: <p>{starships.crew}</p></strong>
        <strong>Model: <p>{starships.model}</p></strong>
        <strong>Passengers: <p>{starships.passengers}</p></strong>
        <strong>Date created: <p>{starships.created}</p></strong>
        <strong>Capacity: <p>{starships.cargo_capacity}</p></strong>
        <strong>Consumables: <p>{starships.consumables}</p></strong>
    
            </Card.Body>
          </Card>
        );
      })}
      </div>
    </>
  );
}

export default Starships;
