import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <article className="card">
      <section className="card__head-wrapper">
        {/* <img className="card-img" alt="card" src="" /> */}
        <div className="card__head-wrapper__img"></div>
        <header className="card__head-wrapper__header">
          <h3>Lorem ipsum dolor sit amet, consectetur</h3>
          <h4>Lorem ipsum</h4>
          <p>Lorem ipsum dolor sit</p>
        </header>
      </section>
      <section className="card__comments">
        <p>1 Comment</p>
        <p>2 Comment</p>
        <p>3 Comment</p>
        <p>4 Comment</p>
      </section>
    </article>
  );
};

export default Card;
