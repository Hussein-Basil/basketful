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
            h="120px"
            py="20px"
            px={{ base: "20px", lg: "60px" }}
            bg="primary.500"
            color="light.500"
        >
            <Heading as="h2" variant="h2">
                {text}
            </Heading>
            <Button
                variant="secondary"
                px={{ base: "20px", lg: "40px" }}
                size="lg"
                onClick={() => navigate(link)}
            >
                Learn More
            </Button>
        </Flex>
    )
}

export default Ad