import React from 'react'
import { Image, Flex, Button, HStack } from '@chakra-ui/react';
import logo from '../logo.svg';
import { Link } from 'react-scroll'
import MobileDrawer from './MobileDrawer';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <header>
                <Flex
                    w="100%"
                    px="6"
                    py="5"
                    bg="gray.100"
                    justify="center"
                >
                    <Flex justify="space-between" align="center" minW="500px" maxW="1000px">
                        <Image src={logo} h="50px" />
                        <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
                            <Link>
                                <Button variant="nav">Home</Button>
                            </Link>
                            <Link>
                                <Button variant="nav">Wish list</Button>
                            </Link>
                            <Link>
                                <Button variant="nav">Cart</Button>
                            </Link>
                            <Button aria-label="Sign in" bg="blue.500" color="white">
                                Sign in
                            </Button>
                        </HStack>
                        <HStack display={{ base: "flex", md: "none" }}>
                            <MobileDrawer />
                        </HStack>
                    </Flex>
                </Flex>
            </header>
            <main>
                {children}
            </main>
        </React.Fragment>
    )
}

export default Layout