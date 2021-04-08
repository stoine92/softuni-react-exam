import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fire from "./fire";
import HomePage from "./homePage/HomePage";
import About from "./about/About";
import Login from "./login/Login";
import MainPage from "./mainPage/MainPage";
import People from "./mainPage/People";
import Planets from "./mainPage/Planets";
import Films from "./mainPage/Films";
import Starships from "./mainPage/Starships";
import Quiz from "./quizFolder/Quiz";
import Header from "./commons/Header/Header";
import Footer from "./commons/Footer/Footer";

function App() {
  // Authenticator
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  

  // Api data
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [starships, setStarships] = useState([]);

  // Page loading
  const [loading, setLoading] = useState(true);

  // Authenticator functions
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userName) => {
        console.log(userName.user.email);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  useEffect(() => {
    authListener();
  }, []);

  //Api functions
  useEffect(() => {
    async function fetchPeople() {
      let result = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await result.json();
      setPeople(data.results);
    }
    async function fetchPlanets() {
      let result = await fetch("https://swapi.dev/api/planets/?format=json");
      let data = await result.json();
      setPlanets(data.results);
    }
    async function fetchFilms() {
      let result = await fetch("https://swapi.dev/api/films/?format=json");
      let data = await result.json();
      setFilms(data.results);
    }
    async function fetchStarships() {
      let result = await fetch("https://swapi.dev/api/starships/?format=json");
      let data = await result.json();
      setStarships(data.results);
    }

    fetchPeople();
    fetchPlanets();
    fetchFilms();
    fetchStarships();

    setLoading(false);
  }, []);

  return (
    
      <div className="App">
        <Header username={user?.email} isAuthenticated={Boolean(user)} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login/Login">
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignUp={handleSignUp}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
              isAuthenticated={Boolean(user)}
            />
          </Route>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <Route path="/mainPage/People">
              <People data={people} />
            </Route>
          )}
          <Route path="/mainPage/Planets">
            <Planets data={planets} />
          </Route>
          <Route path="/mainPage/Films">
            <Films data={films} />
          </Route>
          <Route path="/mainPage/Starships">
            <Starships data={starships} />
          </Route>
          {/* Less functional bit */}
          <Route path="/homePage/HomePage" component={HomePage} />
          <Route path="/about/About" component={About} />
          <Route path="/mainPage/MainPage" component={MainPage} />
          <Route path="/quizFolder/Quiz" component={Quiz} />
        </Switch>
        <Footer />
      </div>
    
  );
}

export default App;
