import "./homePage.css";
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div className="main">
      <div className="wrapper">
        <p className="main-p">Please verify your age: </p>
       

        <Link className="entry-link" to="/login-register/MainLoginPage">
          I declare, I am 16 years or older
        </Link>
        <Link className="entry-link" to="/home/underAge/UnderAge">
          I am under 16 years of age
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
