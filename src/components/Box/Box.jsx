import React, { useState, useEffect } from "react";
import "./box.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const Box = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();  

  const [cartItem, setCartItem] = useState(item);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((cartItem) => cartItem.id === item.id);
    if (existingProduct) {
      setCartItem(existingProduct);  
    }
  }, [item.id]);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((cartItem) => cartItem.id === item.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItem({ ...item, quantity: (existingProduct ? existingProduct.quantity + 1 : 1) }); 
  };

  const handleRemoveFromCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((cartItem) => cartItem.id !== item.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItem(null); 
  };

  if (!cartItem) return null;

  return (
    <div className={cartItem.quantity && location.pathname === "/addtocart" ? "box quantity" : "box"}>
      {location.pathname === "/addtocart" ? (
        <div className="wish">
          <IoCloseSharp
            className="text-danger bg-black rounded"
            onClick={handleRemoveFromCart}
          />
        </div>
      ) : (
        <div className="wish">
          <FaRegHeart className="heartIcon" />
          <GrOverview className="glassIcon" />
        </div>
      )}

      <div className="img">
        <img src={cartItem.image} alt="product" />
        <div className="hidden">
          <img src={cartItem.image} alt="other Product" />
        </div>
      </div>
      <div className="box-body d-flex flex-column gap-1">
        <span className="title">Molla</span>
        <p onClick={() => navigate(`/detail/${cartItem.id}`)}>{cartItem.title}</p>
        {cartItem.quantity && location.pathname === "/addtocart" ? <span>quantity: {cartItem.quantity}</span> : null}
        <span>${cartItem.price}</span>
        <div className="rating d-flex">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>
      </div>
      <div className="btn">
        <button onClick={handleAddToCart}>
          <MdAddShoppingCart /> ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Box;
