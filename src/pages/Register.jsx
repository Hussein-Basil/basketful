import React from "react";
import {
  Flex,
  Button,
  Text,
  Input,
  InputGroup,
  FormLabel,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDir="column" align="center" py="118px">
      {/* Log in floating form */}
      <Flex
        flexDir="column"
        gap="1em"
        w="480px"
        borderWidth="1px"
        borderColor="border.200"
        borderStyle="solid"
        px="40px"
        pt="30px"
        pb="45px"
        mb="15px"
        color="rgba(0, 0, 0, 0.8)"
        position="relative"
      >
        <Text
          display="flex"
          alignSelf="start"
          position="absolute"
          top="-37px"
          left="0"
          gap="5px"
        >
          <Text color="primary.500">Register</Text>
          <Text>&#10095; Address &#10095; Payment</Text>
        </Text>
        <Text fontSize="22px" fontWeight="semibold" mb="5px" color="dark.500">
          Create New Account
        </Text>
        <Text fontSize="14px" color="dark.200">
          All fields are required
        </Text>
        <InputGroup display="flex" flexDir="column">
          <FormLabel>First Name</FormLabel>
          <Input
            placeholder="e.g. John"
            bg="light.500"
            h="45px"
            borderRadius="0"
            border="none"
            _focus={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "primary.500",
            }}
          />
        </InputGroup>
        <InputGroup display="flex" flexDir="column">
          <FormLabel>Last Name</FormLabel>
          <Input
            placeholder="e.g. Smith"
            bg="light.500"
            h="45px"
            borderRadius="0"
            border="none"
            _focus={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "primary.500",
            }}
          />
        </InputGroup>
        <InputGroup display="flex" flexDir="column">
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="e.g. johnsmith@example.com"
            bg="light.500"
            h="45px"
            borderRadius="0"
            border="none"
            _focus={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "primary.500",
            }}
          />
        </InputGroup>
        <InputGroup display="flex" flexDir="column">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Your password"
            bg="light.500"
            h="45px"
            borderRadius="0"
            border="none"
            _focus={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "primary.500",
            }}
          />
        </InputGroup>
        <InputGroup display="flex" flexDir="column">
          <FormLabel>Repeat Password</FormLabel>
          <Input
            type="password"
            placeholder="Your password again"
            bg="light.500"
            h="45px"
            borderRadius="0"
            border="none"
            _focus={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "primary.500",
            }}
          />
        </InputGroup>

        <Button
          variant="primary"
          minH="45px"
          mt="10px"
          fontSize="16px"
          onClick={() => navigate("/register/address")}
        >
          Sign Up
        </Button>
      </Flex>
      <Link to="/login">Have an Account? Sign in</Link>
    </Flex>
  );
};

export default Register;
