import React, { useState } from "react";
import TopBar from "./components/TopBar";
import CartContext from "./store/cart/CartContext"

const App = () => {
  const [state, setState] = useState({
    items: [],
    totalAmount: "",
  });
  const addItemHandler = () => {
    console.log("works?");
    setState((prev) => {
      let newState = { ...prev };
      newState.items = [
        ...newState.items,
        { title: "aaluParatha" },
        { title: "aaluParatha" },
      ];
      return newState;
    });
  };

  const removeItemHandler = (id) => {};

  return (
    <CartContext.Provider
      value={state}>
      <TopBar />
  </CartContext.Provider>)
};

export default App;
