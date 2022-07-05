import React, { useEffect } from 'react'
import { Flex, Button, Heading, Text, Input, InputGroup, FormLabel, Icon, Select } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as Location } from '../../assets/location.svg'
import { InputField } from '../../components/FormField'
import { Formik, Form } from 'formik'
import { useUser } from '../../auth/UserContext'

const Address = () => {
    const navigate = useNavigate()
    const { user } = useUser()

    if (Object.keys(user).length === 0) {
        return 'no user'
    }

    return (
        <Flex flexDir="column" align="center" py="118px">
            <Formik
                validateOnBlur={false}
                validateOnChange={false}
                initialValues={{
                    city: "Baghdad",
                    district: "Karrada",
                    street: "",
                    postalCode: "",
                    phoneNumber: ""
                }}
                validate={(values) => {
                    const errors = {}
                    console.log(values)
                    if (!values.city) {
                        errors.city = 'Required'
                    }

                    if (!values.district) {
                        errors.district = 'Required'
                    }

                    if (!values.street) {
                        errors.street = 'Required'
                    }

                    if (!values.postalCode) {
                        errors.postalCode = 'Required'
                    }

                    if (!values.phoneNumber) {
                        errors.phoneNumber = 'Required'
                    }

                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(user)
                    fetch(`http://localhost:8000/api/user/${user.userID}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            address: {
                                city: values.city,
                                district: values.district,
                                street: values.street,
                                postalCode: values.postalCode,
                                phone: values.phoneNumber,
                            }
                        }),
                        credentials: 'include'
                    })
                        .then(res => {
                            if (res.ok) {
                                navigate('/register/payment')
                            }
                            setSubmitting(false)
                        })
                }}
            >
                {({ isSubmitting, handleChange, handleBlur, values, errors }) => (
                    <Form>
                        <Flex
                            flexDir="column"
                            gap="20px"
                            w="480px"
                            borderWidth="1px"
                            borderColor="border.200"
                            borderStyle="solid"
                            px="40px"
                            pt="30px"
                            pb="45px"
                            mb="15px"
                            color="rgba(0, 0, 0, 0.8)"
                            position="relative"
                        >
                            <Flex
                                alignSelf="start"
                                position="absolute"
                                top="-37px"
                                left="0"
                                gap="5px"
                                justifyContent="space-between"
                                w="100%"
                            >
                                <Flex>
                                    <Text color="primary.500">Register &#10095; Address </Text>
                                    <Text>&#10095; Payment</Text>
                                </Flex>
                                <Link to="/register/payment"><Text as="u" fontSize="14px">Skip now</Text></Link>
                            </Flex>
                            <Heading size="h3" fontWeight="semibold" mb="-15px" color="black">
                                Address
                            </Heading>
                            <Text fontSize="14px" color="gray.300">
                                All fields are required
                            </Text>
                            <InputGroup display="flex" flexDir="column">
                                <FormLabel>City</FormLabel>
                                <Select
                                    name="city"
                                    h="42px"
                                    bg="gray.100"
                                    borderRadius="5px"
                                    borderWidth="1px"
                                    borderColor="gray.100"
                                    color="black"
                                    _hover={{
                                        bg: "white",
                                        borderColor: "accent_yellow.500",
                                        _placeholder: {
                                            color: "gray.300"
                                        }
                                    }}
                                    _focus={{
                                        bg: "white",
                                        borderColor: "accent_yellow.600",
                                    }}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.city}
                                >
                                    <option value="Baghdad">Baghdad</option>
                                    <option value="Basra">Basra</option>
                                </Select>
                            </InputGroup>
                            <InputGroup display="flex" flexDir="column">
                                <FormLabel>District</FormLabel>
                                <Select
                                    name="district"
                                    h="42px"
                                    bg="gray.100"
                                    borderRadius="5px"
                                    borderWidth="1px"
                                    borderColor="gray.100"
                                    color="black"
                                    _hover={{
                                        bg: "white",
                                        borderColor: "accent_yellow.500",
                                        _placeholder: {
                                            color: "gray.300"
                                        }
                                    }}
                                    _focus={{
                                        bg: "white",
                                        borderColor: "accent_yellow.600",
                                    }}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.district}
                                >
                                    <option value="Amiriyah">Amiriyah</option>
                                    <option value="Karrada">Karrada</option>
                                </Select>
                            </InputGroup>
                            <InputField
                                name="street"
                                label="Street / Nearest Point"
                                placeholder="e.g. Al-Hussein Street"
                            />
                            <InputField
                                name="postalCode"
                                label="Postal Code"
                                placeholder="e.g. 12345"
                            />
                            <InputField
                                name="phoneNumber"
                                label="Phone Number"
                                placeholder="e.g. +964 123456789"
                            />
                            <Button
                                type="submit"
                                variant="primary"
                                isLoading={isSubmitting}
                                mt="10px"
                            >
                                Save Address
                            </Button>
                            <Flex alignSelf="center" mt="4px" _hover={{ cursor: "pointer" }}>
                                <Icon as={Location} h="24px" w="24px" fill="primary.500" />
                                <Text ml="5px" as="u">Add Another Address</Text>
                            </Flex>
                        </Flex>
                    </Form>
                )}
            </Formik>
        </Flex>
    )
}

export default Address