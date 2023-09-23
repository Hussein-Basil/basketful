import {
  Button,
  Icon,
  Text,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Flex,
  Input,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  Link,
  FormControl,
} from "@chakra-ui/react";

import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import axios from "../../api/axios";

import { ReactComponent as Avatar } from "../../assets/avatar.svg";
import useAuth from "../../hooks/useAuth";

const AccountModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalPosition, setModalPosition] = useState();
  const buttonRef = useRef(null);
  const modalRef = useRef(null);

  const { auth, setAuth, setUser, rememberMe, setRememberMe } = useAuth();
  const location = useLocation();

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post("/api/auth/login", values, { withCredentials: true })
        .then((result) => {
          setAuth({
            accessToken: result.data.accessToken,
            roles: result.data.roles,
          });
          setUser(result.data.user);
          localStorage.setItem("rememberMe", true);
          setRememberMe(true);
          navigate(location.state?.from || -1);

          onClose();

          values.email = "";
          values.password = "";
        })
        .catch((error) => alert(error.message));
    },
  });

  useEffect(() => {
    if (buttonRef.current) {
      // Calculate the position of the modal relative to the triggering button
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setModalPosition({
        left: buttonRect.left,
        top: buttonRect.bottom,
        right: buttonRect.right,
      });
    }
  }, [isOpen, auth?.accessToken]);

  // {auth?.accessToken ? "PROFILE" : "SIGN IN"}

  return (
    <>
      <Button
        ref={buttonRef}
        bg="light.100"
        fill="dark.500"
        _hover={{ bg: "light.100", color: "primary.500", fill: "primary.500" }}
        _active={{ bg: "light.100" }}
        p={0}
        onClick={onOpen}
      >
        <Icon h={7} w={7} mr="8px" as={Avatar} />
        <Text textAlign="left" fontSize="16px">
          Account
        </Text>
      </Button>

      {auth.accessToken ? (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          motionPreset="slideInTop"
          isCentered={true}
        >
          <ModalContent
            ref={modalRef}
            width="fit-content"
            position="absolute"
            left={modalPosition?.right - modalRef.current?.offsetWidth * 1.2}
            top={modalPosition?.top + 10}
            boxShadow="0px 0px 10px rgba(0,0,0,0.25)"
          >
            <Box
              position="absolute"
              width="0"
              height="0"
              borderStyle="solid"
              borderWidth="12px"
              borderColor="transparent"
              borderBottomColor="white"
              top="-24px"
              left="70%"
            ></Box>
            <ModalBody px="0" py="0" borderRadius="5px" overflow="hidden">
              <Flex flexDir="column" fontSize="14px" whiteSpace="nowrap" width="fit-content">
                <Link
                  _hover={{ background: "light.500" }}
                  minWidth="120px"
                  p="8px 12px"
                  href="/profile"
                >
                  Profile
                </Link>
                <Link
                  _hover={{ background: "light.500" }}
                  minWidth="120px"
                  p="8px 12px"
                >
                  Account Settings
                </Link>
                <Link
                  _hover={{ background: "light.500" }}
                  minWidth="120px"
                  p="8px 12px"
                >
                  Sign Out
                </Link>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered={true}
          motionPreset="slideInTop"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              bg="light.500"
              color="black"
              fontSize="16px"
              fontWeight="normal"
              borderRadius="5px"
            >
              Login/Registeration
            </ModalHeader>
            <ModalCloseButton />

            <form onSubmit={formik.handleSubmit}>
              <ModalBody>
                <Flex flexDir="column" gap="1em" w="100%" p="1rem">
                  <FormControl display="flex" flexDir="column" isRequired>
                    <FormLabel color="black" fontSize="14px">
                      Email
                    </FormLabel>
                    <Input
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      autoComplete="true"
                      type="email"
                      bg="light.500"
                      borderWidth="1px"
                      borderStyle="solid"
                      borderColor="gray.300"
                      h="45px"
                      borderRadius="5px"
                      _focus={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "primary.500",
                      }}
                    />
                  </FormControl>
                  <FormControl display="flex" flexDir="column" isRequired>
                    <FormLabel color="black" fontSize="14px">
                      Password
                    </FormLabel>
                    <Input
                      id="password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      autoComplete="true"
                      type="password"
                      bg="light.500"
                      borderWidth="1px"
                      borderStyle="solid"
                      borderColor="gray.300"
                      h="45px"
                      borderRadius="5px"
                      _focus={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "primary.500",
                      }}
                    />
                  </FormControl>

                  <Flex justify="space-between">
                    <Link to="/forgot-password" fontSize="14px">
                      Forgot your password?
                    </Link>
                  </Flex>
                </Flex>
              </ModalBody>

              <ModalFooter align="left" width="100%">
                <Button
                  type="submit"
                  variant="primary"
                  fontSize="14px"
                  borderRadius="5px"
                  px="1.5rem"
                  w="fit-content"
                  mx="5px"
                >
                  Sign In
                </Button>
                <Button borderRadius="5px" variant="ghost" mx="5px" px="0">
                  <Link
                    to="/register"
                    fontSize="14px"
                    px="1.5rem"
                    w="fit-content"
                  >
                    Register
                  </Link>
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default AccountModal;
