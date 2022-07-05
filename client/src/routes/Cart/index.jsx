import React, { useEffect } from 'react'
import { Text, Spinner, Flex, Heading } from '@chakra-ui/react'
import CartTable from './CartTable'
import Total from './Total'
import DiscountForm from './DiscountForm'
import { useUser } from '../../auth/UserContext'

const Cart = () => {
    const { status, cartItems, setCartItems } = useUser()

    useEffect(() => {
        fetch("http://localhost:8000/api/cart", {
            method: "GET",
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCartItems(data.cart)
            })
    }, [status])

    if (!cartItems || cartItems.length < 1) {
        return (
            <Flex flexDir="column" gap="3em">
                <Heading size="h2">Review your cart</Heading>
                <Flex justify="space-between" align="start">
                    {status === "fetching" ? <Spinner /> : <Text>Your cart is empty</Text>}
                </Flex>
            </Flex>
        )
    } else {
        return (
            <Flex flexDir="column" gap="3em">
                <Heading size="h2">Review your cart</Heading>
                <Flex justify="space-between" align="start">
                    <CartTable />
                    <Flex w="368px" flexDir="column" gap="4em">
                        <Total />
                        <DiscountForm />
                    </Flex>
                </Flex>
            </Flex>
        )
    }
}

export default Cart