import React from 'react'
import { Text, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <Flex
            direction="column"
            align="center"
            gap="2em"
            w="100%"
            py="36px"
            justify="center"
        >
            <Text fontSize="42px" fontWeight="semibold">Page Not Found - 404</Text>
            <Link to="/">
                <Text as="u" color="primary.500" fontSize="18px">Go Home</Text>
            </Link>
        </Flex>
    )
}

export default NotFound