import { Card } from "react-bootstrap";
import "./components.css";

function Planets({ data }) {
  return (
    <>
     
      <h1 className="pplHeader">Planets</h1>
      <div className="pplDiv">
        {data.map((planets, i) => {
          return (
            <Card className="pplCard" style={{ width: "18rem" }} key={i}>
              <Card.Body>
                <h3>{planets.name}</h3>
                <strong>
                  Climate: <p>{planets.climate}</p>
                </strong>
                <strong>
                  Terrain: <p>{planets.terrain}</p>
                </strong>
                <strong>
                  Gravity strength: <p>{planets.gravity}</p>
                </strong>
                <strong>
                  Population: <p>{planets.population}</p>
                </strong>
                <strong>
                  Diameter: <p>{planets.diameter}</p>
                </strong>
              </Card.Body>
            </Card>
          );
        })}

        
      </div>
    </>
  );
}

export default Planets;
