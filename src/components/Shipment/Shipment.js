import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase-init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  /* const navigate=useNavigate() */

  const handleNameBlur = (event) => {
    setname(event.target.value);
  };

  const handleAddressdBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlephoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container p-2">
      <div>
        <h2 className="form-title">Shipping Information</h2>
        <form onSubmit={handleCreateUser} action="">
          <div className="input-group">
            <label htmlFor="name">Your Name :</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Your Email :</label>
            <input
              value={user?.email}
              type="email"
              name="Email"
              id=""
              readOnly
            />
          </div>

          <div className="input-group">
            <label htmlFor="address">Address :</label>
            <input
              onBlur={handleAddressdBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone Number :</label>
            <input
              onBlur={handlephoneBlur}
              type="tel"
              name="phone"
              id=""
              required
              placeholder="Phone number"
            />
          </div>
          <p style={{ color: "red", margin: "18px" }}>{error}</p>
          <input
            className="form-submit"
            type="submit"
            value="Add Shipping"
          />
        </form>

        <div className="or-sizing">
          <hr />
          or <hr />
        </div>
      </div>
    </div>
  );
};

export default Shipment;
