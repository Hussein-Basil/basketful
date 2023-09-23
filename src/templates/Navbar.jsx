import {
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  Text,
  Image,
  IconButton,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Cart } from "../assets/cart.svg";
import { ReactComponent as WishListIcon } from "../assets/wishlist.svg";
import { ReactComponent as Home } from "../assets/home.svg";

import { MobileDrawer } from "../features/navbar";
import { ReactComponent as Logo } from "../logo.svg";
import searchImage from "../assets/search.png";

import useAuth from "../hooks/useAuth";
import AccountModal from "../features/navbar/AccountModal";
import CartModal from "../features/navbar/CartModal";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const categories = [
    [<Icon as={Home} fill="white" w="25px" h="25px" />, "/"],
    ["Clothes", "/category/clothes"],
    ["Shoes", "/category/shoes"],
    ["Accessories", "/category/accessories"],
    ["Bags", "/category/bags"],
    ["Jewelry", "/category/jewelry"],
    ["Watches", "/category/watches"],
    ["Beauty", "/category/beauty"],
    ["Sports", "/category/sports"],
    ["Electronics", "/category/electronics"],
    ["Food", "/category/food"],
  ];

  return (
    <Flex
      alignSelf="stretch"
      flexDir="column"
      width={{ base: "100%", xl: "1520px" }}
      mx="auto"
    >
      <Flex
        width={{ base: "100%", xl: "1520px" }}
        py={{ base: "18px", lg: "24px" }}
        bg="light.100"
        borderBottom="1px"
        borderColor="rgba(0, 0, 0, 0.1)"
        justify="space-between"
        align="center"
        px={{ base: "1rem", lg: "2rem" }}
      >
        <MobileDrawer display={{ base: "flex", md: "none" }} />
        <Link to="/" className="logo">
          <Heading fontSize="3xl">Basketful</Heading>
        </Link>
        <InputGroup
          className="search"
          w="auto"
          mx="2rem"
          display={{ base: "none", lg: "flex" }}
          flex={1}
          border="1px"
          borderColor="border.300"
          borderRadius="5px"
        >
          <Input
            border="none"
            borderRadius="5px"
            bg="light.500"
            placeholder="Search for products..."
            fontSize="14px"
            // w={{ lg: "320px", xl: "765px" }}
            _focus={{
              border: "1px",
              borderColor: "primary.500",
            }}
          />
          <InputRightElement pointerEvents="none">
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
        <HStack
          as="nav"
          spacing="20px"
          display={{ base: "none", md: "flex" }}
        >
          <AccountModal />
          <Button
            className="wishlist"
            bg="light.100"
            _hover={{
              bg: "light.100",
              color: "primary.500",
              fill: "primary.500",
            }}
            _active={{ bg: "light.100" }}
            p="0"
            onClick={() => navigate("/wishlist")}
          >
            <Icon h={7} w={7} mr="8px" as={WishListIcon} />
            <Text textAlign="left" fontSize="16px">
              Wishlist
            </Text>
          </Button>
          <CartModal />
S
        </HStack>

        <Button
          display={{ base: "inline-flex", md: "none" }}
          bg="light.100"
          _hover={{ bg: "light.100", cursor: "pointer" }}
          _active={{ bg: "light.100" }}
          p="0"
          onClick={() => navigate("/cart")}
          fill="dark.500"
          mr="14px"
          ml="auto"
        >
          <Image src={searchImage} h={6} w={6} />
        </Button>

        {/* Cart */}
        <IconButton
          display={{ base: "inline-flex", md: "none" }}
          bg="light.100"
          _hover={{ bg: "light.100", cursor: "pointer" }}
          _active={{ bg: "light.100" }}
          p="0"
          onClick={() => navigate("/cart")}
          as={Cart}
          fill="dark.500"
          h={6}
          w={6}
          mr="14px"
        />
      </Flex>
      <Flex
        className="categories"
        display={{ base: "none", lg: "flex" }}
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <Flex
          className="categories-scrollable"
          maxW={{
            base: "100%",
            xl: "1520px",
          }}
          mx="auto"
          width="100%"
          align="center"
          justify="space-between"
          bg="primary.700"
          gap="1.5em"
          color="white"
          fontSize="14px"
          fontWeight="medium"
          px="2rem"
          overflow="scroll"
        >
          {categories.map(([category, path], index) => (
            <GridItem
              key={index}
              py="10px"
              m="0"
              textAlign="left"
              _hover={{ textDecorationLine: "underline" }}
            >
              <Link to={path || ""}>{category}</Link>
            </GridItem>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
