import { async } from "@firebase/util";
import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase/firebase.init";
import SocialLogin from "../Login/SocialLogin.js/SocialLogin";
import "./Registration.css";
const Registration = () => {
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (data.password === data.conPassword) {
      await createUserWithEmailAndPassword(data?.email, data?.password);
      await updateProfile(data?.name);
    } else {
      toast("Password not mashed");
    }
  };
  if (user) {
    toast("successfully");
    navigate("/");
  }

  return (
    <div className="reg container">
      <div className="reg-form">
        <div className="login-banner"></div>
        <div className="reg-form-side">
          <h2>Registration</h2>
          <div className="register">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="name">Full Name: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  {...register("name", {
                    required: "You must specify a name field",
                  })}
                />

                {errors.name && (
                  <p className="form-error">{errors.name.message}</p>
                )}
              </div>
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

                {errors.email && (
                  <p className="form-error">{errors.email.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
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
              <div className="form-group">
                <label htmlFor="password">Conform Password: </label>
                <input
                  type="password"
                  id="conPassword"
                  name="conPassword"
                  placeholder="Conform Password"
                  {...register("conPassword", {
                    required: "You must specify a password",
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters",
                    },
                  })}
                />

                {errors.conPassword && (
                  <p className="form-error">{errors.conPassword.message}</p>
                )}
              </div>
              {loading && <p>Loading....</p>}
              <input className="btn" type="submit" value="Sin Up" />
            </form>
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Registration;