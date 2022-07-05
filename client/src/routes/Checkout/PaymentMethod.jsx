import React, { useState, useEffect } from 'react'
import {
    Flex, Box, Text, Radio, RadioGroup, Icon, Button, Image,
    HStack, VStack, useRadio, useRadioGroup, InputGroup, Input, InputLeftElement
} from '@chakra-ui/react'

import { ReactComponent as Credit } from '../../assets/credit.svg'
import { ReactComponent as Visa } from '../../assets/visa.svg'
import { ReactComponent as Mastercard } from '../../assets/mastercard.svg'
import { ReactComponent as Phone } from '../../assets/phone.svg'
import Zaincash from '../../assets/zain.png'


const PaymentChoice = ({ label, icon, image, value }) => {
    return (
        <Box bg="gray.100" px="1em" py="0.75em">
            <Radio value={value} colorScheme="green">
                <Flex justify="space-between" align="center" w="250px">
                    <Text>{label}</Text>
                    {icon ? (
                        <Icon as={icon} h="30px" w="30px" />
                    ) : (
                        <Image src={image} h="30px" w="30px" />
                    )}
                </Flex>
            </Radio>
        </Box>
    )
}

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
                w="236px"
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                boxShadow='md'
                _checked={{
                    borderColor: 'primary.500',
                }}
                px={5}
                py={3}

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
                        <Icon as={props.icon} />
                    </HStack>
                    <Button size="xs">Edit</Button>
                </Flex>
                {props.children}
            </Flex>
        </Box>
    )
}

const PaymentMethod = () => {

    const options = [
        {
            card_number: '1234 4567',
            card_holder: 'Hussein Basil',
            expiry_date: '09/24',
            cvv: '123',
            icon: Visa
        },
        {
            card_number: '1234 4567 1',
            card_holder: 'Hussein Basil',
            expiry_date: '09/24',
            cvv: '123',
            icon: Mastercard
        }
    ]

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'card',
        defaultValue: options[0].card_number,
        onChange: console.log
    })

    const group = getRootProps()

    const [choice, setChoice] = useState('credit')

    return (
        <Flex flexDir="column" width="970px" border="1px" gap="2em" borderColor="gray.200" p="2em">
            <Text fontSize="24px" fontWeight="semibold">Payment Method</Text>
            <Flex justify="space-between">
                {/* Payment Choices */}
                <RadioGroup display="flex" flexDir="column" gap="1em" onChange={setChoice} value={choice}>
                    <PaymentChoice value="credit" label="Credit Card" icon={Credit} />
                    <PaymentChoice value="zaincash" label="Zain Cash" image={Zaincash} />
                </RadioGroup>
                {choice === 'credit' ? (
                    <Flex flexDir="column" gap="1em" w="500px">
                        <Text fontSize="24px" fontWeight="semibold" mb="1em">Credit Card</Text>
                        <Text>We accept Visa and MasterCard</Text>
                        <Flex justify="space-between" align="start">
                            <Text>You can choose old card or new card</Text>
                            <Button variant="primary" size="sm">Add New</Button>
                        </Flex>
                        <HStack {...group}>
                            {options.map((value, key) => {
                                return (
                                    <CardView key={key} icon={value.icon} {...getRadioProps({ value: value.card_number })}>
                                        <Text>Card Number</Text>
                                        <Text>{value.card_number}</Text>
                                        <HStack>
                                            <VStack>
                                                <Text>Card Holder</Text>
                                                <Text>{value.card_holder}</Text>
                                            </VStack>
                                            <VStack>
                                                <Text>Expires</Text>
                                                <Text>{value.expiry_date}</Text>
                                            </VStack>
                                            <VStack>
                                                <Text>CVV</Text>
                                                <Text>{value.cvv}</Text>
                                            </VStack>
                                        </HStack>
                                    </CardView>
                                )
                            })}
                        </HStack>
                    </Flex>
                ) : (
                    <Flex flexDir="column" gap="1em" w="500px">
                        <Text fontSize="24px" fontWeight="semibold" mb="1em">Zain Cash</Text>
                        <Text>We accept ZainCash</Text>
                        <Text>Just put you number and we will send withdrawl request from your wallet</Text>
                        <InputGroup>
                            <Input placeholder="e.g. 07812345678" w="400px" />
                            <InputLeftElement>
                                <Icon as={Phone} fill="primary.500" />
                            </InputLeftElement>
                        </InputGroup>
                        <Button w="230px">
                            Choose this method
                        </Button>
                    </Flex>
                )}
            </Flex>
        </Flex>
    )
}

export default PaymentMethod