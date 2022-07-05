import React from 'react'
import { Flex, Heading, Text, Input, Textarea, InputGroup, FormLabel, Button } from '@chakra-ui/react'

const ReviewForm = () => {
    return (
        <Flex
            flexDir="column"
            pt="20px"
            pb="40px"
            px="30px"
            border="1px"
            borderColor="gray.300"
            borderRadius="5px"
            gap="20px"
        >
            <Heading size="h4" fontWeight="medium">Your review</Heading>
            <InputGroup display="flex" flexDir="column">
                <FormLabel display="flex">Title <Text ml="5px" color="primary.500">*</Text></FormLabel>
                <Input variant="primary" placeholder="Title" />
            </InputGroup>

            <InputGroup display="flex" flexDir="column">
                <FormLabel display="flex">Comment <Text ml="5px" color="primary.500">*</Text></FormLabel>
                <Textarea
                    variant="primary"
                    placeholder="Type your message here..."
                    h="100px"
                />
            </InputGroup>
            <Button type="submit" variant="primary">
                Send Message
            </Button>
        </Flex>
    )
}

export default ReviewForm