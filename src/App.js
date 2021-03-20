import "./App.css";
import Home from "./home/HomePage";
import MainLoginPage from "./login-register/MainLoginPage";
import { BrowserRouter} from "react-router-dom";

import MainRegisterPage from "./login-register/MainRegisterPage";
import HomePage from "./home/HomePage";
import UnderAge from './home/underAge/UnderAge'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
