import React from "react";
import { Flex, Image, Button, Text } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ProductItem = ({ name, price, images, _id: id }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Link to={`/product/${id}`}>
      <Flex
        flexDir="column"
        w={{ base: "327px", lg: "320px" }}
        h={{ base: "497px", lg: "497px" }}
        borderColor="rgba(0,0,0,0.15)"
        borderWidth="1px"
        overflow="hidden"
      >
        <Image
          display="block"
          w="100%"
          maxH="65%"
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
          <Text
            as="h3"
            fontSize={{ sm: "20px", lg: "18px" }}
            fontWeight="medium"
          >
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
              Buy Now
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default ProductItem;
