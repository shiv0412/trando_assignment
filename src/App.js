import React from "react";

import ItemDisplay from "./components/card/ItemDisplay";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

const App = () => {
  return (
    <div>
      <Header />
      <Menu />
      <ItemDisplay />
    </div>
  );
};

export default App;
