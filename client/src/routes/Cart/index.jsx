import React, { useState } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import CartTable from './CartTable'
import Total from './Total'
import DiscountForm from './DiscountForm'

const Cart = () => {
    const [items, setItems] = useState([
        {
            image: 'https://m.media-amazon.com/images/I/61tE7IcuLmL._SL1500_.jpg',
            name: 'Oculus Quest 2 - Advanced All-In-One Virtual Reality Headset - 256 GB',
            quantity: 2,
            price: 100000,
        },
        {
            image: 'https://m.media-amazon.com/images/I/71NBQ2a52CL._SL1500_.jpg',
            name: 'Xbox Series X',
            quantity: 1,
            price: 530000,
        },
        {
            image: 'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg',
            name: 'Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K',
            quantity: 1,
            price: 93000,
        },
    ])

    if (items.length < 1) {
        return (
            <Flex flexDir="column" gap="3em">
                <Heading>Review your cart</Heading>
                <Flex justify="space-between" align="start">
                    <p>Your cart is empty</p>
                </Flex>
            </Flex>
        )
    }

    return (
        <Flex flexDir="column" gap="3em">
            <Heading>Review your cart</Heading>
            <Flex justify="space-between" align="start">
                <CartTable items={items} setItems={setItems} />
                <Flex w="368px" flexDir="column" gap="4em">
                    <Total items={items} />
                    <DiscountForm />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Cart