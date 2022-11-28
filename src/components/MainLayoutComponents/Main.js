import React from "react";
import "./Main.scss";
import Card from "../CardComponents/Card";

const Main = (props) => {
  return (
    <main className="main">
      <div className={`main__content ${props.className}`}>
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Main;
