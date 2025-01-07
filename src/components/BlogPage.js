import React from "react";
import BlogCard from "./BlogCard";
import Navbar from "./Navbar";
import "../style/BlogPage.css"

const BlogPage = () => {
  const blogs = [1, 2, 3, 4, 5, 6]; 

  return (
    <div className="blog-page">
      <Navbar />
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <BlogCard key={index} title={`Blog ${blog}`} />
        ))}
      </div>
    </div>
  );
};


export default BlogPage;
