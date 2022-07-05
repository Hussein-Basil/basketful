import React, { useState } from 'react'
import { Flex, Heading, Image, Button, Text, useBreakpointValue } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUser } from '../auth/UserContext'
import { getCookie, setCookieInHours } from '../helpers/cookies'

export const ProductItem = ({
    name,
    price,
    image,
    _id,
    ...props
}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const { setNotification, cartItems, setCartItems } = useUser()

    return (
        <Flex
            flexDir="column"
            flexShrink={0}
            flexGrow={0}
            w={{ base: "150px", lg: "315px", xl: "335px", '2xl': "350px" }}
            h={{ base: "232px", lg: "497px" }}
            borderColor="rgba(0,0,0,0.15)"
            borderWidth="1px"
            borderRadius="5px"
            {...props}
            _hover={{ cursor: "pointer" }}
            onClick={() => {
                navigate("/product/" + _id)
                if (location.pathname.startsWith('/product')) {
                    navigate(0)
                }
            }}
        >
            {image ? <Image
                display="block"
                w={{ base: "150px", lg: "304px" }}
                h={{ base: "150px", lg: "304px" }}
                mx="auto"
                my="8px"
                bg="gray.100"
                objectFit="contain"
                src={image}
                bgRepeat="no-repeat"
            /> : ""}
            <Flex
                h="100%"
                mx="8px"
                mb="20px"
                px="9px"
                flexDir="column"
                justifyContent="space-between"
            >
                <Text
                    as="h3"
                    fontSize={{ sm: "14px", lg: "18px" }}
                    fontWeight="medium"
                >
                    {name}
                </Text>
                <Flex justifyContent="space-between" alignItems="center">
                    <Text fontSize="24px" fontWeight="semibold">{price.toLocaleString()}</Text>
                    <Button
                        p="14px"
                        variant={cartItems.find(item => item._id === _id) ? "success" : "primary"}
                        onClick={(e) => {
                            console.log(cartItems)

                            e.stopPropagation()
                            if (cartItems.length && cartItems.filter(item => item._id === _id).length > 0) {
                                fetch("http://localhost:8000/api/cart", {
                                    method: "DELETE",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        product_id: _id
                                    }),
                                    credentials: "include"
                                }).then(res => {
                                    if (res.ok) {
                                        setCartItems(cartItems => cartItems.filter(item => item._id !== _id))
                                    }
                                })
                            } else {
                                fetch("http://localhost:8000/api/cart", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        product: _id,
                                        quantity: 1,
                                    }),
                                    credentials: "include"
                                })
                                    .then(async res => {
                                        const data = await res.json()
                                        if (res.ok) {
                                            setCartItems(cartItems => [...cartItems, data.item])
                                        }
                                        setNotification(notifications => [...notifications, data.message])
                                    })
                            }
                        }}
                    >
                        {cartItems.filter(item => item._id === _id).length > 0 ? "IN CART" : "ADD TO CART"}
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}


export const Products = ({ title, items, ...props }) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const productLimit = useBreakpointValue({ base: 3, xl: 4 })
    const navArrows = useBreakpointValue({ base: false, '2xl': true })
    return (
        <Flex
            flexDir="column"

            py="2em"
            // ml={{ sm: "158px", lg: "0" }}
            mx="auto"
            w="100%"
            {...props}
        >
            <Flex alignItems="center" justify="space-between" mb="20px">
                {title &&
                    <Heading
                        as="h1"
                        fontSize={{ base: "24px", lg: "36px" }}
                        fontWeight="bold"
                    >
                        {title}
                    </Heading>}
                <Button
                    variant="textButton"
                    _hover={{ textDecoration: "underline" }}
                >
                    See All
                </Button>
            </Flex>
            <Flex position="relative">
                {items.slice(slideIndex, slideIndex + productLimit).map((item, index) => {
                    return (
                        <ProductItem
                            key={index}
                            mr={index < slideIndex + 3 ? "20px" : 0}
                            {...item}
                        />
                    )
                })}
                <Button
                    display={navArrows ? 'button' : 'none'}
                    position="absolute"
                    top="50%"
                    transform="translateY(-100%)"
                    right="-62px"
                    bg='none'
                    _active={{ bg: 'none' }}
                    _hover={{ bg: 'none' }}
                    width="auto"
                    p="16px"
                    color={slideIndex === items.length ? "primary.500" : "dark.100"}
                    fontWeight="bold"
                    fontSize="18px"
                    transition="0.6s ease"
                    borderRadius="0 3px 3px 0"
                    userSelect="none"
                    onClick={() => {
                        if (items.length - (slideIndex + productLimit) < productLimit) {
                            setSlideIndex(items.length - (slideIndex + productLimit))
                        }
                    }}
                >
                    &#10095;
                </Button>
                <Button
                    m={5}
                    display={navArrows ? 'button' : 'none'}
                    position="absolute"
                    top="50%"
                    transform="translateY(-100%)"
                    left="-84px"
                    width="auto"
                    p="16px"
                    color={slideIndex > 3 ? "primary.500" : "dark.100"}
                    fontWeight="bold"
                    fontSize="18px"
                    transition="0.6s ease"
                    borderRadius="3px 0 0 3px"
                    userSelect="none"
                    bg='none'
                    _active={{ bg: 'none' }}
                    _hover={{ bg: 'none' }}
                    onClick={() => {
                        console.log(slideIndex)
                        if (slideIndex > 3 && slideIndex - productLimit <= 0) {
                            setSlideIndex(slideIndex - (slideIndex - productLimit))
                        }
                    }}
                >
                    &#10094;
                </Button>
            </Flex>
        </Flex>
    )
}
