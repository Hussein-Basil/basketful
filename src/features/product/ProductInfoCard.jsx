import {
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as Heart } from "../../assets/heart-outlined.svg";
import { ReactComponent as Star } from "../../assets/star.svg";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

const ProductInfoCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const [buttonText, setButtonText] = useState("Add to cart");

  const handleAddToCart = () => {
    setButtonText("Waiting...");
    axiosPrivate
      .post("/api/user/cart", {
        product: product._id,
        quantity: quantity,
      })
      .then((res) => {
        setButtonText("Added Successfully!");
      });
  };

  return (
    <Flex
      className="product-info"
      flexDir="column"
      w="710px"
      justify="center"
      rowGap="1em"
      fontSize="18px"
    >
      <Heading
        className="product-name"
        as="h1"
        fontSize="32px"
        fontWeight="medium"
      >
        {product.name}
      </Heading>
      <Link
        className="store-link"
        href={`/store/${product.shop?._id}`}
        textDecoration="underline"
      >
        Visit the {product.shop?.name}
      </Link>
      <HStack className="product-rating" spacing="1">
        {[...new Array(5)].map((_, index) => (
          <Star
            {...(index + 1 > parseInt(product.rating?.score) && {
              filter: "grayscale(100%)",
              opacity: "50%",
            })}
          />
        ))}
        <Text pl="1em">{product.rating?.total} reviews</Text>
      </HStack>
      <Heading
        className="product-price"
        as="h2"
        fontSize="24px"
        fontWeight="bold"
      >
        IQD {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </Heading>
      {product.discount && (
        <HStack className="product-discount" letterSpacing={-1}>
          <Text color="primary.500">off {product.discount?.discount}%</Text>
          <Text as="del" fontWeight="light">
            IQD{" "}
            {parseInt(product.price / (1 - product.discount?.discount / 100))
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Text>
        </HStack>
      )}
      <HStack className="quantity-control" h="40px">
        <Button
          variant="secondary"
          fontWeight="extrabold"
          color="primary.500"
          borderColor="dark.500"
          borderWidth="1px"
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        >
          -
        </Button>
        <Flex
          h="100%"
          minW="60px"
          justifyContent="center"
          paddingX="20px"
          alignItems="center"
          fontWeight="extrabold"
          borderColor="dark.500"
          borderWidth="1px"
        >
          {quantity}
        </Flex>
        <Button
          variant="secondary"
          fontWeight="extrabold"
          color="primary.500"
          borderColor="dark.500"
          borderWidth="1px"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </Button>
      </HStack>
      <HStack className="order-control">
        <Button
          variant="primary"
          h="50px"
          px="50px"
          fontWeight="medium"
          fontSize="22px"
          onClick={handleAddToCart}
        >
          <Text>{buttonText}</Text>
          <Icon as={Cart} fill="light.100" ml="10px" />
        </Button>
        <Button
          variant="secondary"
          h="50px"
          px="16px"
          fontSize="16px"
          borderWidth="1px"
          borderColor="dark.500"
        >
          <Text>Add to Wish List</Text>
          <Icon as={Heart} ml="10px" fill="inherit" />
        </Button>
      </HStack>
      <HStack
        className="help-buttons"
        textDecorationLine="underline"
        spacing="1.5em"
      >
        <Link to="#">Report a problem</Link>
        <Link to="#">Help</Link>
      </HStack>
    </Flex>
  );
};

export default ProductInfoCard;
