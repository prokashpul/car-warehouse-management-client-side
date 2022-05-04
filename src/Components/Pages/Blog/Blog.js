import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import title from "../../../Utilities/dynamicName";
import SingleBlog from "./SingleBlog/SingleBlog";
import "./Blog.css";
import Spinner from "../../Spinner/Spinner";

const Blog = () => {
  title("Our Blogs & FAQ");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const blogPost = async () => {
      const url = "https://hidden-lake-88703.herokuapp.com/blogs";
      try {
        const { data } = await axios(url);
        setBlogs(data);
        setLoading(false);
      } catch {
        toast("Somthing Wrang please try again");
      }
    };
    blogPost();
  }, []);
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="container">
      <div className="blog-header">Blogs & FAQ</div>
      <div className="blogs">
        {blogs.slice(0, 4).map((blog) => (
          <SingleBlog key={blog._id} blog={blog}></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default Blog;
