import React from "react";
import { Link } from "react-router-dom";
import HeaderTitleComponent from "../../utility/HeaderTitleComponent";
import { Container } from "react-bootstrap";
import "./register.css";

const Login = () => {
  return (
    <div className="login">
      <Container className="text-center">
        <HeaderTitleComponent title="Login" />
        <div className="email-input">
          <input type="email" placeholder="Email" />
        </div>
        <div className="pass-input">
          <input type="password" placeholder="Password" />
        </div>
        <div className="register-btn text-center">Login</div>
        <div className="register-page">
          Don't Have Account?{" "}
          <Link to="/register" className="register-button">
            Register
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Login;
