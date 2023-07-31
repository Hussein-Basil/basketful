import React, { useState } from "react";
import {
  Heading,
  Text,
  HStack,
  Flex,
  Image,
  Box,
  Icon,
  Button,
} from "@chakra-ui/react";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as Heart } from "../../assets/heart-outlined.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Delivery } from "../../assets/delivery.svg";

const ProductInfo = ({ product, user }) => {
  const [selected, setSelected] = useState(product.images && product.images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <Box>
      <Text mb="20px">
        {product.category} &#10095; {product.subcategory}{" "}
      </Text>
      <Flex align="start" gap="67px">
        <Flex justify="center" gap="15px">
          <Flex flexDir="column" gap="8px">
            {product.images &&
              product.images.slice(0, 9).map((item, index) => {
                return (
                  <Image
                    src={item}
                    key={index}
                    w="38px"
                    h="50px"
                    border={`1px rgba(0,0,0,0.2) solid`}
                    borderWidth={selected === item ? "1.5px" : "1px"}
                    borderColor={
                      selected === item ? "primary.500" : "rgba(0,0,0,0.2)"
                    }
                    borderStyle="solid"
                    boxShadow={
                      selected === item
                        ? "rgb(44, 191, 108, 0.5) 0px 2px 10px 0px"
                        : "unset"
                    }
                    objectFit="contain"
                    _hover={{ cursor: "pointer" }}
                    _active={{ boxShadow: "unset" }}
                    onMouseEnter={() => setSelected(item)}
                  />
                );
              })}
          </Flex>
          <Image
            src={selected}
            alt="Product Image"
            h="685px"
            w="685px"
            objectFit="contain"
          />
        </Flex>
        <Flex
          flexDir="column"
          w="710px"
          justify="center"
          rowGap="1em"
          fontSize="18px"
        >
          <Heading as="h1" fontSize="32px" fontWeight="medium">
            {product.name}
          </Heading>
          <Link to="#">
            <Text textDecorationLine="underline">
              Visit the {product.shop?.name}
            </Text>
          </Link>
          <HStack spacing="1">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <Text pl="1em">{product.rating?.total} reviews</Text>
          </HStack>
          <Heading as="h2" fontSize="24px" fontWeight="bold">
            IQD {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Heading>
          <HStack letterSpacing={-1}>
            <Text color="primary.500">off {product.discount?.discount}%</Text>
            <Text as="del" fontWeight="light">
              IQD{" "}
              {parseInt(product.price / (1 - product.discount?.discount / 100))
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
          </HStack>
          <HStack h="40px">
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
          <HStack>
            <Button
              variant="primary"
              h="50px"
              px="50px"
              fontWeight="medium"
              fontSize="22px"
            >
              <Text>Add to Cart</Text>
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
          <HStack textDecorationLine="underline" spacing="1.5em">
            <Link to="#">Report a problem</Link>
            <Link to="#">Help</Link>
          </HStack>
          {/* Delivery information */}
          <Flex
            maxW="716px"
            bg="light.500"
            px="40px"
            py="20px"
            gap="1em"
            align="start"
          >
            {product.shop?.delivery_places.includes(user.place) ? (
              <>
                <Icon
                  mt="-5px"
                  as={Delivery}
                  fill="primary.500"
                  h="40px"
                  w="50px"
                />
                <Text as="p">
                  Delivery for this item is available to {user.place} within
                  approximately {product.shop?.delivery_time}.
                </Text>
              </>
            ) : (
              <>
                <Icon
                  mt="-5px"
                  as={Delivery}
                  fill="dark.100"
                  h="40px"
                  w="50px"
                />
                <Text as="p">
                  Delivery for this item is not available to {user.place}.
                </Text>
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductInfo;
