import React, { useContext, useEffect, useState } from "react";
import PostAuthor from "../components/PostAuthor";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import DeletePost from "./DeletePost";
import { UserContext } from "../context/userContext";
import axios from "axios";

const PostInfo = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/${id}`
        );
        setPost(response.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    getPost();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="post-info">
      {error && <p className="error">{error}</p>}
      {post && (
        <div className="container post-info__container">
          <div className="post-info__header">
            <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
            {currentUser?.id == post?.creator && (
              <div className="post-info__buttons">
                <Link to={`posts/${post?._id}/edit`} className="btn sm primary">
                  Edit
                </Link>
                <DeletePost postId={id} />
              </div>
            )}
          </div>
          <h1>{post.title}</h1>
          <div className="post-info__thumbnail">
            <img
              src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`}
              alt=""
            />
          </div>
          <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
        </div>
      )}
    </section>
  );
};

export default PostInfo;
