import React from "react";

const SingleBlog = ({ blog }) => {
  const { name, img, des, title } = blog || {};
  console.log(blog);
  return (
    <div data-aos="fade-up" className="single-blog">
      <img src={img} alt="" />
      <div className="blog-body">
        <h3>{title}</h3>
        <small>
          Author: <span> {name}</span>
        </small>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
