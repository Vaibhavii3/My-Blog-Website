import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import BlogCard from './BlogCard';
import Collection from './Collection';
import client from '../sanityClient';
import "../style/BlogPage.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

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
      setFilteredBlogs(result); // Default to showing all blogs
    })();
  }, []);


  // Filter blogs based on the selected category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter((blog) => blog.category === selectedCategory));
    }
  }, [selectedCategory, blogs]);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="blog-page">
    <div className={`navbar ${isNavbarOpen ? "open" : ""}`}>
        <Navbar />
      </div>
      <div className="hamburger" onClick={toggleNavbar}>
        ☰
      </div>
      <div className="main-content">
        <Collection onCategorySelect={setSelectedCategory} />
        <div className="blog-grid">
          {/* {filteredBlogs.map((blog) => ( */}
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              // key={blog.slug}
              title={blog.title}
              // content={blog.content}
              slug={blog.slug}
              // slug={blog.slug.current}
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
