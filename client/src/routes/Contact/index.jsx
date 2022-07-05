import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

import Map from '../../components/Map'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => {
    const location = {
        address: 'Basketful Company',
        lat: 30.519230,
        lng: 47.760948,
    }
    return (
        <Flex flexDir="column">
            <Text fontSize="36px" fontWeight="semibold" mb="30px">Contact Us</Text>
            <Flex justify="space-between">
                <Flex flexDir="column" w="1000px" gap="40px">
                    <ContactInfo />
                    <Map location={location} zoomLevel={12} w="1000px" h="523px" />
                </Flex>
                <ContactForm />
            </Flex>
        </Flex>
    )
}

export default Contact