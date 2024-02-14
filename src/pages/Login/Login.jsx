import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/ApiCall";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    login(dispatch, { email, password });
    toast.success("Login Successfully!");
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="Loginlogo">My Social</h3>
            <span className="Logindesc">
              Connect with friends and the world around you on My Social.
            </span>
          </div>
          <div className="loginRight">
            <div className="LoginBox">
              <input
                className="loginInput"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email..."
              />
              <input
                className="loginInput"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password..."
              />
              <button className="loginBtn" onClick={loginHandler}>
                Login
              </button>
              <span className="forgetPass">Forget Password!</span>
              <Link to={"/register"} className="link">
              <button className="loginRegisterbtn">
                Create a new Account!
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

export default Login;
