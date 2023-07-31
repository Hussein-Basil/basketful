import React from "react";
import { Flex, Image, Button, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductItem = ({ name, price, images, _id: id }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Flex
      flexDir="column"
      w={{ base: "150px", lg: "320px" }}
      h={{ base: "232px", lg: "497px" }}
      borderColor="rgba(0,0,0,0.15)"
      borderWidth="1px"
    >
      <Image
        display="block"
        w={{ base: "150px", lg: "304px" }}
        h={{ base: "150px", lg: "304px" }}
        mx="auto"
        my="8px"
        bg="transparent"
        objectFit="contain"
        src={images[0]}
        bgRepeat="no-repeat"
      />
      <Flex
        h="100%"
        mx="8px"
        mb="20px"
        px="9px"
        flexDir="column"
        justifyContent="space-between"
      >
        <Text as="h3" fontSize={{ sm: "14px", lg: "18px" }} fontWeight="medium">
          {name}
        </Text>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="24px" fontWeight="semibold">
            {price.toLocaleString()}
          </Text>
          <Button
            bg="primary.500"
            color="light.100"
            fontSize="16px"
            fontWeight="semibold"
            p="14px"
            onClick={() => {
              navigate("/product/" + id);
              if (location.pathname.startsWith("/product")) {
                navigate(0);
              }
            }}
          >
            BUY NOW
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductItem;
