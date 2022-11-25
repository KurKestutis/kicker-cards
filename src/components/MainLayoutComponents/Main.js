import React from "react";
import "./Main.scss";
import Card from "../Card";

const Main = (props) => {
  return (
    <main className="main">
      <div className="main__content">
        <Card key={1} />
        <Card key={2} />
        <Card key={3} />
      </div>
    </main>
  );
};

export default Main;
