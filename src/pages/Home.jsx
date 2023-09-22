import React, { useState, useEffect } from "react";
import { Products } from "../features/product";
import { Ad, Carousel, Features } from "../features/home";
import DiscountsDesktop from "../assets/file_88.jpg";
import DiscountsMobile from "../assets/file_87.jpg";
import SalesDesktop from "../assets/IMG_1756.jpeg";
import SalesMobile from "../assets/IMG_1755.jpeg";
import axios from "../api/axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("/api/product").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <Carousel
        items={[
          {
            image: DiscountsDesktop,
            mobileImage: DiscountsMobile
          },
          {
            image: SalesDesktop,
            mobileImage: SalesMobile,
          },
        ]}
      />
      <Features />
      <Products title="Best Sellers" items={products} />
      <Ad
        text="Basketful is CS50's Graduation Project"
        link="/cs50-graduate-project"
      />
      <Products title="Offers" items={products}  />
      <Products title="Featured" items={products}  />
    </div>
  );
};

export default Home;
