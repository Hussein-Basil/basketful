/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Flex, Text, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import {
  ProductLayout,
  ProductGallery,
  ProductInfoCard,
  Reviews,
  SimilarProducts,
} from "../features/product";

import Markdown from "react-markdown";

import axios from "../api/axios";

const Product = () => {
  const params = useParams();
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
    <ProductLayout>
      <Flex className="product-header" align="start" gap="67px">
        <ProductGallery images={product.images} />
        <ProductInfoCard product={product} />
      </Flex>
      {product.description && (
        <Flex className="product-description" flexDir="column" gap="60px">
          <Heading as="h2">Details</Heading>
          <Markdown children={product.description}></Markdown>
        </Flex>
      )}
      <SimilarProducts id={params.id} />
      <Reviews rating={product.rating} reviews={product.reviews} />
    </ProductLayout>
  );
};

export default Product;
