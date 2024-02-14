import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerlogo">My Social</h3>
          <span className="registerdesc">
            Connect with friends and the world around you on My Social.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input
              className="registerInput"
              type="text"
              placeholder="Enter Username..."
            />
            <input
              className="registerInput"
              type="email"
              placeholder="Enter Email..."
            />
            <input
              className="registerInput"
              type="password"
              placeholder="Enter Password..."
            />
            <button className="registerBtn">Register Account!</button>
            <span className="forgetPass">Forget Password!</span>
            <Link to={'/login'} className="link">
              <button className="Registerloginbtn">
                Alreday have a Account!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
