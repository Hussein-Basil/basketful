import React from 'react'
import { Flex, Button, Input, Text, Icon } from '@chakra-ui/react'

const DiscountForm = () => {
    return (
        <Flex w="100%" p="1em" border="1px" borderColor="border.200" flexDir="column" gap="1em">
            {/* Heading */}
            <Text fontSize="16px" fontWeight="semibold">Have Basketful Discount Code? <Icon /></Text>
            <Input bg="light.500" border="none" borderRadius="0" placeholder="e.g. 123ABC" />
            <Button variant="primary">Apply Discount</Button>
        </Flex>
    )
}

export default DiscountForm