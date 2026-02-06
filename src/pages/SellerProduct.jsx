import { useState } from "react";
import Selleraside from "../Components/Selleraside";
import Sellernav from "../Components/Sellernav";
import { toast } from "react-toastify";
import { addproduct } from "../services/allApi";

const SellerProducts = () => {
  const [previewArray, setPreviewArray] = useState([]);
  const [preview, setPreview] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/004/640/699/small/circle-upload-icon-button-isolated-on-white-background-vector.jpg",
  );
  const [productData, setProductData] = useState({
    ProductName: "",
    Price: 0,
    discountPrice: 0,
    Category: "",
    StockQuantity: 0,
    productDesc: "",
    imgUrl: "",
    uploadedImages: [],
  });
  // multiple images shown
  const OnImageClick = (e) => {
    console.log(e.target.files[0]);
    setProductData({
      ...productData,
      uploadedImages: [...productData.uploadedImages, e.target.files[0]],
    });

    let imgUrl = URL.createObjectURL(e.target.files[0]);
    console.log(imgUrl);
    setPreview(imgUrl);
    setPreviewArray([...previewArray, imgUrl]);
  };
  // file uploading procces only possible using headers
  const onProductClick = async () => {
    try {
      let token = localStorage.getItem("token");
      let headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      let reqbody = new FormData();
      for (let key in productData) {
        if (key != "uploadedImages") {
          reqbody.append(key, productData[key]);
        } else {
          productData.uploadedImages.forEach((eachfile) => {
            reqbody.append("uploadedImages", eachfile);
          });
        }
      }
      let apiresponse = await addproduct(reqbody, headers);
      console.log(apiresponse);
      toast.success("succesfully added");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <>
      <Sellernav />
      <Selleraside />

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
          Add Product
        </h2>

        <div>
          {/* PRODUCT NAME */}
          <input
            onChange={(e) =>
              setProductData({ ...productData, ProductName: e.target.value })
            }
            type="text"
            name="name"
            placeholder="Product Name"
            required
            style={inputStyle}
          />

          {/* PRICE */}
          <input
            onChange={(e) =>
              setProductData({ ...productData, Price: e.target.value })
            }
            type="number"
            name="price"
            placeholder="Price"
            required
            style={inputStyle}
          />
          <input
            onChange={(e) =>
              setProductData({ ...productData, discountPrice: e.target.value })
            }
            type="number"
            name="discount price"
            placeholder="discount price"
            required
            style={inputStyle}
          />

          <input
            onChange={(e) =>
              setProductData({ ...productData, Category: e.target.value })
            }
            type="text"
            name="category"
            placeholder="Category"
            style={inputStyle}
          />
          <input
            onChange={(e) =>
              setProductData({ ...productData, imgUrl: e.target.value })
            }
            type="text"
            name="image url"
            placeholder="image url"
            style={inputStyle}
          />

          <input
            onChange={(e) =>
              setProductData({ ...productData, StockQuantity: e.target.value })
            }
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            style={inputStyle}
          />

          <textarea
            onChange={(e) =>
              setProductData({ ...productData, productDesc: e.target.value })
            }
            name="description"
            placeholder="Product Description"
            rows={4}
            style={{
              ...inputStyle,
              resize: "none",
            }}
          ></textarea>
          {/* HIDDEN FILE INPUT */}
          <input
            type="file"
            name="image"
            id="uploadImage"
            style={{ display: "none" }}
          />

          <label htmlFor="uploads">
            <input
              onChange={(e) => OnImageClick(e)}
              type="file"
              id="uploads"
              style={{ display: "none" }}
              className="hidden"
            />
            <img className="" src={preview} alt="" />
          </label>
          {previewArray.length > 0 && (
            <div className="d-flex gap-3">
              {previewArray.map((eachpreview) => (
                <img className="w-25" src={eachpreview} alt="" />
              ))}
              {previewArray.length < 3 && (
                <label htmlFor="plus">
                  <input
                    onChange={(e) => OnImageClick(e)}
                    id="plus"
                    style={{ display: "none" }}
                    type="file"
                  />
                  <img
                    style={{ width: "52px" }}
                    src="https://t4.ftcdn.net/jpg/16/70/72/57/360_F_1670725765_YzsfYpQzTKlKCGSiicEbb8iNGjvejH69.jpg"
                    alt=""
                  />
                </label>
              )}
            </div>
          )}

          <button
            onClick={onProductClick}
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
            Add Product
          </button>
        </div>
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
