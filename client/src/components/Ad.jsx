import React from 'react'
import { Button, Flex, Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Ad = ({ text, link }) => {
    const navigate = useNavigate()
    return (
        <Flex
            alignItems={{ sm: "start", lg: "center" }}
            justifyContent="space-between"
            flexDir={{ base: "column", lg: "row" }}
            h="150px"
            py="20px"
            px={{ base: "20px", lg: "60px" }}
            bg="dark.500"
            color="light.500"
        >
            <Heading
                as="h1"
                fontSize={{ base: "20px", lg: "42px" }}
            >
                {text}
            </Heading>
            <Button
                bg="primary.500"
                px={{ base: "20px", lg: "40px" }}
                height={{ base: "34px", lg: "66px" }}
                fontSize={{ base: "16px", lg: "22px" }}
                fontWeight="normal"
                onClick={() => navigate(link)}
            >
                Learn More
            </Button>
        </Flex>
    )
}

export default Ad