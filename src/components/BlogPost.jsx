import React from "react";

const BlogPost = ({ title, content, author, date }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="author-info">
        <span>Author: {author}</span>
        <span>Date: {date}</span>
      </div>
    </div>
  );
};

export default BlogPost;
