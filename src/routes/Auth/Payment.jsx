import React from 'react'
import { Box, Flex, Heading, Button, Text, Input, InputGroup, FormLabel, Checkbox, HStack, Icon, Select } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as Credit } from '../../assets/credit-green.svg'

const Payment = () => {
    const navigate = useNavigate()
    return (
        <Flex flexDir="column" align="center" py="118px">
            <Flex
                flexDir="column"
                gap="1em"
                w="480px"
                borderWidth="1px"
                borderColor="border.200"
                borderStyle="solid"
                px="40px"
                pt="30px"
                pb="45px"
                mb="15px"
                color="rgba(0, 0, 0, 0.8)"
                position="relative"
            >
                <Flex
                    alignSelf="start"
                    position="absolute"
                    top="-37px"
                    left="0"
                    gap="5px"
                    justifyContent="space-between"
                    w="100%"
                >
                    <Text color="primary.500">Register &#10095; Address &#10095; Payment</Text>
                    <Link to="/register/payment"><Text as="u" fontSize="14px">Skip now</Text></Link>
                </Flex>
                <Text fontSize="22px" fontWeight="semibold" mb="5px" color="dark.500">
                    Payment
                </Text>
                <Text fontSize="14px" color="dark.200">
                    All fields are required
                </Text>
                <InputGroup display="flex" flexDir="column">
                    <FormLabel>Payment Method</FormLabel>

                    <Select
                        bg="light.500"
                        h="45px"
                        borderRadius="0"
                        border="none"
                        _focus={{
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "primary.500"
                        }}
                    >
                        <option value="Credit">Credit Card</option>
                        <option value="Paypal">Paypal</option>
                    </Select>
                </InputGroup>
                <InputGroup display="flex" flexDir="column">
                    <FormLabel>Card Number</FormLabel>
                    <Input
                        placeholder="1234 5678 9101 1121"
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
                    <FormLabel>Card Holder</FormLabel>
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
                    <FormLabel>Expiry Date</FormLabel>
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
                    <FormLabel>CVV</FormLabel>
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
                <Button
                    variant="primary"
                    minH="45px"
                    mt="10px"
                    fontSize="16px"
                    onClick={() => navigate('/register/payment')}
                >
                    Save Payment Method
                </Button>
                <Flex alignSelf="center" mt="4px" _hover={{ cursor: "pointer" }}>
                    <Icon as={Credit} h="24px" w="24px" fill="primary.500" />
                    <Text ml="10px" as="u" color="dark.500">Add Another Method</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Payment