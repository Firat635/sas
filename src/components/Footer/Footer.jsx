import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row headOne">
          <div className="row">
            <div className="col-xl-6 col-md-12 col-sm-12">
              <div className="foot-left">
                <div className="logo">
                  <img
                    src="https://midas-theme.myshopify.com/cdn/shop/files/logo_c1cc906b-de91-4cb3-840b-9c2dd7e81e2a_125x@2x.png?v=1614727356"
                    alt="logo"
                  />
                </div>
                <p>
                  Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                  augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                  Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                  luctus, metus.
                </p>
                <div className="contact">
                  <div className="row">
                    <div className="col-xl-5 col-md-6 col-sm-12 mt-3">
                      <span>Got Question? Call us 24/7</span>
                      <p>+98 765 432</p>
                    </div>
                    <div className="col-xl-7 col-md-6 col-sm-12 my-3 imgHead">
                      <span>Payment Method</span>
                      <div className="img">
                        <img
                          src="https://midas-theme.myshopify.com/cdn/shop/files/payments.png?v=1614721656"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-xl-4 col-md-4 col-sm-4 col-12">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>About Midas</li>
                    <li>How to shop on Molla</li>
                    <li>FAQ</li>
                    <li>Contact us</li>
                    <li>Log in</li>
                  </ul>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-4 col-12">
                  <h4>Customer Service</h4>
                  <ul>
                    <li>Payment Methods</li>
                    <li>Money-back guarantee!</li>
                    <li>Returns</li>
                    <li>Shipping</li>
                    <li>Terms and conditions</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-4 col-12">
                  <h4>My Account</h4>
                  <ul>
                    <li>Sign In</li>
                    <li>View Cart</li>
                    <li>My Wishlist</li>
                    <li>Shipping</li>
                    <li>Track My Order</li>
                    <li>Help</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot-bottom d-flex justify-content-between">
            <p>Copyright © 2019 Molla Store. All Rights Reserved. Terms / Privacy Policy</p>
            <div className="left d-flex align-items-center gap-4  ">
                <span >Social Media</span>
                <div className="shared">
                    <ul className="d-flex align-items-center gap-2 ">
                        <li>
                            <a className="fs-6" href="#"><FaFacebookF className="blue"/></a>
                        </li>
                        <li>
                            <a className="fs-6" href="#"><FaTwitter className="blueLight"/></a>
                        </li>
                        <li>
                            <a className="fs-6" href="#"><FaInstagram className="red"/></a>
                        </li>
                        <li>
                            <a className="fs-6" href="#"><FaYoutube className="red"/></a>
                        </li>
                        <li>
                            <a className="fs-6" href="#"><FaPinterestP className="red"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
