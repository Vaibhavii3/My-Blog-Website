import "../style/BlogCard.css";

const BlogCard = ({ title }) => {
    return (
        <div className="blog-card">
            <h3>{title}</h3>
            <p>Short description of the blog...</p>
        </div>
    );
};

export default BlogCard;
