import React, { useState } from "react";
import "./register.css";
import { IoIosArrowRoundForward } from "react-icons/io";

export const Register = () => {
 
  const [activeForm, setActiveForm] = useState("signIn");
  const [isVisible, setIsVisible] = useState(true);  
  const closeSection = () => {
    setIsVisible(false);  
  };

  return (
   
    <section id="registerSection" style={{ display: isVisible ? "flex" : "none" }}>
      <div className="registerAllBox">
       
        <div className={`registerBox ${activeForm === "signIn" ? "active" : ""}`}>
          <div className="registerHeadText">
            <a
              className="formSign"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveForm("signIn");
              }}
            >
              Sign In
            </a>

            <a
              className="formRegister"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveForm("register");
              }}
            >
              Register
            </a>
          </div>
          <form className="form">
            <label>Email address *</label>
            <input type="email" />
            <label>Password *</label>
            <input type="password" />
            <div className="formBtnBox">
              <button>
                Sign In <IoIosArrowRoundForward />
              </button>
              <a href="/">Forgot Your Password?</a>
            </div>
          </form>
        </div>

        
        <div
          className={`registerBoxTwo ${activeForm === "register" ? "active" : ""}`}
        >
          <div className="registerHeadText">
            <a
              className="formSign"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveForm("signIn");
              }}
            >
              Sign In
            </a>

            <a
              className="formRegister"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveForm("register");
              }}
            >
              Register
            </a>
          </div>
          <form className="form">
            <label>Your email address *</label>
            <input type="email" />
            <label>Password *</label>
            <input type="password" />
            <div className="registerInfoText">
              <input type="checkbox" />
              <span>Subscribe to stay updated with new products and offers!</span>
            </div>
            <div className="formBtnBox">
              <button>
                Register
                <IoIosArrowRoundForward />
              </button>
            </div>
          </form>
        </div>

      
        <button className="btnExt" onClick={closeSection}></button>
      </div>
    </section>
  );
};
