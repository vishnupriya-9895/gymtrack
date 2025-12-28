import React from "react";

const Sellernav = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        padding: "12px 20px",
        height: "70px"
      }}
    >
      <h3 style={{ margin: 0, fontWeight: "500" }}>Welcome Seller</h3>
      
      <div
        style={{
          position: "absolute",
          right: "20px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundImage:
            'url("https://png.pngtree.com/thumb_back/fh260/background/20250606/pngtree-aesthetic-profile-photo-of-asian-girl-with-closed-eyes-and-side-image_17396221.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default Sellernav;
