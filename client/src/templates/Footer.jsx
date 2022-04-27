import React from 'react'
import { Flex, Heading, Link, Icon } from '@chakra-ui/react'
import { ReactComponent as Facebook } from '../assets/facebook.svg'
import { ReactComponent as Twitter } from '../assets/twitter.svg'
import { ReactComponent as Instagram } from '../assets/instagram.svg'
import { ReactComponent as Linkedin } from '../assets/linkedin.svg'

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
                        <RouterLink to="/"><Link>Home</Link></RouterLink>
                        <RouterLink to="/about"><Link>About Us</Link></RouterLink>
                        <RouterLink to="/contact"><Link>Contact</Link></RouterLink>
                    </Flex>
                    <Flex flexDir="column" rowGap="5px">
                        <Heading as="h3" size="md" mb="10px">CATEGORIES</Heading>
                        <RouterLink to="/category/electronics"><Link>Electronics</Link></RouterLink>
                        <RouterLink to="/category/clothes"><Link>Clothes</Link></RouterLink>
                        <RouterLink to="/category/accessories"><Link>Accessories</Link></RouterLink>
                    </Flex>
                    <Flex flexDir="column" rowGap="5px">
                        <Heading as="h3" size="md" mb="10px">HELP</Heading>
                        <RouterLink to="/privacy-terms"><Link>Privacy terms</Link></RouterLink>
                        <RouterLink to="/cutstomer-service"><Link>Customer Service</Link></RouterLink>
                        <RouterLink to="/faq"><Link>FAQ</Link></RouterLink>
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