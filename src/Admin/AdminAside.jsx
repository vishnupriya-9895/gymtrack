import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaGripLines } from "react-icons/fa";
const AdminAside = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
     
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          top: "20px",
          left: open ? "210px" : "20px",
          zIndex: 1000,
          padding: "6px 12px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "4px",
          transition: "left 0.3s ease",
        }}
      >
        {open ? <IoMdClose />
 : <FaGripLines />}
      </button>

   
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "200px",
          height: "100vh",
          backgroundColor: "#111",
          color: "white",
          padding: "20px",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>Admin Panel</h3>

        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.2" }}>
           <Link  style={{textDecoration:"none",color:"white"}}  to={'/AdminHome'}> Dashboard </Link> <br />
         
          <Link style={{textDecoration:"none",color:"white"}}  to={'/AdminUser'}> user </Link> <br />

           <Link style={{textDecoration:"none",color:"white"}} to={'/exerciseAdmin'}> Exercise </Link> <br />
         
          <Link style={{textDecoration:"none",color:"white"}} to={'/AdminProduct'}> products</Link>
         
       
          <li>Logout</li>
        </ul>
      </aside>
    </>
  );
};

export default AdminAside;
