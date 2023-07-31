import React from 'react'
import { Flex, Heading, Link, Icon } from '@chakra-ui/react'
import { ReactComponent as Facebook } from '../assets/social/facebook.svg'
import { ReactComponent as Twitter } from '../assets/social/twitter.svg'
import { ReactComponent as Instagram } from '../assets/social/instagram.svg'
import { ReactComponent as Linkedin } from '../assets/social/linkedin.svg'

import { Link as RouterLink } from 'react-router-dom'


const Footer = () => {
    return (
        <Flex
            flexDir="column"
            mt="2em"
            py="4em"
            bg="light.500"
        >
            {/* Site Map */}
            <Flex w={{
                sm: "320px",
                md: "768px",
                lg: "1024px",
                xl: "1520px",
            }} mx="auto" flexDir="column" rowGap="45px">
                <Flex justifyContent="space-between">
                    <Flex flexDir="column" rowGap="5px">
                        <Heading as="h3" size="md" mb="10px">MAIN</Heading>
                        <RouterLink to="/">Home</RouterLink>
                        <RouterLink to="/about">About Us</RouterLink>
                        <RouterLink to="/contact">Contact</RouterLink>
                    </Flex>
                    <Flex flexDir="column" rowGap="5px">
                        <Heading as="h3" size="md" mb="10px">CATEGORIES</Heading>
                        <RouterLink to="/category/electronics">Electronics</RouterLink>
                        <RouterLink to="/category/clothes">Clothes</RouterLink>
                        <RouterLink to="/category/accessories">Accessories</RouterLink>
                    </Flex>
                    <Flex flexDir="column" rowGap="5px">
                        <Heading as="h3" size="md" mb="10px">HELP</Heading>
                        <RouterLink to="/privacy-terms">Privacy terms</RouterLink>
                        <RouterLink to="/cutstomer-service">Customer Service</RouterLink>
                        <RouterLink to="/faq">FAQ</RouterLink>
                    </Flex>
                </Flex>
                <Flex justifyContent="space-between">
                    {/* Social Links */}
                    <Flex flexDir="column" rowGap="10px">
                        <Heading as="h3" size="md">Follow us</Heading>
                        <Flex columnGap="20px">
                            <Link href="https://fb.com/basketful"><Icon as={Facebook} w="40px" h="40px" /></Link>
                            <Link href="https://twitter.com/basketful"><Icon as={Twitter} w="40px" h="40px" /></Link>
                            <Link href="https://instagram.com/basketful"><Icon as={Instagram} w="40px" h="40px" /></Link>
                            <Link href="https://linkedin.com/basketful"><Icon as={Linkedin} w="40px" h="40px" /></Link>
                        </Flex>
                    </Flex>
                    {/* Contact Info*/}
                    <Flex flexDir="column" rowGap="5px">
                        <Heading as="h3" size="md" mb="10px">Contact</Heading>
                        <Link href="tel:+9641234567890">📞 +9641234567890</Link>
                        <Link href="mailto:contact@basketful.com">📧 contact@basketful.com</Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer