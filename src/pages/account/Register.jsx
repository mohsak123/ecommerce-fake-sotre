import React from "react";
import { Container } from "react-bootstrap";
import "./register.css";
import HeaderTitleComponent from "../../utility/HeaderTitleComponent";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <Container className="text-center">
        <HeaderTitleComponent title="Register" />
        <div className="user-input">
          <input type="text" placeholder="User Name" />
        </div>
        <div className="email-input">
          <input type="email" placeholder="Email" />
        </div>
        <div className="pass-input">
          <input type="password" placeholder="Password" />
        </div>
        <div className="register-btn text-center">Register</div>
        <div className="login-page">
          Do You Have Account?{" "}
          <Link to="/login" className="login-button">
            Login
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Register;
