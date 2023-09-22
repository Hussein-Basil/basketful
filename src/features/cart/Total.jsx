import React from 'react'
import { Flex, Text, Divider, Button, Icon } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


const Total = ({ items }) => {
    const navigate = useNavigate()
    return (
        <Flex w="100%" p="1em" border="1px" borderColor="border.200" flexDir="column" gap="1em" fontSize="14px">
            {/* Heading */}
            <Flex justify="space-between" w="100%" fontSize="16px">
                <Text fontWeight="semibold">Total</Text>
                <Text>Cart Items ({items.length})</Text>
            </Flex>
            <Divider />
            {/* Cart Information */}
            <Flex w="100%" justify="space-between">
                <Text>Subtotal</Text>
                <Text>IQD{' '}
                    {!items.length ? 0 :
                        items.map(item => item.product.price * item.quantity).reduce((a, b) => a + b).toLocaleString()
                    }
                </Text>
            </Flex>
            <Flex w="100%" justify="space-between">
                <Text>Tax</Text>
                <Text>IQD{' '}
                    {!items.length ? 0 :
                        (items.map(item => item.product.price * item.quantity).reduce((a, b) => a + b) / 1000).toLocaleString()
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