import React from 'react'
import { Flex, Text, Image, Table, Thead, Tbody, Tr, Th, Td, Button, CloseButton } from '@chakra-ui/react'
import styles from './Cart.module.css'


const CartTable = ({ items, setItems }) => {
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
                {items.map((item, index) => {
                    return (
                        <Tr key={index}>
                            <Td w="100px" p="0" mr="20px"><Image src={item.image} w="100px" h="100px" objectFit="contain" /></Td>
                            <Td w="305px" p="0">
                                <Text w="200px">{item.name}</Text>
                            </Td>
                            <Td p="0">{`IQD ${item.price.toLocaleString()}`}</Td>
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
                                        onClick={() => {
                                            if (item.quantity > 0) {
                                                // item.quantity = item.quantity - 1
                                                let newItems = [...items]
                                                newItems[index].quantity = item.quantity - 1
                                                setItems(newItems)
                                            }

                                            if (item.quantity === 0) {
                                                let newItems = [...items]
                                                newItems.splice(index, 1)
                                                setItems(newItems)
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
                                        onClick={() => {
                                            let newItems = [...items]
                                            newItems[index].quantity = item.quantity + 1
                                            setItems(newItems)
                                        }}
                                    >
                                        +
                                    </Button>
                                </Flex>
                                <Button
                                    mt="5px"
                                    variant="primary"
                                    w="120px"
                                    h="30px"
                                    fontSize="14px"
                                >
                                    Update
                                </Button>
                            </Td>
                            <Td w="192px" p="0">{`IQD ${(item.price * item.quantity).toLocaleString()}`}</Td>
                            <Td p="0">
                                <CloseButton
                                    float="right"
                                    bg="none"
                                    onClick={() => {
                                        let newItems = [...items]
                                        newItems.splice(index, 1)
                                        setItems(newItems)
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