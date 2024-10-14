import React, { useState } from "react";
import { MOCK_POSTS } from "../utils/data";
import PostItem from "../components/PostItem";

const AuthorPosts = () => {
  const [posts, setPosts] = useState(MOCK_POSTS);
  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={desc}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No posts found.</h2>
      )}
    </section>
  );
};

export default AuthorPosts;
