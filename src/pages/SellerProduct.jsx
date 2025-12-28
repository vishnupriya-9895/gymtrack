import React, { useState } from "react";
import Selleraside from "../Components/Selleraside";
import Sellernav from "../Components/Sellernav";

const SellerProducts = ({ onSubmit, initialData = {} }) => {
  const [product, setProduct] = useState({
    name: initialData.name || "",
    price: initialData.price || "",
    category: initialData.category || "",
    stock: initialData.stock || "",
    image: initialData.image || "",
    description: initialData.description || "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", product);
    if (onSubmit) onSubmit(product);
  };

  return (
    
    <>
    <Sellernav/>
    <Selleraside/>
   
    <div
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        backgroundColor: "#f9fafb",
        padding: "25px",
        borderRadius: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {initialData.name ? "Update Product" : "Add Product"}
      </h2>

      <form onSubmit={handleSubmit}>
        {/* PRODUCT NAME */}
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* PRICE */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* CATEGORY */}
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          style={inputStyle}
        />

        {/* STOCK */}
        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          value={product.stock}
          onChange={handleChange}
          style={inputStyle}
        />

        {/* IMAGE URL */}
        <input
          type="text"
          name="image"
          placeholder="Product Image URL"
          value={product.image}
          onChange={handleChange}
          style={inputStyle}
        />

        {/* IMAGE PREVIEW */}
        {product.image && (
          <div
            style={{
              height: "150px",
              borderRadius: "15px",
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginBottom: "15px",
            }}
          ></div>
        )}

        {/* DESCRIPTION */}
        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          rows={4}
          style={{
            ...inputStyle,
            resize: "none",
          }}
        ></textarea>

        {/* BUTTON */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          {initialData.name ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
     </>
  );
  
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  outline: "none",
  fontSize: "14px",
};

export default SellerProducts;
