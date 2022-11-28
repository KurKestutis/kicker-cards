import React, { useState } from "react";
import "./App.scss";
import Header from "./components/MainLayoutComponents/Header";
import Main from "./components/MainLayoutComponents/Main";

function App() {
  const [main__content, setHideMain] = useState("visible");

  const toggleFunction = (isMenuClicked) => {
    !isMenuClicked ? setHideMain("hidden") : setHideMain("visible");
  };

  return (
    <div className="app">
      <Header toggleNavMain={toggleFunction} />
      <Main className={main__content} />
    </div>
  );
}

export default App;
