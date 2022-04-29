import React from "react";
import FormLogin from "../FormLogin/FormLogin";
import SocialLogin from "../SocialLogin.js/SocialLogin";
import "./Login.css";
const Login = () => {
  return (
    <div className="log-in container">
      <div className="login-form">
        <div className="login-banner">
          <img src="https://i.ibb.co/mSxmJHL/olav-tvedt-login.jpg" alt="" />
        </div>
        <div className="login-form-side">
          <h2>Log in</h2>
          <FormLogin />
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
