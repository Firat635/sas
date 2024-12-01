import React, { useState } from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosArrowDown } from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { IoDiamond } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Register } from "../register/Register";
import { useDispatch, useSelector } from "react-redux";
import { setSearchProduct } from "../../redux/feature/product/ProductSlice";

const Header = () => {
  const [drop, setDrop] = useState(false);
  const [register, setRegister] = useState(false);
  const dispatch = useDispatch();

  let { searchProduct, data, findProduct, errorMessage } = useSelector(
    (state) => state.product
  );
  const handleSearch = (e) => {
    dispatch(setSearchProduct(e.target.value));

  };

  const getUser = () => {
    setRegister(!register);
  };

  return (
    <header id="header">
      <div className="containerTop">
        <div className="topHeader">
          <div className="topHeaderText">
            <p>
              Special collection already available.{" "}
              <a href="http://">Read more ...</a>
            </p>
          </div>
          <div className="topHederTextLeft">
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li className="textTopPrice">
                <a href="/">
                  USD <IoIosArrowDown />
                </a>
                <div className="textTopBox">
                  <ul>
                    <li>
                      <a href="/">AUD</a>
                    </li>
                    <li>
                      <a href="/">EUR</a>
                    </li>
                    <li>
                      <a href="/">INR</a>
                    </li>
                    <li>
                      <a href="/">JPY</a>
                    </li>
                    <li>
                      <a href="/">USD</a>
                    </li>
                    <li>
                      <a href="/">VND</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="middleHeader py-4">
          <div className="logoBox">
            <a href="/">
              <img
                src="https://midas-theme.myshopify.com/cdn/shop/files/logo_c1cc906b-de91-4cb3-840b-9c2dd7e81e2a_125x@2x.png?v=1614727356"
                alt=""
              />
            </a>
          </div>
          <div className="headerFrom">
            <form>
              <input
                 type="text"
                 placeholder="Search for a product..."
                 value={searchProduct}
                 onChange={handleSearch}
              />
              <select>
                <option value>All Categories</option>
                <option value="Accessories">Accessories</option>
                <option value="Action & adventure">Action & adventure</option>
                <option value="Appliances">Appliances</option>
                <option value="Armchair">Armchair</option>
                <option value="Audio">Audio</option>
                <option value="Bag">Bag</option>
                <option value="bags">bags</option>
                <option value="Boots">Boots</option>
                <option value="bottoms">bottoms</option>
                <option value="Camera">Camera</option>
                <option value="Cardigan">Cardigan</option>
                <option value="Chairs">Chairs</option>
                <option value="Clog">Clog</option>
                <option value="Coat">Coat</option>
                <option value="Controller">Controller</option>
                <option value="Cooking Appliances">Cooking Appliances</option>
                <option value="Cookware">Cookware</option>
                <option value="Dinnerware">Dinnerware</option>
                <option value="Dresses">Dresses</option>
                <option value="Earrings">Earrings</option>
                <option value="Furniture">Furniture</option>
                <option value="Game">Game</option>
                <option value="Glassess">Glassess</option>
                <option value="Hoodie">Hoodie</option>
                <option value="Jacket">Jacket</option>
                <option value="jacket & vest">jacket & vest</option>
                <option value="jackets & vest">jackets & vest</option>
                <option value="jackets & vests">jackets & vests</option>
                <option value="Jeggings">Jeggings</option>
                <option value="Jumper">Jumper</option>
                <option value="Jumpsuit">Jumpsuit</option>
                <option value="Lamp">Lamp</option>
                <option value="Latop">Latop</option>
                <option value="Necklace">Necklace</option>
                <option value="Picnic gear">Picnic gear</option>
                <option value="Rings">Rings</option>
                <option value="Role playing">Role playing</option>
                <option value="Sandals">Sandals</option>
                <option value="Shirt">Shirt</option>
                <option value="Shoes">Shoes</option>
                <option value="Short">Short</option>
                <option value="Sneakers">Sneakers</option>
                <option value="Sofa">Sofa</option>
                <option value="Sound">Sound</option>
                <option value="Sweatshirt">Sweatshirt</option>
                <option value="T-shirt">T-shirt</option>
                <option value="T-shirts">T-shirts</option>
                <option value="Tables">Tables</option>
                <option value="Top">Top</option>
                <option value="tops">tops</option>
                <option value="Trousers">Trousers</option>
                <option value="TV">TV</option>
                <option value="Watch">Watch</option>
              </select>
              <button className="searchBox">
                <LiaSearchSolid className="searchBoxIcon" />
              </button>
            </form>
          </div>
          <div className="headerIconBox">
            <div className="heartIconTextBox">
              <a onClick={getUser} href="#">
                <AiOutlineUser className="iconText" />
                <p>Account</p>
              </a>
            </div>
            <div className="heartIconTextBox">
              <a className="iconTextBoxBefore" href="#">
                <FaRegHeart className="iconText" />
                <p>Wishlist</p>
              </a>
            </div>
            <div className="heartIconTextBox">
              <a className="iconTextBoxBefore" href="/addtocart">
                <PiShoppingCart className="iconText" />
                <p>Cart</p>
              </a>
            </div>
          </div>
        </div>
        <div className="endHeader">
          <div className="endHeaderBoxAll">
            <div className="endHeaderBox">
              <div
                onClick={() => setDrop(!drop)}
                className={drop ? " open headerDropdown" : "headerDropdown"}
                id="headerDropdownBox"
              >
                <button className={drop ? "active dropdownBtn" : "dropdownBtn"}>
                  <span className="hamburgerBox"></span>
                </button>
                <span className="dropdownText">Browse Categories</span>
                <ul className="dropdownMenu">
                  <li>
                    <a href="#" className="colorTextBlack">
                      Daily offers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="colorTextBlack">
                      Gift Ideas
                    </a>
                  </li>
                  <li>
                    <a href="#">Beds</a>
                  </li>
                  <li>
                    <a href="#">Lighting</a>
                  </li>
                  <li>
                    <a href="#">Sofas & Sleeper sofas</a>
                  </li>
                  <li>
                    <a href="#">Storage</a>
                  </li>
                  <li>
                    <a href="#">Armchairs & Chaises</a>
                  </li>
                  <li>
                    <a href="#">Decoration </a>
                  </li>
                  <li>
                    <a href="#">Kitchen Cabinets</a>
                  </li>
                  <li>
                    <a href="#">Coffee & Tables</a>
                  </li>
                  <li>
                    <a href="#">Outdoor Furniture</a>
                  </li>
                </ul>
              </div>
              <div className="navMenuBox">
                <nav className="navMenu">
                  <ul>
                    <li>
                      <a href="/">
                        HOME <IoIosArrowDown className="iconHome" />
                        <div className="homeWebPhotoBox">
                          <div className="homeWebInfo">
                            <div className="homeTextInfo">
                              <p>choose your demo</p>
                            </div>
                            <div className="homePhotoInfo">
                              <div className="homePhotoBox">
                                <a
                                  className="mb-2 storeText textBefore"
                                  href="/"
                                >
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/001_homepage_furniture.jpg?v=1575682107"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/02_Home01.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://"> 01 - Furniture Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/02_Home01-rtl.jpg?v=1576902236"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/02_Home01rtl.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://"> 01 - Furniture Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a
                                  className="mb-2 storeText textBefore"
                                  href="/"
                                >
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/002_homepage_furniture.jpg?v=1575682107"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/02_Home01rtl.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://"> 02 - Furniture Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText" href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/004_homepage_electronic.jpg?v=1575682107"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/03_Home02.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">03 - Electronic Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/003_homepage_electronic_d0518f13-4c40-423c-a5f9-f7c27ae72c1e.jpg?v=1575682105"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/04_Home03.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">03 - Electronic Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/005_homepage_fashion.jpg?v=1575682106"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/05_Home04.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://"> 05 - Furniture Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/006_homepage_fashion.jpg?v=1575682107"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/06_Home05.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://"> 06 - Furniture Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/007_homepage_fashion.jpg?v=1575682107"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/07_Home06.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://"> 07 - Furniture Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/008_homepage_fashion.jpg?v=1575682106"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/08_Home07.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://"> 08 - Furniture Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a
                                  className="mb-2 storeText textBefore"
                                  href="/"
                                >
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/009_homepage_fashion.jpg?v=1575682106"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/09_Home08.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://"> 09 - Furniture Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/010_homepage_shoes_store.jpg?v=1575682107"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/10_Home09.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">10 - Shoes Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/001_homepage_furniture.jpg?v=1575682107"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/02_Home01.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://"> 11 - Furniture Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/012_homepage_fashion_simple.jpg?v=1575682105"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/12_Home11.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://"> 12 - Furniture Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a
                                  className="mb-2 storeText textBefore"
                                  href="/"
                                >
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/013_homepage_market.jpg?v=1575682106"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/13_Home12.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://"> 13 - Market Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a
                                  className="mb-2 storeText textBefore"
                                  href="/"
                                >
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/014_homepage_market_fullwidth.jpg?v=1575682106"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/14_Home13.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://"> 14 - Furniture Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/015_homepage_lookbook.jpg?v=1575682107"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/15_Home14.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">15 - Lookbook Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/016_homepage_lookbook_2.jpg?v=1575682107"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/16_Home15.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">16 - Lookbook Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a
                                  className="mb-2 storeText textBefore "
                                  href="/"
                                >
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/0017_homepage_fashion_banners.jpg?v=1575682108"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/17_Home16.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">17 - Market Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText" href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/018_homepage_fashion_sidebar.jpg?v=1575682106"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/18_Home17.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">18 - Fashion Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText" href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/019_homepage_games.jpg?v=1575682107"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/19_Home18.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">19 - Game Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText" href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/020_homepage_books.jpg?v=1575682106"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/20_Home19.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">20 - Book Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/021_homepage_sport.jpg?v=1575682107"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/21_Home20.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">21 - Sport</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText" href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/022_homepage_tools.jpg?v=1575682107"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/22_Home21.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">22 - Tools</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/023_homepage_fashion.jpg?v=1578474690"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/23_Home22.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">23 - Fashion</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText" href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/024_homepage_extreme_sport.jpg?v=1581654629"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/24_Home23.png?v=1577777609"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">24 - Extreme Sport</a>
                              </div>
                              <div className="homePhotoBox">
                                <a
                                  className="mb-2 storeText textBefore"
                                  href="/"
                                >
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/025_homepage_jewelry.jpg?v=1585042940"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/25_Home24.png?v=1581654794"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">25 - Jewelry</a>
                              </div>
                              <div className="homePhotoBox">
                                <a
                                  className="mb-2 storeText textBefore"
                                  href="/"
                                >
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/26_homepage_market.jpg?v=1585042945"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/26_Home25.png?v=1581654794"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">26 - Market Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/027_homepage_lookbook_3.jpg?v=1605087799"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/27_Home26.png?v=1581654794"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">27 - Lookbook Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/028_food_market.jpg?v=1585042940"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/28_Home27.png?v=1581654794"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">28 - Food Market</a>
                              </div>

                              <div className="homePhotoBox">
                                <a className="mb-2 storeText " href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/029_t-shirts_store.jpg?v=1585042940"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/29_Home28.png?v=1593403094"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">29 - T-Shirt Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText" href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/030_headphones_oneproduct_store.jpg?v=1585042941"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/30_Home29.png?v=1591150727"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">30 - One Product</a>
                              </div>
                              <div className="homePhotoBox">
                                <a className="mb-2 storeText" href="/">
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/031_yoga_store.jpg?v=1585211403"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/31_Home30.png?v=1590545038"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">31 - Yoga Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a
                                  className="mb-2 storeText textBeforeNew"
                                  href="/"
                                >
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/032_sunglasses_store.jpg?v=1610528896"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/32_Home31.png?v=1592531952"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">32 - Sunglasses Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a
                                  className="mb-2 storeText textBeforeNew"
                                  href="/"
                                >
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/033_cosmetics_store.jpg?v=1610528868"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/34_Home33.png?v=1612666702"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">33 - Cosmetics Store</a>
                              </div>
                              <div className="homePhotoBox">
                                <a
                                  className="mb-2 storeText textBeforeNew"
                                  href="/"
                                >
                                  <span className="homeHeaderPhotoBoxOne">
                                    <img
                                      className="headerHoverBoxPhoto"
                                      src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/034_car_part.jpg?v=1610528647"
                                      alt=""
                                    />
                                  </span>
                                  <span className="homeHeaderPhotoBoxTwo">
                                    <a href="http://">
                                      <img
                                        src="https://cdn.shopify.com/s/files/1/0264/6972/8316/files/34_Home33.png?v=1613816120"
                                        alt=""
                                      />
                                    </a>
                                  </span>
                                </a>

                                <a href="http://">34 - Car part</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        SHOP <IoIosArrowDown className="iconHome" />
                        <div className="shopWebBox">
                          <div className="shopWebInfo">
                            <ul>
                              <li>
                                <a className="headerColorBlack" href="/">
                                  Shop with sidebar
                                </a>
                              </li>
                              <li>
                                <a href="/">Shop List</a>
                              </li>
                              <li>
                                <a href="/">Shop Grid 4 Columns</a>
                              </li>
                              <li>
                                <a href="/">Shop Grid 3 Columns</a>
                              </li>
                              <li>
                                <a href="/">Shop Grid 2 Columns</a>
                              </li>
                              <li>
                                <a className="beforeNewText" href="/">
                                  Shop Market
                                </a>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <a className="headerColorBlack" href="/">
                                  Shop no sidebar
                                </a>
                              </li>
                              <li>
                                <a href="/">Shop Boxed No Sidebar</a>
                              </li>
                              <li>
                                <a className="afterNewText" href="/">
                                  Shop Fullwidth No Sidebar
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="shopWebInfo">
                            <ul>
                              <li>
                                <a className="headerColorBlack" href="/">
                                  Product Category
                                </a>
                              </li>
                              <li>
                                <a className="beforeNewText" href="/">
                                  Product Category Boxed
                                </a>
                              </li>
                              <li>
                                <a href="/">Product Category Fullwidth</a>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <a className="headerColorBlack" href="/">
                                  Shop Pages
                                </a>
                              </li>
                              <li>
                                <a href="/">My Account</a>
                              </li>
                              <li>
                                <a href="/">Wishlist</a>
                              </li>
                              <li>
                                <a href="/">Cart</a>
                              </li>
                              <li>
                                <a href="/">Cart Dropdown</a>
                              </li>
                              <li>
                                <a className="beforeNewText" href="/">
                                  Cart Popup
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="shopWebInfo">
                            <ul>
                              <li>
                                <a className="afterNewText" href="/">
                                  Cart Drawer
                                </a>
                              </li>
                              <li>
                                <a href="/">Shipping rates calculator</a>
                              </li>
                              <li>
                                <a className="afterNewText" href="/">
                                  Threshold free shipping
                                </a>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <a className="headerColorBlack" href="/">
                                  Shop Options
                                </a>
                              </li>
                              <li>
                                <a href="/">Masonry Layout</a>
                              </li>
                              <li>
                                <a href="/">Load more button</a>
                              </li>
                              <li>
                                <a href="/">Infinite scrolling</a>
                              </li>
                              <li>
                                <a href="/">Filter sidebar</a>
                              </li>
                              <li>
                                <a href="/">Filter drawer</a>
                              </li>
                            </ul>
                          </div>
                          <div className="shopWebInfo">
                            <ul className="shopWebInfoPhoto">
                              <li>
                                <a href="/">
                                  <img
                                    src="https://midas-theme.myshopify.com/cdn/shop/files/banner-1.jpg?v=1614724435"
                                    alt=""
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        PRODUCT <IoIosArrowDown className="iconHome" />
                        <div className="productWebBox">
                          <div className="productWebInfo">
                            <ul>
                              <li>
                                <a className="headerColorBlack" href="/">
                                  Product Details
                                </a>
                              </li>
                              <li>
                                <a href="/">Default</a>
                              </li>
                              <li>
                                <a href="/">Centered</a>
                              </li>
                              <li>
                                <a href="/">Extended Info</a>
                              </li>
                              <li>
                                <a href="/">Gallery</a>
                              </li>
                              <li>
                                <a href="/">Sticky Info</a>
                              </li>
                              <li>
                                <a href="/">Boxed With Sidebar</a>
                              </li>
                              <li>
                                <a href="/">Full Width</a>
                              </li>

                              <li>
                                <a href="/">Masonry Sticky Info</a>
                              </li>
                              <li>
                                <a className="afterNewText" href="/">
                                  Disable default variantHot
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="productWebInfo">
                            <ul>
                              <li>
                                <a className="headerColorBlack" href="/">
                                  Product Options
                                </a>
                              </li>
                              <li>
                                <a href="/">Product video</a>
                              </li>
                              <li>
                                <a className="beforeNewText" href="/">
                                  Product 3D-AR
                                </a>
                              </li>
                              <li>
                                <a href="/">Product Pre-order</a>
                              </li>
                              <li>
                                <a href="/">Product External / Affiliate</a>
                              </li>
                              <li>
                                <a href="/">Products Grouped</a>
                              </li>
                              <li>
                                <a href="/">Sticky add to cart</a>
                              </li>
                              <li>
                                <a href="/">Variant Images Grouped</a>
                              </li>
                              <li>
                                <a className="beforeNewText" href="/">
                                  Shipping info by location
                                </a>
                              </li>
                              <li>
                                <a className="beforeNewText" href="/">
                                  Delivery period
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="productWebInfo">
                            <ul className="shopWebInfoPhoto">
                              <li>
                                <a href="/">
                                  <img
                                    src="https://midas-theme.myshopify.com/cdn/shop/files/banner-2.jpg?v=1614724435"
                                    alt=""
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        PAGES <IoIosArrowDown className="iconHome" />
                        <div className="pagesWebBox">
                          <div className="pagesWebInfo">
                            <ul>
                              <li>
                                <a href="/">
                                  About <IoIosArrowForward />
                                  <div className="rightDropDown">
                                    <ul>
                                      <li>
                                        <a href="/">About 01</a>
                                      </li>
                                      <li>
                                        <a href="/">About 02</a>
                                      </li>
                                    </ul>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  Contact <IoIosArrowForward />
                                  <div className="rightDropDown">
                                    <ul>
                                      <li>
                                        <a href="/">Contact 01</a>
                                      </li>
                                      <li>
                                        <a href="/">Contact 02</a>
                                      </li>
                                    </ul>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  Login <IoIosArrowForward />
                                  <div className="rightDropDown">
                                    <ul>
                                      <li>
                                        <a href="/">Login Modal</a>
                                      </li>
                                      <li>
                                        <a href="/">Login page</a>
                                      </li>
                                    </ul>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="/">FAQs</a>
                              </li>
                              <li>
                                <a href="/">Error 404</a>
                              </li>
                              <li>
                                <a href="/">Coming Soon</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        BLOG <IoIosArrowDown className="iconHome" />
                        <div className="blogWebBox">
                          <div className="blogWebInfo">
                            <ul>
                              <li>
                                <a href="/">Classic</a>
                              </li>
                              <li>
                                <a href="/">Listing</a>
                              </li>
                              <li>
                                <a href="/">
                                  Grid <IoIosArrowForward />
                                  <div className="leftDropDown">
                                    <ul>
                                      <li>
                                        <a href="/">Grid 2 columns</a>
                                      </li>
                                      <li>
                                        <a href="/">Grid 3 columns</a>
                                      </li>
                                      <li>
                                        <a href="/">Grid 4 columns</a>
                                      </li>
                                      <li>
                                        <a href="/">Grid sidebar</a>
                                      </li>
                                    </ul>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  Masonry <IoIosArrowForward />
                                  <div className="leftDropDown">
                                    <ul>
                                      <li>
                                        <a href="/">Blog masonry grid</a>
                                      </li>
                                      <li>
                                        <a href="/">Blog masonry sidebar</a>
                                      </li>
                                    </ul>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  Mask <IoIosArrowForward />
                                  <div className="leftDropDown">
                                    <ul>
                                      <li>
                                        <a href="/">Blog mask grid</a>
                                      </li>
                                      <li>
                                        <a href="/">Blog mask masonry</a>
                                      </li>
                                    </ul>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  Single Post <IoIosArrowForward />
                                  <div className="leftDropDown">
                                    <ul>
                                      <li>
                                        <a href="/">Default with sidebar</a>
                                      </li>
                                      <li>
                                        <a href="/">Fullwidth no sidebar</a>
                                      </li>
                                      <li>
                                        <a href="/">Fullwidth with sidebar</a>
                                      </li>
                                    </ul>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="saleText">
                        BUY MOLLA
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="headerDiscountBox">
                <a href="http://">
                  <IoDiamond className="diamondIcon" /> <span>Clearance</span>{" "}
                  Up to 30% Off
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {register ? <Register /> : null}
    </header>
  );
};

export default Header;
