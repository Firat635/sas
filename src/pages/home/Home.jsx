import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import "bootstrap";
import "./home.css";
import Carousel from "../../components/Carousel/Carousel.jsx";
import { BsArrowRight } from "react-icons/bs";
import CarouselMini from "../../components/CarouselMini/CarouselMini.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CarouselBox from "../../components/carouselBox/CarouselBox.jsx";
import { HiArrowLongRight } from "react-icons/hi2";
import Time from "../../components/Time/Time.jsx";
import { GoRocket } from "react-icons/go";
import { MdOutlineRestartAlt } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, setCategoryFilter } from "../../redux/feature/product/ProductSlice.js";
import Box from "../../components/Box/Box.jsx";
import { Register } from "../../components/register/Register.jsx";
import { IoIosArrowUp } from "react-icons/io";
import { Shop } from "../../components/shop/Shop.jsx";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  let { data, loading, findProduct, searchProduct } = useSelector(
    (state) => state.product
  );
  const handleCategoryClick = (category) => {
    dispatch(setCategoryFilter(category));
  };

  return (
    <>
      <Header />
      <main>
        {searchProduct.trim() ? (
          findProduct && findProduct.length > 0 ? (
            <div className="d-flex flex-wrap boxContainer">
              {findProduct.map((item) => (
                <Box key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <h2 className="text-danger text-center">No products found</h2>
          )
          ) : (
          <>
            <section id="heroSection">
              <Carousel />
              <div className="buttonIconTop">
                <a href="#header">
                  <IoIosArrowUp className="ButtonIconTopArr" />
                </a>
              </div>
            </section>

            <section className="my-4">
              <CarouselMini />
            </section>
            <section id="decorBox">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-5 col-md-6 col-sm-12 ">
                    <div className="decorBoxTables">
                      <p>Clearence</p>
                      <h3>Coffee Tables</h3>
                      <p className="fromText">from $19.99</p>
                      <button>
                        Shop Now <BsArrowRight />
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 col-md-6 col-sm-12 ">
                    <div className="decorBoxKitchenware">
                      <p>On Sale</p>
                      <h3>Kitchenware</h3>
                      <p className="fromText">from $39.00</p>
                      <button className="discoverBtn">
                        Discover Now
                        <BsArrowRight />
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 col-md-12 col-sm-12 ">
                    <div className="decorBoxHomeDecorAll ">
                      <div className="decorBoxHomeDecor">
                        <p>Clearance</p>
                        <h3>Home Decor</h3>
                        <p className="fromText">up to 30% off</p>
                        <button className="discoverBtn">
                          Discover Now
                          <BsArrowRight />
                        </button>
                      </div>
                      <div className="decorBoxHomeDecorBox">
                        <p>New Arrivals</p>
                        <h3>
                          Collection <br />
                          Chairs
                        </h3>
                        <p className="fromText">from $39.00</p>
                        <button className="discoverBtn">
                          Shop Now
                          <BsArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="productsShopBox my-2">
              <div className="container">
                <div className="textBoxAll">
                  <a href="" className="textFeatured">
                    Featured
                  </a>
                  <a href="http://"> On Sale</a>
                  <a href="http://">Top Rated</a>
                </div>
              </div>
              <CarouselBox />
            </section>
            <section id="timeSection">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-9 col-md-8 col-sm-12">
                    <div className="timeBoxAll">
                      <div className="timeBoxAllText">
                        <h5>Limited Quantities</h5>
                        <h1>Deal of the Day</h1>
                        <a href="/">Armchair orrsta golden</a>
                        <p>$149.99</p>
                        <Time />
                        <button>
                          Shop Now <HiArrowLongRight />
                        </button>
                      </div>
                      <div className="timeBoxAllPhoto">
                        <img
                          src="https://midas-theme.myshopify.com/cdn/shop/files/abimg-1.jpg?v=1614781580"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 col-md-4 col-sm-12">
                    <div className="timeSecLeftBox">
                      <p>The Best Choice</p>
                      <h1>Indigo bed linen $49.99</h1>

                      <button>
                        Shop Now <HiArrowLongRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="productsSec">
              <div className="container">
                <h1>Top Selling Products</h1>
                <div className="productsList">
                  <ul>
                    <li>
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          handleCategoryClick("");
                        }}
                        className="allText"
                      >
                        ALL
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          handleCategoryClick("men's clothing");
                        }}
                      >
                        men's clothing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          handleCategoryClick("jewelery");
                        }}
                      >
                        jewelery
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          handleCategoryClick("electronics");
                        }}
                      >
                        electronics
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {loading ? (
                <h2 className="text-center">Loading...</h2>
              ) : (
                <div className="d-flex flex-wrap boxContainer">
                  {findProduct &&
                    findProduct.map((item) => <Box key={item.id} item={item} />)}
                </div>
              )}
            </section>
            <section id="blogSec">
              <div className="container">
                <h2>From Our Blog</h2>
                <div className="row">
                  <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                    <div className="blogBoxAll">
                      <div className="blogBoxPhoto">
                        <img
                          src="https://midas-theme.myshopify.com/cdn/shop/articles/blog-1_9b964edb-8153-4c01-a9a1-95ca56b6eaaa_540x.jpg?v=1610433595"
                          alt=""
                        />
                      </div>
                      <p>Aug 23, 2019</p>
                      <a href="/">Sed adipiscing ornare.</a>
                      <button>
                        VIEW THIS STORE{" "}
                        <HiArrowLongRight className="storeIcon" />
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                    <div className="blogBoxAll">
                      <div className="blogBoxPhoto">
                        <img
                          src="https://midas-theme.myshopify.com/cdn/shop/articles/blog-2_540x.jpg?v=1610433684"
                          alt=""
                        />
                      </div>
                      <p>Aug 22, 2019</p>
                      <a href="/">Nunc dignissim risus.</a>
                      <button>
                        VIEW THIS STORE{" "}
                        <HiArrowLongRight className="storeIcon" />
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                    <div className="blogBoxAll">
                      <div className="blogBoxPhoto">
                        <img
                          src="https://midas-theme.myshopify.com/cdn/shop/articles/blog-3_540x.jpg?v=1610433724"
                          alt=""
                        />
                      </div>
                      <p>Aug 22, 2019</p>
                      <a href="/">Aliquam tincidunt mauris.</a>
                      <button>
                        VIEW THIS STORE{" "}
                        <HiArrowLongRight className="storeIcon" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="blogSecBtnBox">
                  <button>
                    VIEW MORE ARTICLES <HiArrowLongRight />
                  </button>
                </div>
              </div>
            </section>
            <section id="homeEndSection">
              <div className="container py-5">
                <div className="row">
                  <div className="col-12 col-lg-3 col-md-6 col-sm-6 ">
                    <div className="freeBox">
                      <GoRocket className="freeIcon" />
                      <div className="freeText">
                        <h6> Free Shipping</h6>
                        <p>Orders $50 or more</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 col-md-6 col-sm-6">
                    <div className="freeBox">
                      <MdOutlineRestartAlt className="freeIcon" />

                      <div className="freeText">
                        <h6>Free Returns</h6>
                        <p>Within 30 days</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 col-md-6 col-sm-6">
                    <div className="freeBox">
                      <IoIosInformationCircleOutline className="freeIcon" />

                      <div className="freeText">
                        <h6>Get 20% Off 1 Item</h6>
                        <p>when you sign up</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 col-md-6 col-sm-6">
                    <div className="freeBox">
                      <IoHelpBuoyOutline className="freeIcon" />

                      <div className="freeText">
                        <h6>We Support</h6>
                        <p>24/7 amazing services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="endSectionBox">
                <h5>Get The Latest Deals</h5>
                <p>and receive $20 coupon for first shopping</p>
                <form>
                  <input type="email" placeholder="Enter your Email Address" />
                  <button>
                    Subscribe <BsArrowRight />
                  </button>
                </form>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Home;
