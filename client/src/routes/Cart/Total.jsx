import React from 'react'
import { Flex, Text, Divider, Button, Icon } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../auth/UserContext'

const Total = () => {
    const { cartItems } = useUser()
    const navigate = useNavigate()
    return (
        <Flex w="100%" p="1em" border="1px" borderColor="gray.200" flexDir="column" gap="1em" fontSize="14px">
            {/* Heading */}
            <Flex justify="space-between" w="100%" fontSize="16px">
                <Text fontWeight="semibold">Total</Text>
                <Text>Cart cartItems ({cartItems.length})</Text>
            </Flex>
            <Divider />
            {/* Cart Information */}
            <Flex w="100%" justify="space-between">
                <Text>Subtotal</Text>
                <Text>IQD{' '}
                    {!cartItems.length ? 0 :
                        cartItems.map(item => item.price * item.quantity).reduce((a, b) => a + b).toLocaleString()
                    }
                </Text>
            </Flex>
            <Flex w="100%" justify="space-between">
                <Text>Tax</Text>
                <Text>IQD{' '}
                    {!cartItems.length ? 0 :
                        (cartItems.map(item => item.price * item.quantity).reduce((a, b) => a + b) / 1000).toLocaleString()
                    }
                </Text>
            </Flex>
            <Flex w="100%" justify="space-between">
                <Text>Delivery</Text>
                <Text>Calculated at Checkout <Icon /></Text>
            </Flex>
            <Flex w="100%" justify="space-between">
                <Text>Basketful Discount</Text>
                <Text>-</Text>
            </Flex>
            {/* CTA */}
            <Button variant="primary" onClick={() => navigate("/checkout")}>
                Proceed to Checkout
            </Button>
        </Flex>
    )
}

export default Total