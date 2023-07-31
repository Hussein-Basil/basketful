import React, { useState, useEffect } from "react";
import Products from "./Products";

import axios from "../../api/axios";

const SimilarProducts = ({ id }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("/api/product")
      .then((res) =>
        setProducts(res.data.filter((product) => product._id !== id))
      )
      .catch((err) => console.error(err));
  }, [id]);

  return <Products title="Similar products" items={products} />;
};

export default SimilarProducts;
