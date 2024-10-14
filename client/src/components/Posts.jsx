import React, { useState } from "react";

import Thumbnail1 from "../images/blog10.jpg";
import Thumbnail2 from "../images/blog20.jpg";
import Thumbnail3 from "../images/blog39.jpg";
import Thumbnail4 from "../images/blog47.jpg";
import PostItem from "./PostItem";

const MOCK_POSTS = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "How to maximise your learning by following the Pomodoro Technique",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, animi!",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "science",
    title: "Interesting findings in Physics you probably never knew",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, deleniti.",
    authorID: 1,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "weather",
    title: "How the British rainy weather may actually be good for you",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, porro.",
    authorID: 13,
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    category: "farming",
    title: "Why I grow my own potatoes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nostrum.",
    authorID: 11,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(MOCK_POSTS);

  return (
    <section className="posts">
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
    </section>
  );
};

export default Posts;
