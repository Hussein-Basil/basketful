import React, { useState } from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

const Products = ({ title, items, ...props }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <Flex
      flexDir="column"
      py="2em"
      // ml={{ sm: "158px", lg: "0" }}
      mx="auto"
      px={{ base: "1rem", lg: 0}}
      w="100%"
      overflow="hidden"
      gap="1rem"
      {...props}
    >
      <Flex alignItems="center" justify="space-between" w="100%">
        <Heading
          as="h1"
          fontSize={{ base: "24px", lg: "36px" }}
          fontWeight="bold"
        >
          {title}
        </Heading>
        <Link to="">See All</Link>
      </Flex>
      <Flex 
      position="relative" 
      justifyContent="space-between" 
      gap="1rem"
      overflowX="scroll"
      className="categories-scorllable"
      >
        {items.map((item, index) => (
          <ProductItem key={index} {...item} />
        ))}
        <Button
          position="absolute"
          top="50%"
          transform="translateY(-100%)"
          right="-62px"
          bg="none"
          _active={{ bg: "none" }}
          _hover={{ bg: "none" }}
          width="auto"
          p="16px"
          color={slideIndex === items.length ? "primary.500" : "dark.100"}
          fontWeight="bold"
          fontSize="18px"
          transition="0.6s ease"
          borderRadius="0 3px 3px 0"
          userSelect="none"
          onClick={() => {
            if (items.length - (slideIndex + 4) < 4) {
              setSlideIndex(items.length - (slideIndex + 4));
            }
          }}
        >
          &#10095;
        </Button>
        <Button
          m={5}
          position="absolute"
          top="50%"
          transform="translateY(-100%)"
          left="-84px"
          width="auto"
          p="16px"
          color={slideIndex > 3 ? "primary.500" : "dark.100"}
          fontWeight="bold"
          fontSize="18px"
          transition="0.6s ease"
          borderRadius="3px 0 0 3px"
          userSelect="none"
          bg="none"
          _active={{ bg: "none" }}
          _hover={{ bg: "none" }}
          onClick={() => {
            console.log(slideIndex);
            if (slideIndex > 3 && slideIndex - 4 <= 0) {
              setSlideIndex(slideIndex - (slideIndex - 4));
            }
          }}
        >
          &#10094;
        </Button>
      </Flex>
    </Flex>
  );
};

export default Products;
