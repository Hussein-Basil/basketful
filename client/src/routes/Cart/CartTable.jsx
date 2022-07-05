import React from 'react'
import { Flex, Text, Image, Table, Thead, Tbody, Tr, Th, Td, Button, CloseButton } from '@chakra-ui/react'
import styles from './Cart.module.css'
import { useUser } from '../../auth/UserContext'
import { Link } from 'react-router-dom'

const CartTable = () => {
    const { setNotification, cartItems, setCartItems } = useUser()

    return (
        <Table w="1024px" className={styles.Table}>
            <Thead>
                <Tr>
                    {[
                        'ITEMS', 'PRODUCT', 'PRICE', 'QUANTITY', 'SUBTOTAL', ''
                    ].map(item => (
                        <Th pb="15px" key={item}>
                            <Text
                                fontSize="16px"
                                fontWeight="semibold"
                                color="dark.500"
                            >
                                {item}
                            </Text>
                        </Th>)
                    )}
                </Tr>
            </Thead>
            <Tbody>
                {cartItems.map((item, index) => {
                    return (
                        <Tr key={index}>
                            <Td w="100px" p="0" mr="20px"><Image src={item.image} w="100px" h="100px" objectFit="contain" /></Td>
                            <Td w="305px" p="0">
                                <Link to={`/product/${item._id}`} >
                                    <Text w="200px" _hover={{ textDecoration: "underline" }}>{item.name}</Text>
                                </Link>
                            </Td>
                            <Td p="0">{`IQD ${item.price.toLocaleString()}`}</Td>
                            <Td>
                                <Flex h="30px" gap="5px">
                                    <Button
                                        h="30px"
                                        w="30px"
                                        minW="30px"
                                        p="0"
                                        variant="outline"
                                        size="unset"
                                        borderRadius="5px 0 0 5px"
                                        fontWeight="semibold"
                                        onClick={() => {
                                            if (item.quantity > 0) {
                                                // item.quantity = item.quantity - 1
                                                let newItems = [...cartItems]
                                                newItems[index].quantity = item.quantity - 1
                                                setCartItems(newItems)
                                            }

                                            if (item.quantity === 0) {
                                                let newItems = [...cartItems]
                                                newItems.splice(index, 1)
                                                setCartItems(newItems)
                                            }
                                        }}
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
                                        fontWeight="semibold"
                                        color="gray.500"
                                        borderColor="gray.500"
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
                                        variant="outline"
                                        borderRadius="0 5px 5px 0"
                                        size="unset"
                                        fontWeight="semibold"
                                        onClick={() => {
                                            let newItems = [...cartItems]
                                            newItems[index].quantity = item.quantity + 1
                                            setCartItems(newItems)
                                        }}
                                    >
                                        +
                                    </Button>
                                </Flex>
                                <Button
                                    mt="5px"
                                    variant="outline"
                                    size="unset"
                                    h="30px"
                                    w="120px"
                                    fontSize="14px"
                                    onClick={() => {
                                        fetch("http://localhost:8000/api/cart", {
                                            method: "PUT",
                                            headers: {
                                                "Content-Type": "application/json",
                                            },
                                            body: JSON.stringify({
                                                product_id: item._id,
                                                quantity: item.quantity,
                                            }),
                                            credentials: "include"
                                        })
                                            .then(res => res.json())
                                            .then(data => setNotification(notifications => [...notifications, data.message]))
                                    }}
                                >
                                    Update
                                </Button>
                            </Td>
                            <Td w="192px" p="0">{`IQD ${(item.price * item.quantity).toLocaleString()}`}</Td>
                            <Td p="0">
                                <CloseButton
                                    float="right"
                                    bg="none"
                                    _hover={{
                                        bg: "none",
                                        color: "failure.500"
                                    }}

                                    _focus={{
                                        bg: "none",
                                        boxShadow: "none"
                                    }}
                                    onClick={() => {
                                        fetch(`http://localhost:8000/api/cart/${item._id}`, {
                                            method: "DELETE",
                                            credentials: "include"
                                        })
                                            .then(res => {
                                                if (res.ok) {
                                                    let newItems = [...cartItems]
                                                    newItems.splice(index, 1)
                                                    setCartItems(newItems)
                                                    setNotification(notifications => [...notifications, "Item removed from cart"])
                                                } else {
                                                    setNotification(notifications => [...notifications, "Something went wrong"])
                                                }
                                            })
                                    }}
                                />
                            </Td>
                        </Tr>
                    )
                })}

            </Tbody>
        </Table>
    )
}

export default CartTable