import React from "react";
import "./Main.scss";
import Card from "../CardComponents/Card";

const Main = () => {
  return (
    <main className="main">
      <div className="main__content">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Main;
