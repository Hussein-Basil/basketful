import React from 'react'
import { Button, Flex, Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Ad = ({ text, link }) => {
    const navigate = useNavigate()
    return (
        <Flex
            display={{ base: "none", lg: "flex"}}
            alignItems="center"
            justifyContent="space-between"
            py="2rem"
            px={{ base: "1.25rem", lg: "3rem", xl: "4rem" }}
            bg="dark.500"
            color="light.500"
            gap="2rem"
        >
            <Heading
                as="h1"
                fontSize={{ base: "18px", md: "28px", xl: "42px" }}
                fontWeight="semibold"
            >
                {text}
            </Heading>
            <Button
              bg="primary.500"
              color="light.100"
              fontSize={{ base: "16px", lg: "20px" }}
              fontWeight="semibold"
              py="14px"
              px="18px"
              flexShrink={0}
              onClick={() => navigate(link)}
            >
              Learn More
            </Button>
        </Flex>
    )
}

export default Ad