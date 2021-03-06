import React from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../../firebase/firebase.init";
import useToken from "../../../../Hooks/JwtToken";
import "./FormLogin.css";
const FormLogin = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(user);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data?.email, data?.password);
    reset();
  };
  if (error) {
    toast(error.message);
  }
  if (token) {
    navigate(from, { replace: true });
    toast("welcome to webcarmanger");
  }
  // recveryEmail
  const recoveryEmail = async () => {
    const email = document.getElementById("email").value;
    if (email) {
      await sendPasswordResetEmail(email);
      if (error1 || sending) {
        toast(error1?.message);
      } else {
        toast("email send.");
      }
    } else {
      toast("please file upp emil field");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            {...register("email", {
              required: "You must specify a email field",
            })}
          />

          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", {
              required: "You must specify a password",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />

          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}
        </div>
        {loading && <p>loading....</p>}
        <div className="forget-password" onClick={recoveryEmail}>
          Forget password ?
        </div>
        <input className="btn" type="submit" value="Log In" />
      </form>
      <p className="form-link">
        Already have an account ? <Link to="/register">Sin Up</Link>{" "}
      </p>
    </div>
  );
};

export default FormLogin;
