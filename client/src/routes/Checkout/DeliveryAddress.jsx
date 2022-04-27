import React from 'react'
import { Flex, HStack, Button, Text, RadioGroup, Radio, useRadio, useRadioGroup, Checkbox, Icon, Box } from '@chakra-ui/react'
import { ReactComponent as Person } from '../../assets/person.svg'
import { ReactComponent as Iraq } from '../../assets/iraq.svg'
import { ReactComponent as Location } from '../../assets/location.svg'
import { ReactComponent as Phone } from '../../assets/phone.svg'

const CardView = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as='label'>
            <input {...input} />

            <Flex
                flexDir="column"
                bg="light.500"
                fontSize="12px"
                w="283px"
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                boxShadow='md'
                _checked={{
                    borderColor: 'primary.500',
                }}
                p="1em"
                gap="0.5em"
            >
                <Flex justify="space-between"  >
                    <HStack>
                        <Box
                            content=""
                            display="inline-block"
                            position="relative"
                            width="10px"
                            height="10px"
                            borderRadius="50%"
                            bg="none"
                            {...checkbox}
                            _checked={{
                                bg: 'primary.500',
                            }}
                            border="2px solid"
                            borderColor="border.300"

                        />
                        <Text>Select</Text>
                    </HStack>
                    <Button bg="none" variant="secondary" border="none" textDecoration="underline" _hover={{ bg: "none", color: "primary.500" }}>Edit</Button>
                </Flex>
                {props.children}
            </Flex>
        </Box>
    )
}


const DeliveryAddress = ({ addresses }) => {

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'card',
        defaultValue: addresses[0].card_number,
        onChange: console.log
    })

    const group = getRootProps()

    return (
        <Flex flexDir="column" width="970px" border="1px" gap="2em" borderColor="border.200" p="2em">
            <HStack width="100%" justify="space-between">
                <Text fontSize="24px" fontWeight="semibold">Delivery Address</Text>
                <Button variant="primary">Add New</Button>
            </HStack>
            <Flex justify="space-between" {...group}>
                {addresses.map((address, key) => {
                    return (
                        <CardView {...getRadioProps({ value: address.name + key })} key={key}>
                            <Text><Icon as={Person} fill="dark.500" /> {address.name}</Text>
                            <Text><Icon as={Iraq} fill="dark.500" /> {address.city}</Text>
                            <Text><Icon as={Location} fill="dark.500" /> {address.address}</Text>
                            <Text><Icon as={Phone} fill="dark.500" /> {address.phone}</Text>
                        </CardView>
                    )
                })}
            </Flex>
        </Flex>
    )
}

export default DeliveryAddress