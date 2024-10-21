import React from "react";
import loading from "../images/loading.gif";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__image">
        <img src={loading} alt="loading" />
      </div>
    </div>
  );
};

export default Loading;
