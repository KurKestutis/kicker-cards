import React from "react";
import "./Card.scss";
import picture from "../img/picture.jpg";
import CommentInput from "./CardComponents/CommentInput";
import Comment from "./CardComponents/Comment";

const Card = (props) => {
  return (
    <article className="card">
      <section className="card__head-wrapper content">
        <img className="card__head-wrapper__img content__img" alt="grye" src={picture} />
        <header className="card__head-wrapper__header">
          <h3 className="card__head-wrapper__header__title">Lorem ipsum dolor sit amet, consectetur</h3>
          <h4 className="card__head-wrapper__header__description">Lorem ipsum</h4>
          <p className="card__head-wrapper__header__text">Lorem ipsum dolor sit</p>
        </header>
      </section>

      <section className="card__comments">
        <CommentInput />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </section>
    </article>
  );
};

export default Card;
