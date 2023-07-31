import React from 'react'
import { Box, Flex, HStack, VStack, Heading, Button, Progress, Text, Image, Icon } from '@chakra-ui/react'
import { ReactComponent as Star } from '../../assets/star.svg'
import { ReactComponent as Avatar } from '../../assets/avatar.svg'

const Reviews = ({ reviews, rating }) => {

    return (
        <Flex flexDir="column" gap="2em">
            <Heading>Customer reviews</Heading>
            <Flex gap="205px">
                {/* Left Column (Aside) */}
                <Flex flexDir="column" gap="2.5em">
                    {/* Rating Score */}
                    <HStack spacing="12px">
                        <Text as="data" fontSize="52px" fontWeight="bold">4.8</Text>
                        <VStack pt="10px" spacing="0" align="start">
                            <HStack spacing="1px">
                                <Star width="20px" /><Star width="20px" /><Star width="20px" /><Star width="20px" /><Star width="20px" />
                            </HStack>
                            <Text>12 reviews</Text>
                        </VStack>
                    </HStack>
                    {/* Rating Distribution */}
                    <Flex flexDir="column" gap="20px">
                        {rating?.distribution.map((item, index) => {
                            return (
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    w="405px"
                                    fontSize="18px"
                                >
                                    <Box w="60px">{index + 1} star</Box>
                                    <Progress value={(item / rating?.total) * 100} w="278px" h="25px" colorScheme="green" />
                                    <Box w="50px" textAlign="right">{Math.round((item / rating?.total) * 100)}%</Box>
                                </Flex>
                            )
                        })}
                    </Flex>
                    {/* Write Your Review */}
                    <Flex flexDir="column" gap="20px">
                        <Text fontSize="20px" fontWeight="semibold">Review this product</Text>
                        <Text>Share your thoughts with other customers</Text>
                        <Button
                            variant="primary"
                            w="235px"
                            h="42px"
                            fontSize="18px"
                            fontWeight="medium"
                        >
                            <Text>Write a Review</Text>
                        </Button>
                    </Flex>
                </Flex>
                {/* Right Column (Review List) */}
                <Flex flexDir="column" gap="2.5em" w="635px" fontSize="18px">
                    <Button
                        variant="secondary"
                        w="160px"
                        p="8px 16px"
                        bg="light.500"
                        borderWidth="1px"
                        borderStyle="solid"
                        fontWeight="semibold"
                    >
                        Top reviews
                    </Button>
                    {reviews?.slice(0, 3).map((review, index) => {
                        return (
                            <Flex flexDir="column" gap="0.25em" >
                                <HStack spacing="20px">
                                    {/* <Image src={review.avatar} /> */}
                                    <Icon as={Avatar} w="43px" h="43px" />
                                    <Text>{review.reviewer}</Text>
                                </HStack>
                                <HStack spacing="1px">
                                    <Star width="20px" /><Star width="20px" /><Star width="20px" /><Star width="20px" /><Star width="20px" />
                                    <Heading pl="1em" fontSize="18px" fontWeight="semibold">{review.title}</Heading>
                                </HStack>
                                <HStack mb="20px" fontSize="16px">
                                    <Text color="dark.100">{review.date}</Text>
                                    {review.verified && <Text ml="2em" color="primary.500">Verified Purchase</Text>}
                                </HStack>
                                <Text mb="10px" children={review.text}>
                                </Text>
                                <Text as="u" color="primary.500" onClick={() => { }}>Read more</Text>
                            </Flex>
                        )
                    })}
                    <Button
                        variant="secondary"
                        bg="light.500"
                        borderWidth="1px"
                        borderStyle="solid"
                        w="185px"
                        p="8px 16px"
                        fontWeight="semibold"
                    >
                        See more reviews
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Reviews