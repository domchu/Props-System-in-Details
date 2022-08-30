import React from "react";
import { faker } from "@faker-js/faker";

const CommentDetail = () => {
  return (
    <div>
      <div className="comment">
        <a href="/" className="avatar">
          <img src="" alt="avatar" />
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today by 6:00pm</span>
          </div>
          <div className="text">Nice blog post</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
