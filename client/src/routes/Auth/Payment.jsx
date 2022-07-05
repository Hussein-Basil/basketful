import React from 'react'
import { Flex, Button, Text, Input, InputGroup, FormLabel, Select } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { InputField } from '../../components/FormField'
import { useUser } from '../../auth/UserContext'

const Payment = () => {
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
                    paymentMethod: "Credit Card",
                    cardNumber: "",
                    cardHolder: "",
                    expiry: "",
                    cvv: "",
                }}
                validate={(values) => {
                    const errors = {}
                    console.log(values)
                    if (!values.paymentMethod) {
                        errors.paymentMethod = 'Required'
                    }

                    if (!values.cardNumber) {
                        errors.cardNumber = 'Required'
                    }

                    if (!values.cardHolder) {
                        errors.cardHolder = 'Required'
                    }

                    if (!values.expiry) {
                        errors.expiry = 'Required'
                    }

                    if (!values.cvv) {
                        errors.cvv = 'Required'
                    }

                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(user)
                    fetch(`http://localhost:8000/api/user/${user.userID}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            payment: [{
                                method: values.paymentMethod,
                                account_no: values.cardNumber,
                                cvv: values.cvv,
                                expiryDate: values.expiry,
                            }]
                        }),
                        credentials: 'include'
                    })
                        .then(res => {
                            if (res.ok) {
                                navigate('/')
                            }
                            setSubmitting(false)
                        })
                }}
            >
                {({ isSubmitting, handleChange, handleBlur, values }) => (

                    <Form>
                        <Flex
                            flexDir="column"
                            gap="1em"
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
                                <Text color="primary.500">Register &#10095; Address &#10095; Payment</Text>
                                <Link to="/register/payment"><Text as="u" fontSize="14px">Skip now</Text></Link>
                            </Flex>
                            <Text fontSize="22px" fontWeight="semibold" mb="5px" color="dark.500">
                                Payment
                            </Text>
                            <Text fontSize="14px" color="dark.200">
                                All fields are required
                            </Text>
                            <InputGroup display="flex" flexDir="column">
                                <FormLabel>Payment Method</FormLabel>
                                <Select
                                    name="paymentMethod"
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
                                    value={values.paymentMethod}
                                >
                                    <option value="Credit">Credit Card</option>
                                    <option value="Paypal">Paypal</option>
                                </Select>
                            </InputGroup>
                            <InputField name="cardNumber" label="Card Number" placeholder="1234 5678 9101 1121" />
                            <InputField name="cardHolder" label="Card Holder" placeholder="e.g. John Smith" />
                            <InputField name="expiry" label="Expiry Date" placeholder="03/12" />
                            <InputField name="cvv" label="CVV" placeholder="000" />
                            <Button
                                type="submit"
                                variant="primary"
                                isLoading={isSubmitting}
                                minH="45px"
                                mt="10px"
                            >
                                Save Payment Method
                            </Button>
                            <Button variant="textButton">
                                Add Another Method
                            </Button>
                        </Flex>
                    </Form>
                )}

            </Formik>
        </Flex >
    )
}

export default Payment