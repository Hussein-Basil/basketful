import React, { useEffect, useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

import { CartTable, Total, DiscountForm } from "../features/cart";

const Cart = () => {
  const [items, setItems] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    axiosPrivate.get("/api/user/cart").then((res) => {
      setItems(res.data.cart)
      console.log(res.data.cart);
  });
  }, [])

  
  if (items.length < 1) {
    return (
      <Flex flexDir="column" gap="3em">
        <Heading>Review your cart</Heading>
        <Flex justify="space-between" align="start">
          <p>Your cart is empty</p>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex flexDir="column" gap="3em">
      <Heading>Review your cart</Heading>
      <Flex justify="space-between" align="start">
        <CartTable items={items} setItems={setItems} />
        <Flex w="368px" flexDir="column" gap="4em">
          <Total items={items} />
          <DiscountForm />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Cart;
