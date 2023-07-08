import React, { useState } from "react";

export const CartContext = React.createContext(null);

export const CartProvider = ({ children }) => {
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
      value={{
        items: state.items,
        totalAmount: state.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// export default CartProvider;
