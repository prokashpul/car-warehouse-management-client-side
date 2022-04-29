import React from "react";
import { useForm } from "react-hook-form";
import "./FormLogin.css";
const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
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
            required
          />

          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}
        </div>
        <input className="btn" type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default FormLogin;
