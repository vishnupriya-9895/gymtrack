import React, { useState } from "react";
import { googleLoginApi, loginUser, registerUser } from "../services/allApi";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    email: "",
    userType: "user",
  });

  const navigate = useNavigate();

  const onRegisterClick = async () => {
    try {
      let apiresponse = await registerUser(userData);
      if (apiresponse.status == 201) {
        toast.success("successfully registerd");
        if (apiresponse.data.userType == "seller") {
          navigate("/sellerhome");
        } else {
          navigate("/");
        }
      } else {
        toast.error(apiresponse.response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  const onLoginClick = async () => {
    try {
      let reqbody = {
        email: userData.email,
        password: userData.password,
      };
      let apiresponse = await loginUser(reqbody);
      if (apiresponse.status == 200) {
        toast.success("login succesfully");
        localStorage.setItem("token", apiresponse.data.token);

        if (apiresponse.data.userType == "seller") {
          navigate("/sellerhome");
        } else {
          navigate("/");
        }
      } else {
        toast.error(apiresponse.response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  const decodeFn = async (credentials) => {
    console.log(credentials);
    let decodeData = jwtDecode(credentials.credential);
    console.log(decodeData);
    let payload = {
      userName: decodeData.name,
      email: decodeData.email,
      proPic: decodeData.picture,
      userType: userData.userType,
    };
    let apiresponse = await googleLoginApi(payload);
    console.log(apiresponse);
    if (apiresponse.status == 200 || apiresponse.status == 201) {
      toast.success(apiresponse.data.message);
      localStorage.setItem("token", apiresponse.data.token);

      if (apiresponse.data.userType == "seller") {
        navigate("/sellerhome");
      } else {
        navigate("/");
      }
    } else {
      toast.error(apiresponse.response.data.message);
    }
  };

  return (
    <div className="profile">
      <div className="main">
        <input className="inp" type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <div className="">
            <label className="lab" htmlFor="chk" aria-hidden="true">
              sign up
            </label>

            <input
              onChange={(e) =>
                setUserData({ ...userData, userName: e.target.value })
              }
              className="inp"
              type="text"
              placeholder="User name"
              required
            />

            <input
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="inp"
              type="email"
              placeholder="Email"
              required
            />

            <select
              className="inp"
              value={userData.userType}
              onChange={(e) =>
                setUserData({ ...userData, userType: e.target.value })
              }
            >
              <option value="user"> User</option>
              <option value="seller">Seller</option>
            </select>

            <input
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              className="inp"
              type="password"
              placeholder="Password"
              required
            />

            <div className="googlewrapper  ms-5 me-5">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  decodeFn(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
            <button
              onClick={onRegisterClick}
              type="button"
              className="butpro bg-white text-black"
            >
              Sign up
            </button>
          </div>
        </div>

        <div className="login">
          <div>
            <label className="lab" htmlFor="chk" aria-hidden="true">
              Login
            </label>

            <input
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="inp"
              type="email"
              placeholder="Email"
              required
            />

            <input
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              className="inp"
              type="password"
              placeholder="Password"
              required
            />

            <button onClick={onLoginClick} className="butpro">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
