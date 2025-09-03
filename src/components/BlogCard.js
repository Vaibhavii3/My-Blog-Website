import React from "react";
import "../style/BlogCard.css";
import { Link } from "react-router-dom";
import { urlFor } from "../sanityClient"; 

const BlogCard = ({ title, image, date, slug }) => {
    return (
        <Link to={`/blog/${slug}`} className="blog-card">

            {image && <img src={urlFor(image).url()} alt={title} className="blog-card-image" />}
            <h3 className="blog-card-title">{title}</h3>
            <p className="blog-card-date">{new Date(date).toLocaleDateString()}</p>
        
        </Link>
    );
};

export default BlogCard;
