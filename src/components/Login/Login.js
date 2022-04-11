import React from "react";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase-init";
import "./Login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  const [signInWithEmailAndPassword, user, error, loading] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/';

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    SetPassword(event.target.value);
  };

  if (user) {
    navigate(from, {replace:true});
  }

  const handleSignInUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">This is log in</h2>
        <form onSubmit={handleSignInUser}>
          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name=""
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Your Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name=""
              id=""
              required
            />
          </div>
          <p style={{ color: "red", margin: "18px" }}>
            {error?.message}
          </p>
          {loading && <p>Loading.....</p>}
          <input
            className="form-submit"
            type="submit"
            value="Sign In"
          />
        </form>
        <p className="new-emajon">
          New to Ema-jhon?
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
        <div className="or-sizing">
          {" "}
          <hr />
          or <hr />
        </div>
      </div>
    </div>
  );
};

export default Login;
