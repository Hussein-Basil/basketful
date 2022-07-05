import React from 'react'
import { Text, Flex, InputGroup, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'

const ContactForm = () => {
    return (
        <Flex
            flexDir="column"
            w="400px"
            h="675px"
            p="40px"
            border="1px"
            borderColor="border.300"
            gap="20px"
        >
            <Text fontSize="22px" fontWeight="medium">Need Support?</Text>
            <Text fontSize="14px" color="dark.200" display="flex">
                Required fields are noted with an asterisk <Text ml="5px" color='primary.500'>*</Text>
            </Text>
            <InputGroup display="flex" flexDir="column">
                <FormLabel display="flex">Name <Text ml="5px" color="primary.500">*</Text></FormLabel>
                <Input
                    bg="light.500"
                    h="45px"
                    borderRadius="0"
                    border="none"
                    _focus={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "primary.500"
                    }}
                />
            </InputGroup>
            <InputGroup display="flex" flexDir="column">
                <FormLabel display="flex">Email Address <Text ml="5px" color="primary.500">*</Text></FormLabel>
                <Input
                    bg="light.500"
                    h="45px"
                    borderRadius="0"
                    border="none"
                    _focus={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "primary.500"
                    }}
                />
            </InputGroup>
            <InputGroup display="flex" flexDir="column">
                <FormLabel>Phone</FormLabel>
                <Input
                    bg="light.500"
                    h="45px"
                    borderRadius="0"
                    border="none"
                    _focus={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "primary.500"
                    }}
                />
            </InputGroup>
            <InputGroup display="flex" flexDir="column">
                <FormLabel display="flex">Message <Text ml="5px" color="primary.500">*</Text></FormLabel>
                <Textarea
                    placeholder="Type your message here..."
                    bg="light.500"
                    h="100px"
                    borderRadius="0"
                    border="none"
                    _focus={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "primary.500"
                    }}
                />
            </InputGroup>
            <Button type="submit" variant="primary" p="24px" fontWeight="medium" fontSize="18px">
                Send Message
            </Button>
        </Flex>
    )
}

export default ContactForm