import React from "react";
import { faker } from "@faker-js/faker";

const CommentDetail = (props) => {
  return (
    <div>
      <div className="comment">
        <a href="/" className="avatar">
          <img src="" alt="avatar" />
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.surname}
          </a>
          <div className="metadata">
            <span className="date">{props.TimeUpdate}</span>
          </div>
          <div className="job">{props.comment}</div>
          <div className="country">{props.country}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
