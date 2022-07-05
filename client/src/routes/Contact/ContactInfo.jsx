import React from 'react'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'

import { ReactComponent as Location } from '../../assets/location.svg'
import { ReactComponent as Mail } from '../../assets/email.svg'
import { ReactComponent as CustomerService } from '../../assets/customer-service.svg'
import { ReactComponent as Phone } from '../../assets/phone.svg'

const ContactInfo = () => {
    return (
        <Box>
            <Flex gap="110px" w="100%">
                <Flex width="320px" gap="12px">
                    <Icon as={Location} fill="dark.500" h="32px" w="32px" ml="-8px" mt="-3px" />
                    <Flex flexDir="column" gap="0.825em">
                        <Text fontSize="16px">ADDRESS</Text>
                        <Text w="290px" fontSize="14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis urna vitae orci</Text>
                    </Flex>
                </Flex>
                <Flex width="320px" gap="12px">
                    <Icon as={CustomerService} fill="dark.500" h="18px" w="18px" mt="5px" mr="4px" />
                    <Flex flexDir="column" gap="0.825em">
                        <Text fontSize="16px">CUSTOMER SERVICE</Text>
                        <Text fontSize="14px">Sun - Thu 9 AM - 4 PM GMT+3</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex gap="110px" w="100%">
                <Flex width="320px" gap="12px">
                    <Icon as={Mail} fill="dark.500" h="18px" w="18px" mr="4px" mt="3px" />
                    <Flex flexDir="column" gap="0.825em">
                        <Text fontSize="16px">EMAIL ADDRESS</Text>
                        <Text fontSize="14px">contact@basketful.com</Text>
                    </Flex>
                </Flex>
                <Flex width="320px" gap="12px">
                    <Icon as={Phone} fill="dark.500" h="16px" w="16px" mt="6px" mr="4px" />
                    <Flex flexDir="column" gap="0.825em">
                        <Text fontSize="16px">PHONES</Text>
                        <Text fontSize="14px">+964 123 4567 8910</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ContactInfo