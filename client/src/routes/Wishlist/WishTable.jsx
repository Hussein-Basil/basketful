
import React from 'react'
import { Flex, Text, Image, Table, Thead, Tbody, Tr, Th, Td, Button, CloseButton } from '@chakra-ui/react'
import styles from './Wishlist.module.css'

const WishTable = ({ items, setItems }) => {
    return (
        <Table w="1024px" className={styles.Table}>
            <Thead>
                <Tr>
                    {[
                        'ITEMS', 'PRODUCT', 'DATE ADDED', '', ''
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
                                <Text w="400px">{item.name}</Text>
                            </Td>
                            <Td>{item.date}</Td>
                            <Td w="90px" p="0" mr="20px">
                                <Button
                                    variant="primary"
                                >
                                    Add to cart
                                </Button>
                            </Td>
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

export default WishTable
