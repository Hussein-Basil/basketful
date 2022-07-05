import React, { useState, useEffect } from 'react'
import { Text, HStack, Box, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import DeliveryAddress from './DeliveryAddress'
import PaymentMethod from './PaymentMethod'
import OrderSummary from './OrderSummary'

const Checkout = () => {
    const navigate = useNavigate()
    const [address, setAddress] = useState({
        city: 'Baghdad',
        address: 'Somewhere in Inner Karada street, Karada, Baghdad, 10001',
        phone: '+964 755 5555',
    })

    const [cart, setCart] = useState({})

    useEffect(() => {
        fetch('http://localhost:8000/api/cart', {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.cart.length) {
                    const subtotal = data.cart
                        .map(item => item.price * item.quantity)
                        .reduce((a, b) => a + b)

                    const tax = (0.05 * subtotal)
                    const delivery = 50000
                    const total = subtotal + tax + delivery
                    setCart({
                        subtotal: subtotal.toLocaleString(),
                        tax: tax.toLocaleString(),
                        delivery: delivery.toLocaleString(),
                        discount: '-',
                        total: total.toLocaleString(),
                        items: data.cart
                    })
                }
            })
    }, [])

    const handleOrder = () => {
        fetch('http://localhost:8000/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cart
            }),
            credentials: 'include'
        })
            .then(res => {
                if (res.ok) {
                    navigate('/successful-purchase')
                    navigate(0)
                }
            })
    }

    return (
        <Box>
            <Text fontSize="36px" fontWeight="semibold" mb="1em">Checkout</Text>
            <HStack justify="space-between" align="start" gap="1em">
                <VStack gap="1em">
                    <DeliveryAddress address={address} setAddress={setAddress} />
                    <PaymentMethod />
                </VStack>
                <OrderSummary handleOrder={handleOrder} cart={cart} setCart={setCart} />
            </HStack>
        </Box>
    )
}

export default Checkout