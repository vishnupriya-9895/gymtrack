import React from "react";
import Header from "../Components/Header";

const Cart = () => {
  return (
    <div>
      <Header />
      <h1>my cart</h1>

      <div className="grid grid-cols-5 gap-4">
  <div className="bg-gray-200 p-4 col-span-4">
    Cart Items
  </div>
  <div className="bg-gray-300 p-4 col-span-1">
    Price Summary
  </div>
</div>

    </div>
  );
};

export default Cart;
