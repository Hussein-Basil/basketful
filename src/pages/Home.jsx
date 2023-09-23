import React, { useState, useEffect } from "react";
import { Products } from "../features/product";
import { Ad, Carousel, Features } from "../features/home";
import DiscountsDesktop from "../assets/file_88.jpg";
import DiscountsMobile from "../assets/file_87.jpg";
import SalesDesktop from "../assets/IMG_1756.jpeg";
import SalesMobile from "../assets/IMG_1755.jpeg";
import axios from "../api/axios";
import { Box } from "@chakra-ui/react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("/api/product").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Box mt="-20px" width="100%">
      <Carousel
        items={[
          {
            image: DiscountsDesktop,
            mobileImage: DiscountsMobile,
          },
          {
            image: SalesDesktop,
            mobileImage: SalesMobile,
          },
        ]}
      />
      <Products
        title="Best Sellers"
        items={products}
        loading={loading}
        maxItemsPerView={6}
      />
      <Ad
        text="Basketful is CS50's Graduation Project"
        link="/cs50-graduate-project"
      />
      <Products
        title="Offers"
        items={products}
        loading={loading}
        maxItemsPerView={3}
      />
      <Products
        title="Featured"
        items={products}
        loading={loading}
        maxItemsPerView={4}
      />
      <Features />

    </Box>
  );
};

export default Home;
