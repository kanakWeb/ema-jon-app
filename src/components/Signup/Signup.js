import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase-init";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate()

  const [createUserWithEmailAndPassword,user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };


  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if(user){
    navigate('/shop')
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your two password did't match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be 6 character or longer");
    }

    createUserWithEmailAndPassword(email,password)
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">This is Sign up</h2>
        <form onSubmit={handleCreateUser} action="">
          <div className="input-group">
            <label htmlFor="email">Your Email :</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="Email"
              id=""
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password :</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="Password"
              id=""
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Confirm Password :</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="Confirm Password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red", margin: "18px" }}>{error}</p>
          <input
            className="form-submit"
            type="submit"
            value="Sign up"
          />
        </form>
        <p className="new-emajon">
          Already have account?
          <Link className="form-link" to="/login">
            Log in
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

export default Signup;
