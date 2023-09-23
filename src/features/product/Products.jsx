import React, { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Button,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

import { ReactComponent as LeftArrow } from "../../assets/arrow-dark-left.svg";
import { ReactComponent as RightArrow } from "../../assets/arrow-dark-right.svg";

const Products = ({ title, items, loading, maxItemsPerView, ...props }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const itemsPerView = useBreakpointValue({
    base: items.length,
    lg: maxItemsPerView,
  });

  return (
    <Flex
      flexDir="column"
      py="2em"
      // ml={{ sm: "158px", lg: "0" }}
      mx="auto"
      px={{ base: "5px", xl: 0 }}
      w="100%"
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
        overflowX={{ base: "scroll", lg: "hidden" }}
        className="categories-scrollable"
        gap="10px"
      >
        {loading
          ? [...Array(6)].map((_, index) => (
              <ProductItem isSkeleton={true} key={index} />
            ))
          : items
              .slice(slideIndex, slideIndex + itemsPerView)
              .map((item, index) => <ProductItem key={index} {...item} />)}
        <Button
          display={items.length <= slideIndex + itemsPerView ? "none" : "unset"}
          position="absolute"
          top="50%"
          transform="translateY(-100%)"
          // right="-62px"
          right="0"
          bg="none"
          _active={{ bg: "none" }}
          _hover={{ bg: "none" }}
          width="auto"
          p="16px"
          color={slideIndex === items.length ? "primary.500" : "dark.100"}
          fontWeight="bold"
          fontSize="32px"
          transition="0.6s ease"
          borderRadius="0 3px 3px 0"
          userSelect="none"
          onClick={() => {
            if (items.length > slideIndex + itemsPerView) {
              setSlideIndex(items.length - (slideIndex + itemsPerView));
            }
          }}
        >
          <Icon as={RightArrow} h={10} w="auto" />
        </Button>
        <Button
          display={slideIndex === 0 ? "none" : "unset"}
          position="absolute"
          top="50%"
          transform="translateY(-100%)"
          // left="-84px"
          left="0"
          width="auto"
          p="16px"
          color={slideIndex > 3 ? "primary.500" : "dark.100"}
          fontWeight="bold"
          fontSize="32px"
          transition="0.6s ease"
          borderRadius="3px 0 0 3px"
          userSelect="none"
          bg="none"
          _active={{ bg: "none" }}
          _hover={{ bg: "none" }}
          onClick={() => {
            setSlideIndex(
              slideIndex - itemsPerView > 0 ? slideIndex - itemsPerView : 0
            );
          }}
        >
          <Icon as={LeftArrow} h={10} w="auto" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Products;
