import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <article className="card">
      <section className="card-head-wraper">
        <img className="card-img" alt="card" src="" />
        <header className="card-header">
          <h2>Lorem ipsum dolor sit amet, consectetur</h2>
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit</p>
        </header>
      </section>
      <section className="card-comments">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus inventore, reprehenderit veritatis ullam
          nobis!
        </p>
      </section>
    </article>
  );
};

export default Card;
