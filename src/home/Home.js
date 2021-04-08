import "./home.css";
import { Card, Button } from "react-bootstrap";

function HomePage() {
  return (
    <div className="main">
      <Card style={{
        width: '24rem',
        margin: "0 auto",
        padding: "35.5px",
        color: 'whitesmoke',
        backgroundColor: "#222",
        }}>
        <Card.Body>
          <Card.Title>Welcome</Card.Title>
          <Button variant="primary" href="/homePage/HomePage">Continue</Button >
          {/* <Button variant="secondary" style={{marginLeft: '30px'}} href="/underAge/UnderAge">I am under 16</Button > */}
        </Card.Body>
      </Card>
      
    </div>
  );
}

export default HomePage;
