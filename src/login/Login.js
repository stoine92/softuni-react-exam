import "./loginStyles.css";
import {Redirect} from "react-router-dom";


const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    isAuthenticated
  } = props;
  
  return (
    <>
    <div className="login-form">
      <section className="login">
        <div className="loginContainer">
          <label>Username</label>
          <br />
          <input
            className="input"
            type="email"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p className="err">{emailError}</p>
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            autoFocus
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <p className="err">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button className="button" onClick={handleLogin}>
                  Sign in
                </button>
                <p>
                  Don't have an account ?
                  <span
                    className="switchSpan"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button className="button" onClick={handleSignUp}>
                  Sign up
                </button>

                <p>
                  Have an account ?
                  <span
                    className="switchSpan"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign in
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
        {isAuthenticated ? <Redirect to="/mainPage/MainPage"/> : (<></>)}
      </section>
     
     
    </div>
    </>
  );
};

export default Login;
