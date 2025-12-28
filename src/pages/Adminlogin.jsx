import React from "react";
import "./Admin.css";

const AuthCard = () => {
  return (
    <div className="body1">
    

      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className=" headspan mb-0 pb-3">
                  <span>Admin </span>
                  <span>Seller</span>
                </h6>

                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label className="labe" htmlFor="reg-log"></label>

                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                   
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Admin</h4>

                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>

                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>

                          <a href="#" className="anchor mt-4">
                            submit
                          </a>

                          <p className="paa1 mb-0 mt-4 text-center">
                          <p className="paa1mt-3">forgot </p>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Seller</h4>

                          <div className="form-group">
                           
                            <i className="input-icon uil uil-user"></i>
                          </div>

                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>

                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                            />
                            <p className="paa1mt-3">New here? </p>
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>

                          <a href="#" className=" anchor mt-4">
                            Log in
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End Back */}
                  </div>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
