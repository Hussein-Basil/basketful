import { Flex, HStack, Text, Icon, Divider, VStack, Image, Checkbox, Button } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as Cart } from '../../assets/cart.svg'

const OrderSummary = () => {
    const cart = {
        subtotal: 'IQD 1,978,000',
        total: 'IQD 2,029.98',
        tax: 'IQD 1,978',
        delivery: 'IQD 50,000',
        discount: '-',
        items: [
            {
                image: 'https://m.media-amazon.com/images/I/61tE7IcuLmL._SL1500_.jpg',
                name: 'Oculus Quest 2 - Advanced All-In-One Virtual Reality Headset - 256 GB',
                quantity: 2,
                price: 'IQD 100,000',
            },
            {
                image: 'https://m.media-amazon.com/images/I/71NBQ2a52CL._SL1500_.jpg',
                name: 'Xbox Series X',
                quantity: 1,
                price: 'IQD 530,000',
            },
            {
                image: 'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg',
                name: 'Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K',
                quantity: 1,
                price: 'IQD 93,000',
            },
            {
                image: 'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg',
                name: 'Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K',
                quantity: 1,
                price: 'IQD 93,000',
            },
        ]
    }

    return (
        <Flex
            flexDir="column"
            textAlign="left"
            w="495px"
            border="1px"
            borderColor="border.200"
            p="30px"
        >
            <Text fontSize="24px" fontWeight="semibold" mb="20px">Order summary</Text>
            <HStack justify="space-between" mb="16px">
                <Flex fontSize="16px" align="center" gap="20px">
                    <Icon as={Cart} />
                    <Text>You have {cart.items.length} items in your cart</Text>
                </Flex>
                <Icon />
            </HStack>
            <Divider w="495px" ml="-30px" mb="14px" />
            <Flex flexDir="column" h="237px" gap="14px" overflowY="scroll">
                {cart.items.map((item, index) => (
                    <HStack key={index} justify="space-between" width="100%" fontSize="14px">
                        <Image w="54px" h="54px" objectFit="contain" src={item.image} />
                        <Text w="182px" h="64px" overflow="hidden">{item.name}</Text>
                        <VStack align="start">
                            <Text>QUANTITY</Text>
                            <Text>{item.quantity}</Text>
                        </VStack>
                        <VStack align="start">
                            <Text>PRICE</Text>
                            <Text>{item.price}</Text>
                        </VStack>
                    </HStack>
                ))}
            </Flex>
            <Divider w="495px" ml="-30px" mt="14px" />
            <Flex flexDir="column" gap="6px" fontSize="14px" py="14px">
                <Flex justify="space-between">
                    <Text>Cart Subtotal</Text>
                    <Text>{cart.subtotal}</Text>
                </Flex>
                <Flex justify="space-between">
                    <Text mt="0">Tax</Text>
                    <Text mt="0">{cart.tax}</Text>
                </Flex>
                <Flex justify="space-between">
                    <Text>Delivery</Text>
                    <Text>{cart.delivery}</Text>
                </Flex>
                <Flex justify="space-between">
                    <Text>Basketful Discount</Text>
                    <Text>{cart.discount}</Text>
                </Flex>
            </Flex>
            <Divider w="495px" ml="-30px" />
            <HStack fontWeight="semibold" fontSize="16px" pt="12px" justify="space-between" width="100%">
                <Text>Order Total</Text>
                <Text>{cart.total}</Text>
            </HStack>
            <Checkbox py="20px" colorScheme="green">
                <Text fontSize="14px">
                    I agree with Basketful <Text as="u">Terms and Conditions</Text>
                </Text>
            </Checkbox>
            <Button variant="primary">Place Order</Button>
        </Flex>
    )
}

export default OrderSummary