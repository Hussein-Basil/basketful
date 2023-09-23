import React from "react";
import { Flex, Image, Button, Text, Skeleton } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ProductItem = ({ name, price, images, isSkeleton, _id: id }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (isSkeleton) {
    return (
    <Flex 
      as={Skeleton}
      minW="243px"
      flex={1}
      h={{ base: "350px", lg: "497px" }}
    >
    </Flex>)
  }

  return (
    <Flex
      // maxW={{ base: "243px", lg: "320px" }}
      minW="243px"
      flex={1}
      h={{ base: "497px", lg: "497px" }}
      borderColor="rgba(0,0,0,0.15)"
      borderWidth="1px"
      overflow="hidden"
    >
      <Link
        to={`/product/${id}`}
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        bg="red"
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
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
            maxWidth: "100%",
            padding: "0 16px 20px 16px",
          }}
        >
          <Text
            as="h3"
            fontSize="14px"
            fontWeight="medium"
          >
            {name}
          </Text>
          <Flex
            style={{ justifyContent: "space-between", width: "100%" }}
            alignItems="center"
          >
            <Text fontSize="18px" fontWeight="semibold">
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
      </Link>
    </Flex>
  );
};

export default ProductItem;
