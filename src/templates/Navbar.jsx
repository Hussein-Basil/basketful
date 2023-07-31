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
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Cart } from "../assets/cart.svg";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Person } from "../assets/person.svg";
import { MobileDrawer } from "../features/navbar";
import { ReactComponent as Logo } from "../logo.svg";

import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const { auth } = useAuth();

  const categories = [
    [<Icon as={Home} fill="dark.500" w="25px" h="25px" />, "/"],
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

  const signOut = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <Flex alignSelf="stretch" flexDir="column">
      <Flex
        w="100%"
        py="36px"
        bg="light.100"
        borderBottom="1px"
        borderColor="rgba(0, 0, 0, 0.1)"
        justify="center"
      >
        <Flex
          justify="space-between"
          align="center"
          w={{
            sm: "320px",
            md: "768px",
            lg: "1024px",
            xl: "1520px",
          }}
          maxW="1920px"
        >
          {/* Logo */}
          <Link to="/">
            <HStack>
              <Icon
                as={Logo}
                height="40px"
                w="60px"
                fill="primary.500"
                mx="-15px"
              />
              <Heading fontSize="3xl">Basketful</Heading>
            </HStack>
          </Link>
          {/* Search Bar */}
          <InputGroup
            w="auto"
            display={{ base: "none", lg: "flex" }}
            border="1px"
            borderColor="border.300"
          >
            {/* Select Button to Choose Category */}
            <Button
              bg="light.500"
              borderRight="1px"
              borderColor="border.300"
              fontSize="0.75em"
            >
              All Categories
            </Button>
            <Input
              border="none"
              borderRadius="0"
              bg="light.500"
              w={{ lg: "320px", xl: "765px" }}
              _focus={{
                border: "1px",
                borderColor: "primary.500",
              }}
            />
            <Button
              bg="primary.500"
              color="light.100"
              fontSize="0.75em"
              fontWeight="bold"
            >
              Search
            </Button>
          </InputGroup>
          {/* CTA (Account + Cart) */}
          <HStack
            as="nav"
            spacing="20px"
            display={{ base: "none", md: "flex" }}
          >
            {/* Account */}
            <Button
              bg="light.100"
              _hover={{ bg: "light.100" }}
              _active={{ bg: "light.100" }}
              p="0"
              onClick={() =>
                auth?.accessToken ? signOut() : navigate("/login")
              }
            >
              <Icon h={10} w={10} mr="14px" as={Person} fill="dark.500" />
              <Box textAlign="left">
                <Text fontSize="0.625em" color="primary.500">
                  {auth?.accessToken ? "LOG OUT" : "SIGN IN"}
                </Text>
                <Text fontSize="1.125em">Account</Text>
              </Box>
            </Button>
            {/* Cart */}
            <Button
              bg="light.100"
              _hover={{ bg: "light.100" }}
              _active={{ bg: "light.100" }}
              p="0"
              onClick={() => navigate("/cart")}
            >
              <Icon h={10} w={10} mr="14px" as={Cart} fill="dark.500" />
              <Box textAlign="left">
                <Text fontSize="0.625em" color="primary.500">
                  NO ITEMS
                </Text>
                <Text fontSize="1.125em">Cart</Text>
              </Box>
            </Button>
          </HStack>
          {/* For Mobiles */}
          <HStack display={{ base: "flex", md: "none" }}>
            <MobileDrawer />
          </HStack>
        </Flex>
      </Flex>
      <Flex
        className="categories"
        alignItems="center"
        borderBottom="1px"
        borderColor="rgba(0,0,0,0.05)"
        h="60px"
        overflow="hidden"
        position="relative"
      >
        <Flex
          w={{
            sm: "320px",
            md: "768px",
            lg: "1024px",
            xl: "1520px",
          }}
          mx="auto"
          align="center"
          overflow="hidden"
          justify="space-between"
          gap="1.5em"
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
