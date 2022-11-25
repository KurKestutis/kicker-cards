import React from "react";
import "./Comment.scss";
import picture from "../../img/picture.jpg";

const Comment = () => {
  return (
    <div className="comment">
      <img className="comment__img" src={picture} alt="usser" />
      <div className="comment__text">
        <h5 className="comment__text__title">Lorem ipsum</h5>
        <p className="comment__text__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud
        </p>
      </div>
    </div>
  );
};

export default Comment;
