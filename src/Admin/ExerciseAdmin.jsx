import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import AdminHeader from "./AdminHeader";
import AdminAside from "./AdminAside";
import { toast } from "react-toastify";
import { addExcersice } from "../services/allApi";

const ExerciseAdmin = () => {
    // state image kanikana 
  const [preview, setPreview] = useState(
    "https://img.icons8.com/sf-regular/1200/add-image.jpg"
  );
// kora image kanikan
  const [previewArray, setPreviewArray] = useState([]);
  // image kannikan vendaitu
const onImageClick=(e)=>{
  console.log(e.target.files[0])
  //image inth logic
  setData({...data,uploadedImages:[...data.uploadedImages,e.target.files[0]]})
  let imageUrl=URL.createObjectURL(e.target.files[0])
  setPreview(imageUrl)
  setPreviewArray([...previewArray,imageUrl])
}
  const [data, setData] = useState({
    workoutName: "",
    category: "",
    difficulty: "",
    duration: 0,
    workoutType: "",
    description: "",
    imageUrl: "",
    equipment: "",
    set: 0,
    rep: 0,
    rest: 0,
    uploadedImages: [],
  });

  
  // ADD EXERCISE
  const exerciseAdd = async () => {
    try {
      let token = localStorage.getItem("token");
// upload images -conet type
      const headers = {
         "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
// form data-transefer because file uploading
      let reqbody = new FormData();
      for (let key in data) {
        if (key !="uploadedImages") {
          reqbody.append(key, data[key]);
        } else {
          data.uploadedImages.forEach((file) => {
            reqbody.append("uploadedImages", file);
          });
        }
      }
let apiresponse=await addExcersice(reqbody,headers)
  console.log(apiresponse)
     toast.success("succesfully added")
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <AdminHeader />

      <div style={{ display: "flex", minHeight: "100vh", background: "#f4f6f8" }}>
        <AdminAside />

        <div style={{ marginLeft: "240px", padding: "30px", width: "100%" }}>
          <h2>Add New Exercise</h2>
          <p>Fill in the details to add a new exercise</p>

          <Card style={{ maxWidth: "700px", padding: "25px" }}>
            <input
              type="text"
              placeholder="Exercise Name"
              style={inputStyle}
              onChange={(e) =>
                setData({ ...data, workoutName: e.target.value })
              }
            />

            <select
              style={inputStyle}
              onChange={(e) =>
                setData({ ...data, category: e.target.value })
              }
            >
              <option value="">Select category</option>
              <option>Chest</option>
              <option>Biceps</option>
              <option>Triceps</option>
              <option>Legs</option>
              <option>Shoulders</option>
              <option>Abs</option>
              <option>Back</option>
                  <option>cardio</option>
                            <option>Forearms</option>
              <option>Warm-up</option>
            </select>

            <select
              style={inputStyle}
              onChange={(e) =>
                setData({ ...data, difficulty: e.target.value })
              }
            >
              <option value="">Select difficulty</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <input
              type="text"
              placeholder="Equipment"
              style={inputStyle}
              onChange={(e) =>
                setData({ ...data, equipment: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Duration (minutes)"
              style={inputStyle}
              onChange={(e) =>
                setData({ ...data, duration: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Reps"
              style={inputStyle}
              onChange={(e) =>
                setData({ ...data, rep: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Sets"
              style={inputStyle}
              onChange={(e) =>
                setData({ ...data, set: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Rest time"
              style={inputStyle}
              onChange={(e) =>
                setData({ ...data, rest: e.target.value })
              }
            />

            <select
              style={inputStyle}
              onChange={(e) =>
                setData({ ...data, workoutType: e.target.value })
              }
            >
              <option value="">Workout Type</option>
            <option value="Gym">Gym workouts</option>
<option value="Home">Home workouts</option>

            </select>

            <textarea
              rows={4}
              placeholder="Description"
              style={{ ...inputStyle, resize: "none" }}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Image URL"
              style={inputStyle}
              onChange={(e) =>
                setData({ ...data, imageUrl: e.target.value })
              }
            />

          
            <label htmlFor="uploads">
              <input onChange={(e)=>onImageClick(e)}
                type="file"
                id="uploads"
                style={{ display: "none" }}
               
              />
              <img src={preview} alt="" style={{ width: "120px" }} />
            </label>

           


            {
              previewArray.length>0 && 
              <div className="">

                {
                  previewArray.map((eachpreview)=>(
                     <img src={eachpreview} alt="" style={{ width: "120px" }} />
                  ))
                }
                {
                  previewArray.length<2&&
                   <label htmlFor="plus">
                    <input
                      type="file"
                      id="plus"
                      style={{ display: "none" }}
                  onChange={(e)=>onImageClick(e)}
                    />
                    <img
                      style={{ width: "52px" }}
                      src="https://t4.ftcdn.net/jpg/16/70/72/57/360_F_1670725765_YzsfYpQzTKlKCGSiicEbb8iNGjvejH69.jpg"
                      alt=""
                    />
                  </label>
                }
            
              </div>
            }

            <div style={{ marginTop: "20px" }}>
              <Button onClick={exerciseAdd} variant="dark">
                Add Exercise
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  outline: "none",
};

export default ExerciseAdmin;
