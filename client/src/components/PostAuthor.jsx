import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/avatar6.jpg";

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/`} className="post__author">
      <div className="post__author-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="post__author-details">
        <h5>By: John Doe</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
