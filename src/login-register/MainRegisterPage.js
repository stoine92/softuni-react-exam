import { Component } from "react";
import Header from "../commons/Header/Header";
import Footer from "../commons/Footer/Footer";

class MainRegisterPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
          <label>Repeat password:</label>
          <br />
          <input type="text" id="rePassword" name="rePassword"></input>
          <br />
          <button type="submit" value="submit">
            Register
          </button>
          <a> / Login</a>
        </form>
        <Footer />
      </div>
    );
  }
}

export default MainRegisterPage;
