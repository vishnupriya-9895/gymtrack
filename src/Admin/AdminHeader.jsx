import React from "react";

const AdminHeader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-black text-white px-4 py-2 pt-4 pb-4"
     
    >
      <h3 >Welcome Admin</h3>
      
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

export default  AdminHeader 
;
