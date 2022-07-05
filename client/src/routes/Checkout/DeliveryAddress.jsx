import React, { useState } from 'react'
import { Flex, HStack, Button, Text, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { ReactComponent as Iraq } from '../../assets/iraq.svg'
import { ReactComponent as Location } from '../../assets/location.svg'
import { ReactComponent as Phone } from '../../assets/phone.svg'
import { useFormik } from 'formik'

const DeliveryAddress = ({ address, setAddress }) => {
    const [editing, setEditing] = useState(false)

    const editAddress = () => {
        setEditing(!editing)
    }

    const formik = useFormik({
        validateOnBlur: false,
        validateOnChange: false,
        initialValues: {
            city: address.city,
            address: address.address,
            phone: address.phone
        },
        validate: values => {
            const errors = {}
            for (var key of Object.keys(values)) {
                if (!values[key]) errors[key] = 'Required'
            }
            return errors
        },
        onSubmit: values => {
            fetch('http://localhost:8000/api/user/address', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
                credentials: 'include'
            })
                .then(async res => {
                    const data = await res.json()
                    if (res.ok) {
                        setAddress(data.address)
                    }
                })
        }
    })

    return (
        <Flex
            flexDir="column"
            width="970px"
            gap="2em"
            border="1px"
            borderColor="gray.200"
            borderRadius="5px"
            p="2em"
        >
            <HStack width="100%" justify="space-between">
                <Text fontSize="24px" fontWeight="semibold">Delivery Address</Text>
                <Button variant="primary" onClick={editAddress}>
                    {editing ? 'Cancel' : 'Edit'}
                </Button>
            </HStack>
            <Flex justify="space-between">
                {address && !editing &&
                    <Flex
                        flexDir="column"
                        fontSize="16px"
                        p="1em"
                        gap="0.5em"
                    >
                        <Text><Icon as={Iraq} fill="primary.500" /> {address.city}</Text>
                        <Text><Icon as={Location} fill="primary.500" /> {address.address}</Text>
                        <Text><Icon as={Phone} fill="primary.500" /> {address.phone}</Text>
                    </Flex>
                }
                {address && editing &&
                    <form onSubmit={formik.handleSubmit}>
                        <Flex
                            flexDir="column"
                            fontSize="16px"
                            p="1em"
                            gap="0.5em"
                            w="600px"
                        >
                            <InputGroup>
                                <Input
                                    name="city"
                                    type="text"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                />
                                <InputLeftElement>
                                    <Icon as={Iraq} fill="primary.500" />
                                </InputLeftElement>
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    name="address"
                                    type="text"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                />
                                <InputLeftElement>
                                    <Icon as={Location} fill="primary.500" />
                                </InputLeftElement>
                            </InputGroup>
                            <InputGroup>
                                <Input
                                    name="phone"
                                    type="text"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                />
                                <InputLeftElement>
                                    <Icon as={Phone} fill="primary.500" />
                                </InputLeftElement>
                            </InputGroup>
                            <Button type="submit" w="100px">
                                Submit
                            </Button>
                        </Flex>
                    </form>
                }
            </Flex>
        </Flex>
    )
}

export default DeliveryAddress