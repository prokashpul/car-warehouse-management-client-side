import React from "react";
import "./SocialLogin.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../../../firebase/firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../../../Hooks/JwtToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(user);
  if (loading) {
    toast("wait for processing ...");
  }
  if (error) {
    toast(error.message);
  }
  if (token) {
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
      </div>
    </>
  );
};

export default SocialLogin;
