import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import BlogCard from './BlogCard';
import client from '../sanityClient';
import "../style/BlogPage.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const query = `*[_type == "blog"]{
        title,
        content,
        image,
        publishedDate,
        "category": category->slug.current,
        "slug": slug.current
      }`;
      const result = await client.fetch(query);
      setBlogs(result);
      setFilteredBlogs(result); 
    })();
  }, []);

  return (
    <div className="blog-page">
        <Navbar />
      <div className="main-content">
        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              title={blog.title}
              slug={blog.slug}
              image={blog.image}
              date={blog.publishedDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
