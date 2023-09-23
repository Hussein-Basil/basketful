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
  ModalCloseButton,
  useDisclosure,
  Flex,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  CloseButton,
} from "@chakra-ui/react";
import { ReactComponent as Cart } from "../../assets/shopping-cart.svg";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import React, { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";

const CartModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonRef = useRef(null);
  const modalRef = useRef(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const { user } = useAuth();

  const [items, setItems] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    if (isOpen && user?.cart?.length) {
      axiosPrivate.get("/api/user/cart").then((res) => {
        setItems(res.data.cart);
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (buttonRef.current) {
      // Calculate the position of the modal relative to the triggering button
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const modalLeft = buttonRect.left;
      const modalTop = buttonRect.bottom; // Place modal just below the button

      setModalPosition({ left: modalLeft, top: modalTop });
    }
  }, [isOpen]);

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
        <Icon h={7} w={7} mr="8px" as={Cart} />
        <Text fontSize="16px" textAlign="left">
          Cart
        </Text>
        <Box
          bg="primary.500"
          color="white"
          borderRadius="50%"
          fontSize="11px"
          width="22px"
          height="22px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginLeft="8px"
          fontWeight="normal"
          lineHeight="22px"
        >
          {user.cart?.length || 0}
        </Box>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
        <ModalOverlay bg="none" />

        <ModalContent
          ref={modalRef}
          position="absolute"
          left={modalPosition.left - modalRef.current?.offsetWidth * 0.8}
          top={modalPosition.top + 12}
          maxW="400px"
          boxShadow="0px 0px 10px rgba(0,0,0,0.25)"
        >
          <Box
            position="absolute"
            width="0"
            height="0"
            borderStyle="solid"
            borderWidth="12px"
            borderColor="transparent"
            borderBottomColor={user.cart?.length ? "light.500" : "white"}
            top="-24px"
            left="85%"
          ></Box>
          {items?.length > 0 && (
            <ModalHeader
              bg="light.500"
              fontWeight="normal"
              fontSize="16px"
              borderRadiusF="5px"
            >
              {items.length} item in your shopping cart
            </ModalHeader>
          )}
          <ModalCloseButton />
          <ModalBody padding="1rem">
            {items?.length ? (
              <Flex flexDir="column" gap="2rem">
                {items?.map((item, index) => (
                  <Flex key={index} gap="1rem">
                    <Image
                      src={item.product.images?.at(0)}
                      objectFit="contain"
                      width="100px"
                      height="100px"
                      borderStyle="solid"
                      borderWidth="1px"
                      borderColor="light.600"
                    />
                    <Flex flexDir="column">
                      <Text maxW="300px">{item.product.name}</Text>
                      <Text fontWeight="semibold">{`IQD ${item.product.price?.toLocaleString()}`}</Text>
                      <Text>Quantity: {item.quantity}</Text>
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            ) : (
              <Text>You have no items in your shopping cart.</Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CartModal;
