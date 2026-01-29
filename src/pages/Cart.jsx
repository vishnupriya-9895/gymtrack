import React, { useEffect, useState } from "react";
import Header from "../Components/Header";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);


  const updateQuantity = (id, type) => {
    const updatedCart = cart.map((item) => {
      if (item._id === id) {
        let newQty =
          type === "inc" ? item.quantity + 1 : item.quantity - 1;

        if (newQty < 1) newQty = 1;

        return { ...item, quantity: newQty };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.Price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="container mt-5 pt-5">
        <h1 className="mb-4 fw-bold text-3xl">My Cart</h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        
          <div className="bg-white p-4 rounded-xl shadow-md col-span-4">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item._id}
                  className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-3"
                >
                  <img
                    src={item.imgUrl}
                    alt={item.ProductName}
                    className="rounded-lg"
                    style={{
                      width: "90px",
                      height: "90px",
                      objectFit: "contain",
                    }}
                  />

                  <div className="flex-grow-1 ms-3">
                    <h6 className="fw-semibold mb-1">
                      {item.ProductName}
                    </h6>
                    <p className="text-muted mb-0">
                       {item.Price}
                    </p>
                  </div>

                  {/* QUANTITY CONTROLS */}
                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-dark btn-sm"
                      onClick={() =>
                        updateQuantity(item._id, "dec")
                      }
                    >
                      −
                    </button>

                    <span className="fw-semibold px-2">
                      {item.quantity}
                    </span>

                    <button
                      className="btn btn-outline-dark btn-sm"
                      onClick={() =>
                        updateQuantity(item._id, "inc")
                      }
                    >
                      +
                    </button>
                  </div>

                 
                  <div className="text-end ms-4">
                    <p className="mb-1 text-sm text-muted">
                      Total
                    </p>
                    <span className="fw-bold">
                      {item.Price * item.quantity}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">
                Your cart is empty
              </p>
            )}
          </div>


          <div className="bg-white p-4 rounded-xl shadow-md col-span-1 h-fit">
            <h5 className="fw-bold mb-3">Price Summary</h5>

            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span> {total}</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Delivery</span>
              <span className="text-success">Free</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold fs-5">
              <span>Total</span>
              <span> {total}</span>
            </div>

            <button className="btn btn-dark w-100 mt-4 rounded-pill">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
