import React, { useState } from "react";
import "./LoginForm.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;


  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8001/loginform", {
      email: email,
      password: password,
    })
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
          window.location.reload(false);
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login_back">
      <div className="login_con">
        <h2 className="bottom_margin">Sing-In</h2>
        <form onSubmit={handleSubmit}>
          <div className="bottom_margin">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="username"
              placeholder="Enter Email"
              name="email"
              autoComplete="off"
              className="form_control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="bottom_margin">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form_control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn-success">
            {" "}
            Log in{" "}
          </button>
          <p>You are agree to our terms and policies</p>
          <Link to="/register" className="btn_def">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
