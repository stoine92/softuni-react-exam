import { Component } from "react";
import Header from "../commons/Header/Header";
import Footer from "../commons/Footer/Footer";
import './mainLogin.css'

class MainLoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-form">
        <Header />
        <form>
          <label>Nickname:</label>
          <br />
          <input type="text" id="nickname" name="nickname"></input>
          <br />
          <label>Password:</label>
          <br />
          <input type="text" id="password" name="password"></input>
          <br />
          <button type="submit" value="submit">
            Login
          </button>
          <a> / Register</a>
        </form>
        <Footer />
      </div>
    );
  }
}

export default MainLoginPage;
