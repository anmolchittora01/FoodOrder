import React, { useContext, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "../App";

export default function TopBar(){
  const cartData = useContext(CartContext);
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);
  console.log("Cart Data", cartData);

  return (
    <>
      {isCartModalVisible && (
        <Cart
          onCloseClick={() => {
            setIsCartModalVisible(false);
          }}
          onBlackDropClick={() => {
            setIsCartModalVisible(false);
          }}
        />
      )}
      <Header
        cartCount={cartData?.items?.length}
        onCartClick={() => {
          setIsCartModalVisible(!isCartModalVisible);
        }}
      />
      <button
        onClick={() => {
          console.log("Click Me");
          cartData?.addItem();
        }}
      >
        Click Me
      </button>
      <main>
        <Meals />
      </main>
    </>
  );
};
