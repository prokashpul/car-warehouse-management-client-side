import React from "react";
import "./SocialLogin.css";
const SocialLogin = () => {
  return (
    <>
      {" "}
      <div className="or-divider">
        <span></span>
        <p>Or</p>
        <span></span>
      </div>
      <div className="social-login">
        <button className="btn">
          <img src="https://i.ibb.co/cvbHMw3/Google.png" alt="" />
        </button>
        <button className="btn">
          <img src="https://i.ibb.co/MRkYgV0/Facebook.png" alt="" />
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
