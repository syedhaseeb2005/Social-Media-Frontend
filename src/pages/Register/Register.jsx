import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const HandleClick = async () => {
    console.log(email, password, username);
    try {
      await axios.post(`http://localhost:7000/api/auth/signup`, {
        username,
        email,
        password,
      });
      toast.success("Register Successfully!");
      setTimeout(() => navigate('/login') ,2000)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
                onChange={(e) => setUsername(e.target.value)}
                className="registerInput"
                type="text"
                placeholder="Enter Username..."
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="registerInput"
                type="email"
                placeholder="Enter Email..."
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="registerInput"
                type="password"
                placeholder="Enter Password..."
              />
              <button className="registerBtn" onClick={HandleClick}>
                Register Account!
              </button>
              <span className="forgetPass">Forget Password!</span>
              <Link to={"/login"} className="link">
                <button className="Registerloginbtn">
                  Alreday have a Account!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
