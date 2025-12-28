import React from "react";
import Header from "../Components/Header";


const Login = () => {
  return (
  
   <div className="profile">
    
   
  
       
     <div className="main">
      <input className="inp" type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form>
          <label className="lab" htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input className="inp" type="text" placeholder="User name" required />
          <input className="inp" type="email" placeholder="Email" required />
         <input className="inp" type="password" placeholder="Password" required />
<select
  className="inp"
  required
 
>
 
  <option value="buyer">Buyer</option>
  <option value="seller">Seller</option>
</select>

          <button className="butpro">Sign up</button>
        </form>
      </div>

      <div className="login">
        <form>
          <label className="lab" htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input className="inp" type="email" placeholder="Email" required />
          <input className="inp" type="password" placeholder="Password" required />
          <button  className="butpro">Login</button>
        </form>
      </div>
    </div>
   </div>
  );
};

export default Login;
