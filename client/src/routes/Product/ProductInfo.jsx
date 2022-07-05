import React, { useState } from 'react'
import { Heading, Text, HStack, Flex, Image, Box, Icon, Button } from '@chakra-ui/react'
import { ReactComponent as Star } from '../../assets/star.svg'
import { ReactComponent as Cart } from '../../assets/cart.svg'
import { ReactComponent as Heart } from '../../assets/heart-outlined.svg'
import { Link } from 'react-router-dom'
import { ReactComponent as Delivery } from '../../assets/delivery.svg'
import { useUser } from '../../auth/UserContext'

const ProductInfo = ({ product }) => {
    const [selected, setSelected] = useState(product.image)
    const { cartItems, setCartItems, setNotification } = useUser()
    const [quantity, setQuantity] = useState(cartItems.find(item => item._id === product._id)?.quantity || 1)
    const images = [
        "https://m.media-amazon.com/images/I/71IdqIdug2L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81-++CoFIXL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61ouW3oez-L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71WHXX3oNqL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/717SMiDKjVL._SL1500_.jpg",
        "https://www.tamata.com/media/catalog/product/cache/b1b762920b4f64fe70902904558ecc11/t/a/taif-f-5-12-2021-24_1.jpg"
    ]


    return (
        <Box>
            {/* <Text mb="20px">{product.category.name} &#10095; {product.subcategory} </Text> */}
            <Text mb="20px">{product.category.name}</Text>
            <Flex align="start" gap="67px">
                <Flex justify="center" gap="15px">
                    <Flex flexDir="column" gap="8px">
                        {[product.image, ...images].slice(0, 9).map((item, index) => {
                            return (
                                <Image
                                    src={item}
                                    key={index}
                                    w="38px"
                                    h="50px"
                                    border={`1px rgba(0,0,0,0.2) solid`}
                                    borderWidth={selected === item ? "1.5px" : "1px"}
                                    borderColor={selected === item ? "accent.500" : "rgba(0,0,0,0.2)"}
                                    borderStyle="solid"
                                    boxShadow={selected === item ? "rgb(44, 191, 108, 0.5) 0px 2px 10px 0px" : "unset"}
                                    objectFit="contain"
                                    _hover={{ cursor: "pointer" }}
                                    _active={{ boxShadow: "unset" }}
                                    onMouseEnter={() => setSelected(item)}
                                />
                            )
                        })}
                    </Flex>
                    <Image
                        src={selected}
                        alt="Product Image"
                        h="640px"
                        minW="640px"
                        objectFit="contain"
                    />
                </Flex>
                <Flex
                    flexDir="column"
                    w="710px"
                    justify="center"
                    rowGap="1em"
                    fontSize="18px"
                >
                    <Heading
                        size="h2"
                        fontWeight="medium"
                    >
                        {product.name}
                    </Heading>
                    <Link to={`/store/${product.store.shortID}`}>
                        <Text textDecorationLine="underline">Visit the {product.store.name}</Text>
                    </Link>
                    {/* <HStack spacing="1">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Text pl="1em">{product.rating.total} reviews</Text>
                    </HStack> */}
                    <Text fontSize="24px" fontWeight="bold">
                        IQD {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Text>
                    {/* <HStack letterSpacing={-1}>
                        <Text color="accent.500">off {product.discount.discount}%</Text>
                        <Text as="del" fontWeight="light">
                            IQD {parseInt(product.price / (1 - product.discount.discount / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </Text>
                    </HStack> */}
                    <HStack h="40px">
                        <Button
                            variant="outline"
                            fontWeight="semibold"
                            borderRadius="5px 0 0 5px"
                            size="sm"
                            onClick={() => {
                                if (quantity > 1) {
                                    setQuantity(quantity - 1)
                                }
                            }}
                        >
                            -
                        </Button>
                        <Flex
                            h="100%"
                            minW="60px"
                            justifyContent="center"
                            paddingX="20px"
                            alignItems="center"
                            fontWeight="semibold"
                            borderColor="gray.500"
                            borderWidth="1px"
                        >
                            {quantity}
                        </Flex>
                        <Button
                            variant="outline"
                            fontWeight="semibold"
                            borderRadius="0 5px 5px 0"
                            size="sm"
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            +
                        </Button>
                    </HStack>
                    <HStack>
                        <Button
                            variant={cartItems.find(item => item._id === product._id) ? "success" : "primary"}
                            px="50px"
                            onClick={() => {
                                if (cartItems.find(item => item._id === product._id)) {
                                    fetch("http://localhost:8000/api/cart", {
                                        method: "DELETE",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            product_id: product._id,
                                        }),
                                        credentials: "include"
                                    })
                                        .then(res => {
                                            if (res.ok) {
                                                setCartItems(cartItems.filter(item => item._id !== product._id.toString()))
                                            }
                                        })
                                } else {
                                    fetch("http://localhost:8000/api/cart", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            product: product._id,
                                            quantity: quantity,
                                        }),
                                        credentials: "include"
                                    })
                                        .then(async res => {
                                            const data = await res.json()
                                            if (res.ok) {
                                                setCartItems([...cartItems, data.item])
                                            }
                                            setNotification(notifications => [...notifications, data.message])
                                        })
                                }
                            }}
                        >
                            <Text>
                                {cartItems.filter(item => item._id === product._id).length > 0 ? "In Cart" : "Add to Cart"}
                            </Text>
                            <Icon as={Cart} fill="light.100" ml="10px" />
                        </Button>
                        <Button
                            variant="outline"
                            h="50px"
                            px="16px"
                            fontSize="16px"
                        >
                            <Text>Add to Wish List</Text>
                            <Icon as={Heart} ml="10px" />
                        </Button>
                    </HStack>
                    <HStack textDecorationLine="underline" spacing="1.5em">
                        <Button variant="textButton">Report a problem</Button>
                        <Button variant="textButton" >Help</Button>
                    </HStack>
                    {/* Delivery information */}
                    {/* <Flex
                        maxW="716px"
                        bg="light.500"
                        px="40px"
                        py="20px"
                        gap="1em"
                        align="start"

                    >
                        {product.shop.delivery_places.includes(user.place) ?
                            (<>
                                <Icon mt="-5px" as={Delivery} fill="success.500" h="40px" w="50px" />
                                <Text as="p">
                                    Delivery for this item is available to {user.place} within
                                    approximately {product.shop.delivery_time}.
                                </Text>
                            </>)
                            :
                            (<>
                                <Icon mt="-5px" as={Delivery} fill="failure.500" h="40px" w="50px" />
                                <Text as="p">
                                    Delivery for this item is not available to {user.place}.
                                </Text>
                            </>)}
                    </Flex> */}
                </Flex>
            </Flex>
        </Box>
    )
}

export default ProductInfo