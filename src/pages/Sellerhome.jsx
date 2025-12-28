import React from "react";
import Sellernav from "../Components/Sellernav";
import Selleraside from "../Components/Selleraside";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Sellerhome = () => {
  return (
    <div>
      <Sellernav />

      <div style={{ display: "flex" }}>
        <Selleraside />

        <div
          style={{
            marginLeft: "240px",
            padding: "20px",
            width: "100%",
          }}
        >
          <h2>Seller Dashboard</h2>

          <section
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            {/* CARD 1 */}
            <Card
              className="animated-card text-center"
              style={{
                width: "22rem",
                borderRadius: "20px",
                padding: "25px",
                border: "none",
              }}
            >
              <div
                className="icon-circle"
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 15px",
                  borderRadius: "50%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage:
                    'url("https://www.shutterstock.com/image-vector/vector-icon-pending-order-store-260nw-1910143441.jpg")',
                }}
              ></div>

              <Card.Title className="fw-bold">pending orders</Card.Title>
              <Card.Text className="fw-bold">
               24
              </Card.Text>
            </Card>

            {/* CARD 2 */}
            <Card
              className="animated-card text-center"
              style={{
                width: "22rem",
                borderRadius: "20px",
                padding: "25px",
                border: "none",
              }}
            >
              <div
                className="icon-circle"
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 15px",
                  borderRadius: "50%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage:
                    'url("https://static.vecteezy.com/system/resources/previews/027/570/210/non_2x/approved-rubber-stamp-approved-icon-seal-of-approval-tested-and-verified-badge-with-check-mark-accepted-sign-authorized-badge-design-with-grunge-texture-illustration-vector.jpg")',
                }}
              ></div>

              <Card.Title className="fw-bold">product approval</Card.Title>
              <Card.Text className="fw-bold">
               2
              </Card.Text>
            </Card>

            {/* CARD 3 */}
            <Card
              className="animated-card text-center"
              style={{
                width: "22rem",
                borderRadius: "20px",
                padding: "25px",
                border: "none",
              }}
            >
              <div
                className="icon-circle"
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 15px",
                  borderRadius: "50%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage:
                    'url("https://cdn-icons-png.flaticon.com/512/8899/8899687.png")',
                }}
              ></div>

              <Card.Title className="fw-bold">total products</Card.Title>
              <Card.Text>
               140
              </Card.Text>
            </Card>
          </section>
         <h1 className="mt-5 text-gray-400">quick actions</h1>  
      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginTop: "40px",
    padding: "50px",
    backgroundColor: "#e5e7eb",
    borderRadius: "10px",
  }}
>
   
 
  <div
    style={{
      flex: 1,
      backgroundColor: "#f9fafb",
      borderRadius: "20px",
      padding: "25px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      cursor: "pointer",
    }}
  >
    <div
      style={{
        width: "80px",
        height: "80px",
        margin: "0 auto 15px",
        borderRadius: "50%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage:
          'url("https://cdn-icons-png.freepik.com/256/15526/15526434.png?semt=ais_white_label")',
      }}
    ></div>
  <Link to={'/SellerProducts'} style={{textDecoration:"none",color:"black"}} >  <p style={{ fontWeight: "bold", margin: 0 }}>Add Product</p></Link>
  </div>

  {/* CARD 2 */}
  <div
    style={{
      flex: 1,
      backgroundColor: "#f9fafb",
      borderRadius: "20px",
      padding: "25px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      cursor: "pointer",
    }}to={'/SellerSettings'}
  >
    <div   
      style={{
        textDecoration:"none",
        color:"black",
        width: "80px",
        height: "80px",
        margin: "0 auto 15px",
        borderRadius: "50%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage:
          'url("https://png.pngtree.com/element_our/png/20181227/settings-glyph-black-icon-png_292947.jpg")',
      }}
    ></div>
    <p style={{ fontWeight: "bold", margin: 0 }}>settings</p>

  </div>

  {/* CARD 3 */}
  <div
    style={{
      flex: 1,
      backgroundColor: "#f9fafb",
      borderRadius: "20px",
      padding: "25px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      cursor: "pointer",
    }}
  >
    <div
      style={{
        width: "80px",
        height: "80px",
        margin: "0 auto 15px",
        borderRadius: "50%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage:
          'url("https://www.shutterstock.com/image-vector/shopping-cart-check-mark-icon-260nw-1910586046.jpg")',
      }}
    ></div>
    <Link style={{textDecoration:"none",color:"black"}}  to={'/SellerOrders'} ><p style={{ fontWeight: "bold", margin: 0 }}>View Orders</p></Link>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Sellerhome;
