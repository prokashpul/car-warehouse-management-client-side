import React from "react";
import "./SocialLogin.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../../../firebase/firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (loading) {
    toast("wait for processing ...");
  }
  if (error) {
    toast(error.message);
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <>
      {" "}
      <div className="or-divider">
        <span></span>
        <p>Or</p>
        <span></span>
      </div>
      <div className="social-login">
        <button onClick={() => signInWithGoogle()} className="btn">
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
