import React, { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import axios from "axios";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

const AuthorPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/users/${id}`
        );
        setPosts(response?.data);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };
    fetchPosts();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map(
            ({
              _id: id,
              thumbnail,
              category,
              title,
              description,
              creator,
              createdAt,
            }) => (
              <PostItem
                key={id}
                postID={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorID={creator}
                createdAt={createdAt}
              />
            )
          )}
        </div>
      ) : (
        <h2 className="center">No posts found.</h2>
      )}
    </section>
  );
};

export default AuthorPosts;
