import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

import defaultAvatar from "../images/avatar0.jpg";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAuthors = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/users`
        );
        setAuthors(response.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    getAuthors();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map(({ _id: id, avatar, name, posts }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`} className="author">
                <div className="author__avatar">
                  <img
                    src={
                      avatar
                        ? `${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`
                        : defaultAvatar
                    }
                    alt={`${name}`}
                  />
                </div>
                <div className="author__info">
                  <h4>{name}</h4>
                  <p>{posts}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className="center">No authors registered.</h2>
      )}
    </section>
  );
};

export default Authors;
