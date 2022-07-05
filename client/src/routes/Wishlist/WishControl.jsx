import React from 'react'
import { Flex, Text, Divider, Button, Icon } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Heart } from '../../assets/heart.svg'

const WishControl = ({ items }) => {
    const navigate = useNavigate()
    return (
        <Flex w="100%" p="1em" border="1px" borderColor="border.200" flexDir="column" gap="1em" fontSize="14px">
            {/* Heading */}
            <Flex flexDir="column" justify="space-between" w="100%" >
                <Text fontWeight="semibold" fontSize="16px">Wish list</Text>
                <Text><Icon as={Heart} h="16px" />You have {items.length} items in your wish list</Text>
            </Flex>
            <Divider />
            {/* Cart Information */}
            <Flex w="100%">
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis urna vitae orci finibus faucibus. Etiam porttitor tellus id </Text>
            </Flex>
            {/* CTA */}
            <Button variant="primary" onClick={() => navigate("/")}>
                Continue Shopping
            </Button>
            <Button variant="secondary">
                Move All to Cart
            </Button>
            <Button variant="secondary">
                Delete All
            </Button>
        </Flex>
    )
}

export default WishControl