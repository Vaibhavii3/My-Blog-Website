import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/AdminPanel.css";

const AdminPanel = () => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [newBlog, setNewBlog] = useState({ title: '', content: '', category: ''});
    const [newCategory, setNewCategory] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const blogResponse = await axios.get('/api/blogs');
            const categoryResponse = await axios.get('/api/categories');
            setBlogs(blogResponse.data);
            setCategories(categoryResponse.data);
        };
        fetchData();
    }, []);

    const addBlog = async () => {
        if (!newBlog.title || !newBlog.content || !newBlog.category) {
            alert('Please fill in all blog fields.');
            return;
        }
        const response = await axios.post('/api/blogs', newBlog);
        setBlogs([...blogs, response.data]);
        setNewBlog({ title: '', content: '', category: ''});
    };

    const addCategory = async () => {
        if (!newCategory) {
            alert('Category name cannot be empty.');
            return;
        }
        const response = await axios.post('/api/category', { name: newCategory });
        setCategories([...categories, response.data]);
        setNewCategory('');
    };

    const deleteBlog = async (id) => {
        await axios.delete(`/api/blogs/${id}`);
        setBlogs(blogs.filter((blog) => blog.id !== id));
    };

    const deleteCategory = async (id) => {
        await axios.delete(`/api/categories/${id}`);
        setCategories(categories.filter((category) => category.id !== id));
    };

    return (
        <div className="admin-panel">
          <h1  className="admin-panel-title">Admin Panel</h1>
    
          <section className="admin-section categories-section">
            <h2 className="section-title">Categories</h2>
            <ul className="categories-list">
              {categories.map((category) => (
                <li key={category.id} className="category-item">
                <span className="category-name">{category.name}</span>
                <button className="delete-button" onClick={() => deleteCategory(category.id)}>Delete</button>
              </li>
              ))}
            </ul>
            <div className="add-category-form">
                <input
                    type="text"
                    className="category-input"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Add new category"
                />
                <button className="add-button" onClick={addCategory}>Add Category</button>
                </div>
          </section>
    
          <section className="admin-section blogs-section">
            <h2 className="section-title">Blogs</h2>
            <ul className="blogs-list">
              {blogs.map((blog) => (
                <li key={blog.id} className="blog-item">
                <span className="blog-title"><strong>{blog.title}</strong></span> - 
                <span className="blog-category">{blog.category}</span>
                <button className="delete-button" onClick={() => deleteBlog(blog.id)}>Delete</button>
              </li>
              ))}
            </ul>
            <div className="add-blog-form">
          <input
            type="text"
            className="blog-title-input"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            placeholder="Blog title"
          />
          <textarea
            className="blog-content-input"
            value={newBlog.content}
            onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
            placeholder="Blog content"
          ></textarea>
          <select
            className="blog-category-select"
            value={newBlog.category}
            onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <button className="add-button" onClick={addBlog}>Add Blog</button>
        </div>
          </section>
        </div>
      );
};

export default AdminPanel;