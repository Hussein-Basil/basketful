/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import {
  Details,
  ProductInfo,
  Reviews,
  SimilarProducts,
} from "../features/product";

import axios from "../api/axios";

const Product = () => {
  const params = useParams();

  const user = {
    place: "Nasiriayah, Iraq",
  };

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios(`/api/product/${params.id}`).then((res) => {
      setProduct(res.data);
    });
  }, [params.id]);

  if (!product) {
    return <Text>Loading</Text>;
  }

  return (
    <Flex flexDir="column" gap="60px">
      <ProductInfo product={product} user={user} />
      <Details details={product.details} />
      <SimilarProducts id={params.id} />
      <Reviews rating={product.rating} reviews={product.reviews} />
    </Flex>
  );
};

export default Product;
