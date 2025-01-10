import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../sanityClient";
import { urlFor } from "../sanityClient";
import "../style/BlogDetails.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const query = `*[_type == "blog" && slug.current == $slug][0]{
        title,
        content,
        image,
        publishedDate,
        "category": category->name
      }`;
      const result = await client.fetch(query, { slug });
      setBlog(result);
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return (
        <div className="loading-container">
          <p>Loading blog details...</p>
        </div>
      );    
  }

  return (
    <div className="blog-details">
      <h1 className="blog-title">{blog.title}</h1>
      <p className="blog-date">{new Date(blog.publishedDate).toDateString()}</p>
      <p className="blog-category">Category: {blog.category}</p>
      {blog.image && <img className="blog-image" src={urlFor(blog.image).url()} alt={blog.title} />}
      <div className="blog-content">
        {blog.content.map((block, index) => (
          <p key={index} className="content-paragraph">
          {block.children?.map((child) => child.text).join(' ')}
        </p>    
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
