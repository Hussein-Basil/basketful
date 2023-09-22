import React from "react";
import {
  Flex,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  CloseButton,
} from "@chakra-ui/react";
import styles from "./Cart.module.css";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const CartTable = ({ items, setItems }) => {
  const axiosPrivate = useAxiosPrivate();

  const handleUpdate = (id, quantity) => {
    axiosPrivate
      .put("/api/user/cart", {
        product: id,
        quantity: quantity,
      })
      .then((res) => setItems(res.data.cart));
  };

  return (
    <Table w="1024px" className={styles.Table}>
      <Thead>
        <Tr>
          {["ITEMS", "PRODUCT", "PRICE", "QUANTITY", "SUBTOTAL", ""].map(
            (item) => (
              <Th pb="15px" key={item}>
                <Text fontSize="16px" fontWeight="semibold" color="dark.500">
                  {item}
                </Text>
              </Th>
            )
          )}
        </Tr>
      </Thead>
      <Tbody>
        {items.map((item, index) => {
          return (
            <Tr key={index}>
              <Td w="100px" p="0" mr="20px">
                <Image
                  src={item.product.images?.at(0)}
                  w="100px"
                  h="100px"
                  objectFit="contain"
                />
              </Td>
              <Td w="305px" p="0">
                <Text w="200px">{item.product.name}</Text>
              </Td>
              <Td p="0">{`IQD ${item.product.price?.toLocaleString()}`}</Td>
              <Td>
                <Flex h="30px" gap="5px">
                  <Button
                    h="30px"
                    w="30px"
                    minW="30px"
                    p="0"
                    variant="secondary"
                    fontWeight="extrabold"
                    color="primary.500"
                    borderColor="dark.100"
                    borderWidth="1px"
                    onClick={() =>
                      handleUpdate(item.product._id, item.quantity - 1)
                    }
                  >
                    -
                  </Button>
                  <Flex
                    h="100%"
                    w="50px"
                    m="0"
                    justifyContent="center"
                    paddingX="20px"
                    alignItems="center"
                    fontWeight="extrabold"
                    color="dark.100"
                    borderColor="dark.100"
                    borderWidth="1px"
                  >
                    {item.quantity}
                  </Flex>
                  <Button
                    h="30px"
                    w="30px"
                    minW="30px"
                    p="0"
                    m="0"
                    variant="secondary"
                    fontWeight="extrabold"
                    color="primary.500"
                    borderColor="dark.100"
                    borderWidth="1px"
                    onClick={() =>
                      handleUpdate(item.product._id, item.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </Flex>
              </Td>
              <Td w="192px" p="0">{`IQD ${(
                item.product.price * item.quantity
              ).toLocaleString()}`}</Td>
              <Td p="0">
                <CloseButton
                  float="right"
                  bg="none"
                  onClick={() => handleUpdate(item.product._id, 0)}
                />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default CartTable;
