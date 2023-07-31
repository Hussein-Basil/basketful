import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
  Input,
  InputGroup,
  FormLabel,
  Link,
  Checkbox,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Mail } from "../../assets/email.svg";
import { useFormik } from "formik";

import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { setAuth, rememberMe, setRememberMe } = useAuth();
  const location = useLocation();

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
    onSubmit: (values) => {
      console.log(values)
      fetch("http://localhost:8000/api/auth/login", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
        method: "POST",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((result) => {
          setAuth(result);
          setRememberMe(values.rememberMe);
          navigate("/", { replace: true, state: { from: location } });
        })
        .catch((error) => alert(error.message));
    },
  });

  useEffect(() => {
    localStorage.setItem("rememberMe", rememberMe);
  }, [rememberMe]);

  return (
    <Flex flexDir="column" gap="20px" align="center">
      {/* Log in floating form */}
      <form onSubmit={formik.handleSubmit}>
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
          my="118px"
        >
          <Text fontSize="22px" fontWeight="semibold" mb="5px">
            Sign in to Your Account
          </Text>

          <InputGroup display="flex" flexDir="column">
            <FormLabel>Email</FormLabel>
            <Input
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="e.g. johnsmith@gmail.com"
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
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              autoComplete="true"
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
          <Flex justify="space-between">
            <Checkbox
              colorScheme="green"
              defaultChecked
              value={formik.values.rememberMe}
              onChange={formik.handleChange}
              id="rememberMe"
              name="rememberMe"
            >
              <Text fontSize="14px">Remember me</Text>
            </Checkbox>
            <Link to="/forgot-password" fontSize="14px">
              Forgot your password?
            </Link>
          </Flex>
          <Button type="submit" variant="primary" minH="45px" fontSize="16px">
            Sign In
          </Button>
          <HStack align="center" mb="5px">
            <Box
              borderBottom="1px black solid"
              borderColor="border.300"
              w="100%"
            />
            <Text px="10px" fontSize="12px">
              OR
            </Text>
            <Box
              borderBottom="1px black solid"
              borderColor="border.300"
              w="100%"
            />
          </HStack>
          <Button
            variant="secondary"
            fontSize="16px"
            fontWeight="semibold"
            borderColor="primary.500"
            borderWidth="1.65px"
            minH="45px"
            onClick={() => navigate("/register")}
          >
            <Icon as={Mail} fill="primary.500" mr="0.65em" mb="0.05em" />
            <Text>Create an Account</Text>
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default Login;
