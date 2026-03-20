import axiosConfig from "./axiosConfig";
import { baseUrl } from "./baseUrl";
 export const registerUser = async (reqbody) => {
  return await axiosConfig("post", baseUrl + "/registerUser", reqbody);
};
export const loginUser=async(reqbody)=>{
  return await axiosConfig("post",baseUrl+"/loginUser",reqbody)
}
export const googleLoginApi=async(reqbody)=>{
  return await axiosConfig("post",baseUrl+'/googleLoginApi',reqbody)
}
export const addproduct=async(reqbody,reqHeader)=>{
  return await axiosConfig("post",baseUrl+'/addproducts',reqbody,reqHeader)
}
export const  getLimtedProducts=async()=>{
  return await axiosConfig("get",baseUrl+"/getLimtedProducts","")
}
export const getAllProducts=async()=>{
  return await axiosConfig("get",baseUrl+'/getAllProducts',"")
}
export const nutrientsAdd=async(reqbody,reqHeader)=>{
  return await axiosConfig("post",baseUrl+'/nutrientsAdd',reqbody,reqHeader)
}
export const allnutrienst=async(reqHeader)=>{
  return await axiosConfig("get",baseUrl+'/allnutrienst',"",reqHeader)
}
export const addExcersice=async(reqbody,reqHeader)=>{
  return await axiosConfig("post",baseUrl+'/addWorkout',reqbody,reqHeader)
}
export const getWorkout=async(reqHeader)=>{
  return await axiosConfig("get",baseUrl+'/getWorkout',"",reqHeader)
}
export const getSingleWorkout = async (id, reqHeader) => {
  return await axiosConfig(
    "get",
    `${baseUrl}/getSingleWorkout/${id}`,
    "",
    reqHeader
  );
};
export const getallUser=async(reqHeader)=>{
  return await axiosConfig("get",baseUrl+'/getAllUsers',"",reqHeader)
}
export const createCheckoutSession = async () => {
  return await axiosConfig(
    "post",
 baseUrl + "/api/create-checkout-session",

    {},
  );
};
export const getseller = async (reqHeader) => {
  return await axiosConfig(
    "get",
    baseUrl + "/getSellerProfile",
    "",
    reqHeader
  );
};


