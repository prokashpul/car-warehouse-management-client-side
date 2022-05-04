import React from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase/firebase.init";
import title from "../../../../Utilities/dynamicName";
import "./AddBlog.css";

const AddBlog = () => {
  title("Create new Post");
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (blog) => {
    blog.email = user.email;
    blog.name = user.displayName;
    const { data } = await axios.post(
      "https://hidden-lake-88703.herokuapp.com/blogs",
      blog
    );
    if (data.success) {
      toast.success(data?.message);
    } else {
      toast.error(data?.error);
    }
    reset();
  };
  return (
    <>
      {user.email === "pprokash102@gmail.com" ? (
        <div className="add-form">
          <h2> Create new post</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="post-container">
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  defaultValue={user?.email}
                  {...register("email")}
                  disabled
                />

                {errors.email && (
                  <p className="form-error">{errors.email.message}</p>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  defaultValue={user?.displayName}
                  {...register("name")}
                  disabled
                />

                {errors.name && (
                  <p className="form-error">{errors.name.message}</p>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="title"
                  placeholder="Post Title "
                  {...register("title", {
                    required: "You must specify a Title",
                  })}
                />

                {errors.title && (
                  <p className="form-error">{errors.title.message}</p>
                )}
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  id="name"
                  placeholder=" Description"
                  {...register("des", {
                    required: "You must specify a Description",
                  })}
                />

                {errors.des && (
                  <p className="form-error">{errors.des.message}</p>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="image"
                  placeholder="Image Url"
                  {...register("img", {
                    required: "You must specify a image url",
                  })}
                />

                {errors.img && (
                  <p className="form-error">{errors.img.message}</p>
                )}
              </div>
            </div>
            <input className="btn" type="submit" value="ADD Post" />
          </form>
          <p className="form-link">
            <Link to="/">Back to Home</Link>{" "}
          </p>
        </div>
      ) : (
        <div className="bolg-admin">
          <h2> Only For Admin </h2>
          <p className="form-link">
            <Link to="/">Back to Home</Link>{" "}
          </p>
        </div>
      )}
    </>
  );
};
export default AddBlog;
