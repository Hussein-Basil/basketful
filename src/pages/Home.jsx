import React, { useState, useEffect } from "react";
import { Products } from "../features/product";
import { Ad, Carousel, Features } from "../features/home";
import Ramadan from "../assets/ramadan.svg";
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
            title: "Ramadan Kareem",
            description:
              "We wish you a happy fasting month with your family and loved ones",
            image: Ramadan,
          },
          {
            title: "Ramadan Kareem",
            description:
              "We wish you a happy fasting month with your family and loved ones",
            image: Ramadan,
          },
        ]}
      />
      <Features />
      <Products title="Best Sellers" items={products} />
      <Ad
        text="Basketful is CS50's Graduation Project"
        link="/cs50-graduate-project"
      />
      <Products title="Offers" items={products} />
      <Products title="Featured" items={products} />
    </div>
  );
};

export default Home;
