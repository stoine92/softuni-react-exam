import './loginStyles.css';

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
  } = props;
  return (
  <div className="login-form">
  <section className="login">
      <div className="loginContainer">
          <label>Username</label><br/>
          <input type="email" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <p>{emailError}</p>
          <label>Password</label><br/>
          <input type="password" autoFocus required value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <p>{passwordError}</p>
          <div className="btnContainer">
              {hasAccount ? (
                  <>
                  <button onClick={handleLogin}>Sign in</button>
                  <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                  </>
              ) : (
                <>
                <button onClick={handleSignUp}>Sign up</button>
                <p>Have an account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sign in</span></p>
                </>
              )}
          </div>
      </div>
  </section>
  </div>
  
  )};

export default Login;
