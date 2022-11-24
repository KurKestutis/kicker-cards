import React from "react";
import "./Card.scss";
import picture from "../img/picture.jpg";

const Card = (props) => {
  return (
    <article className="card">
      <section className="card__head-wrapper">
        <img className="card__head-wrapper__img" alt="grye" src={picture} />
        <header className="card__head-wrapper__header">
          <h3>Lorem ipsum dolor sit amet, consectetur</h3>
          <h4>Lorem ipsum</h4>
          <p>Lorem ipsum dolor sit</p>
        </header>
      </section>
      <section className="card__comments">
        <div>
          <input type="text" placeholder="Placeholder..." />
          <input type="submit" />
        </div>
        <p>1 Comment</p>
        <p>2 Comment</p>
        <p>3 Comment</p>
        <p>4 Comment</p>
      </section>
    </article>
  );
};

export default Card;
