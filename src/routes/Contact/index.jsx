import React from 'react'
import { Flex, Text, Button, Textarea, InputGroup, Input, FormLabel, Icon, Box } from '@chakra-ui/react'

import { ReactComponent as Location } from '../../assets/location.svg'
import { ReactComponent as Mail } from '../../assets/email.svg'
import { ReactComponent as CustomerService } from '../../assets/customer-service.svg'
import { ReactComponent as Phone } from '../../assets/phone.svg'

const Contact = () => {
    return (
        <Flex flexDir="column">
            <Text fontSize="36px" fontWeight="semibold" mb="30px">Contact Us</Text>
            <Flex justify="space-between">
                <Flex flexDir="column" w="1000px" gap="40px">
                    {/* INFO */}
                    <Flex gap="110px" w="100%">
                        <Flex width="320px" gap="12px">
                            <Icon as={Location} fill="dark.500" h="24px" w="24px" mr="-6px" />
                            <Flex flexDir="column" gap="0.825em">
                                <Text>ADDRESS</Text>
                                <Text w="290px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis urna vitae orci</Text>
                            </Flex>
                        </Flex>
                        <Flex width="320px" gap="12px">
                            <Icon as={CustomerService} fill="dark.500" h="16px" w="16px" />
                            <Flex flexDir="column" gap="0.825em">
                                <Text>CUSTOMER SERVICE</Text>
                                <Text>Sun - Thu 9 AM - 4 PM GMT+3</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex gap="110px" w="100%">
                        <Flex width="320px" gap="12px">
                            <Icon as={Mail} fill="dark.500" h="16px" w="16px" />
                            <Flex flexDir="column" gap="0.825em">
                                <Text>EMAIL ADDRESS</Text>
                                <Text>contact@basketful.com</Text>
                            </Flex>
                        </Flex>
                        <Flex width="320px" gap="12px">
                            <Icon as={Phone} fill="dark.500" h="16px" w="16px" />
                            <Flex flexDir="column" gap="0.825em">
                                <Text>PHONES</Text>
                                <Text>+964 123 4567 8910</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    {/* MAP */}
                    <Flex w="1000px" h="523px" bg="dark.100" />
                </Flex>
                {/* ASIDE WINDOW */}
                <Flex
                    flexDir="column"
                    w="480px"
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
            </Flex>
        </Flex>
    )
}

export default Contact