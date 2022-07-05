import React, { useState } from 'react'
import { Box, Flex, HStack, VStack, Heading, Button, Progress, Text, Icon } from '@chakra-ui/react'
import { ReactComponent as Star } from '../../assets/star.svg'
import { ReactComponent as Avatar } from '../../assets/avatar.svg'
import ReviewForm from './ReviewForm'

const Reviews = ({ reviews, rating }) => {
    const [writeReview, setwriteReview] = useState(false)

    return (
        <Flex flexDir="column" gap="2em">
            <Heading size="h2">Customer reviews</Heading>
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
                        {rating.distribution.map((item, index) => {
                            return (
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    w="405px"
                                    fontSize="18px"
                                >
                                    <Box w="60px">{index + 1} star</Box>
                                    <Progress value={(item / rating.total) * 100} w="278px" h="25px" colorScheme="blue" />
                                    <Box w="50px" textAlign="right">{Math.round((item / rating.total) * 100)}%</Box>
                                </Flex>
                            )
                        })}
                    </Flex>
                    {/* Write Your Review */}
                    <Flex flexDir="column" gap="20px">
                        <Heading size="h4">Review this product</Heading>
                        <Text>Share your thoughts with other customers</Text>
                        {writeReview ? <ReviewForm /> : (
                            <Button
                                variant="primary"
                                w="185px"
                                onClick={() => setwriteReview(true)}
                            >
                                <Text>Write a Review</Text>
                            </Button>
                        )}
                    </Flex>
                </Flex>
                {/* Right Column (Review List) */}
                <Flex flexDir="column" gap="2.5em" w="635px" fontSize="18px">
                    <Button
                        variant="outline"
                        w="160px"
                    >
                        Top reviews
                    </Button>
                    {reviews.slice(0, 3).map((review, index) => {
                        return (
                            <Flex flexDir="column" gap="0.25em" >
                                <HStack spacing="20px">
                                    {/* <Image src={review.avatar} /> */}
                                    <Icon as={Avatar} w="43px" h="43px" />
                                    <Text>{review.reviewer}</Text>
                                </HStack>
                                <HStack spacing="1px">
                                    <Star width="20px" /><Star width="20px" /><Star width="20px" /><Star width="20px" /><Star width="20px" />
                                    <Heading pl="1em" size="h5" fontWeight="semibold">{review.title}</Heading>
                                </HStack>
                                <HStack mb="20px" fontSize="16px">
                                    <Text color="dark.100">{review.date}</Text>
                                    {review.verified && <Text ml="2em" color="accent.500">Verified Purchase</Text>}
                                </HStack>
                                <Text mb="10px" children={review.text}>
                                </Text>
                                <Button
                                    alignSelf="start"
                                    variant="textButton"
                                    color="accent.500"
                                    _hover={{ textDecoration: "underline" }}
                                    onClick={() => { }}
                                >
                                    Read more
                                </Button>
                            </Flex>
                        )
                    })}
                    <Button
                        variant="outline"
                        w="185px"
                    >
                        See more reviews
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Reviews