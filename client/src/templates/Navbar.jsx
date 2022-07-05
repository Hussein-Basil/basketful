import React, { useState, useEffect } from 'react'
import { Icon, Flex, Button, HStack, Input, InputGroup, Text, Box, Heading, Spinner } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import MobileDrawer from '../components/MobileDrawer'
import { ReactComponent as Logo } from '../logo.svg'
import { ReactComponent as Person } from '../assets/person.svg'
import { ReactComponent as Cart } from '../assets/cart.svg'
import { Link, useNavigate } from 'react-router-dom'
import Categories from '../components/Categories'
import { ReactComponent as Home } from '../assets/home.svg'
import { useUser } from '../auth/UserContext'

const Search = () => {
    const [query, setQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (query.length === 0) setSearchResults([])
        if (query.length < 3) return

        console.log(query.split("").map(c => c.replace(" ", "_")).join(""))
        fetch(`http://localhost:8000/api/search?q=${query}`, {
            method: "GET",
            credentials: "include"
        }).then(res => res.json())
            .then(data => setSearchResults(data.results))
    }, [query])

    return (
        <Flex flexDir="column">
            <InputGroup
                w="auto"
                display={{ base: "none", lg: "flex" }}
                border="1px"
                borderColor="border.300"
                bg="gray.100"
                borderRadius="5px"
                position="relative"
            >
                {/* Select Button to Choose Category */}
                <Input
                    placeholder="Search.."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    variant="primary"
                    bg="white"
                    w={{ lg: '320px', 'xl': "525px" }}

                />
                <Button variant="secondary" size="sm">
                    <Search2Icon w="25px" h="25px" />
                </Button>
            </InputGroup>
            {searchResults.length > 0 && (
                <Flex
                    position="fixed"
                    w="575px"
                    mt="50px"
                    zIndex={1}
                    justify="center"
                    bg="gray.100"
                    color="black"
                    flexDir="column"
                >
                    {searchResults.map((result, index) => {
                        return (
                            <Flex justify="center" onClick={() => {
                                navigate(0)
                            }}>{result.name}</Flex>
                        )
                    })}
                </Flex>
            )}
        </Flex>
    )
}

const Navbar = () => {

    const categories = [
        [<Icon as={Home} fill="white" w="25px" h="25px" />, '/'],
        ['Clothes', '/category/clothes'],
        ['Shoes', '/category/shoes'],
        ['Accessories', '/category/accessories'],
        ['Bags', '/category/bags'],
        ['Jewelry', '/category/jewelry'],
        ['Watches', '/category/watches'],
        ['Beauty', '/category/beauty'],
        ['Sports', '/category/sports'],
        ['Electronics', '/category/electronics'],
        ['Food', '/category/food'],
    ]

    const navigate = useNavigate()
    const { status, cartItems } = useUser()

    return (
        <Box>
            <Flex
                w="100%"
                pt="30px"
                pb="10px"
                bg="primary.500"
                color="white"
                justify="center"

            >
                <Flex px="20px" justify="space-between" align="center" w={{
                    sm: "320px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1440px",
                    '2xl': "1500px"
                }}>
                    {/* Logo */}
                    <Link to="/"><HStack>
                        <Icon as={Logo} height="40px" w="60px" fill="success.500" mx="-15px" />
                        <Heading fontSize="3xl">Basketful</Heading>
                    </HStack></Link>
                    {/* Search Bar */}
                    <Search />

                    {/* CTA (Account + Cart) */}
                    <HStack as="nav" spacing="20px" display={{ base: "none", md: "flex" }}>
                        {/* Account */}
                        <Button variant="textButton" p="0" onClick={() => navigate(status === "loggedIn" ? "/profile" : "/login")}>
                            <Icon h={10} w={10} fill="white" mr="14px" as={Person} />
                            <Flex flexDir="column" textAlign="left" justifyContent="end" h="100%">
                                <Box fontSize="0.625em" color="accent_yellow.500">
                                    {
                                        status === "loggedIn" ? "Profile" :
                                            status === "loggedOut" ? "Login" :
                                                <Spinner w="1.125em" h="1.125em" />
                                    }
                                </Box>
                                <Text fontSize="1.125em">Account</Text>
                            </Flex>
                        </Button>
                        {/* Cart */}
                        <Button variant="textButton" size="small" p="0" onClick={() => navigate("/cart")}>
                            <Icon h={10} w={10} fill="white" mr="14px" as={Cart} />
                            <Flex flexDir="column" textAlign="left" justifyContent="flex-end" h="100%">
                                <Box fontSize="0.625em" color="accent_yellow.500">{
                                    status === "fetching" ? <Spinner w="1.125em" h="1.125em" /> :
                                        cartItems.length === 0 ? "NO ITEMS" :
                                            cartItems.length + " ITEMS"
                                }</Box>
                                <Text fontSize="1.125em">Cart</Text>
                            </Flex>
                        </Button>
                    </HStack>
                    {/* For Mobiles */}
                    <HStack display={{ base: "flex", md: "none" }}>
                        <MobileDrawer />
                    </HStack>
                </Flex>
            </Flex>
            <Categories categories={categories} />
        </Box>
    )
}

export default Navbar