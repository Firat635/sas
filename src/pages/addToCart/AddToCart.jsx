import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import Box from "../../components/Box/Box";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCartItems);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section>
          <h2 className="text-center">Add to Cart</h2>
          <div className="cart-container">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="d-flex m-4 flex-wrap ">
                {cartItems.map((item, index) => (
                  <Box key={index} item={item} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AddToCart;
