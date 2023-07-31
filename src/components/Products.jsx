import React, { useState } from 'react'
import { Flex, Heading, Image, Button, Text } from '@chakra-ui/react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

export const ProductItem = ({
    name,
    price,
    images,
    id,
}) => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <Flex
            flexDir="column"
            w={{ base: "150px", lg: "320px" }}
            h={{ base: "232px", lg: "497px" }}
            borderColor="rgba(0,0,0,0.15)"
            borderWidth="1px"
        >
            <Image
                display="block"
                w={{ base: "150px", lg: "304px" }}
                h={{ base: "150px", lg: "304px" }}
                mx="auto"
                my="8px"
                bg="transparent"
                objectFit="contain"
                src={images[0]}
                bgRepeat="no-repeat"
            />
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
                        bg="primary.500"
                        color="light.100"
                        fontSize="16px"
                        fontWeight="semibold"
                        p="14px"
                        onClick={() => {
                            navigate("/product/" + id)
                            if (location.pathname.startsWith('/product')) {
                                navigate(0)
                            }
                        }}
                    >
                        BUY NOW
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}


export const Products = ({ title, items, ...props }) => {
    const [slideIndex, setSlideIndex] = useState(0)
    return (
        <Flex
            flexDir="column"
            py="2em"
            // ml={{ sm: "158px", lg: "0" }}
            mx="auto"
            w="100%"
            {...props}
        >
            <Flex alignItems="center" justify="space-between" >
                <Heading
                    as="h1"
                    fontSize={{ base: "24px", lg: "36px" }}
                    fontWeight="bold"
                >
                    {title}
                </Heading>
                <Link to="">See All</Link>
            </Flex>
            <Flex position="relative" columnGap={{ sm: "12px", lg: "78px" }}>
                {items.slice(slideIndex, slideIndex + 4).map((item, index) => (
                    <ProductItem
                        key={index}
                        {...item}
                    />
                ))}
                <Button
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
                        if (items.length - (slideIndex + 4) < 4) {
                            setSlideIndex(items.length - (slideIndex + 4))
                        }
                    }}
                >
                    &#10095;
                </Button>
                <Button
                    m={5}
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
                        if (slideIndex > 3 && slideIndex - 4 <= 0) {
                            setSlideIndex(slideIndex - (slideIndex - 4))
                        }
                    }}
                >
                    &#10094;
                </Button>
            </Flex>
        </Flex>
    )
}
