import React, { useState } from 'react'
import { Flex, Button, Heading, Text, Input, InputGroup, FormLabel } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { InputField } from '../../components/FormField'
import Notification from '../../components/Notification'
import { useUser } from '../../auth/UserContext'

const Register = () => {
    const { setUser, setStatus } = useUser()
    const [notifications, setNotification] = useState([])
    const navigate = useNavigate()

    return (
        <Flex flexDir="column" align="center" py="118px">
            {notifications.map((notification, index) => (
                <Notification
                    key={index}
                    text={notification}
                    handleClose={() => setNotification(notifications.filter((_, idx) => idx !== index))}
                />
            ))}
            {/* Log in floating form */}
            <Formik
                validateOnBlur={false}
                validateOnChange={false}
                initialValues={{
                    firstName: "",
                    lastName: "",
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                validate={(values) => {
                    const errors = {}

                    if (!values.firstName) {
                        errors.firstName = 'Required'
                    }

                    if (!values.lastName) {
                        errors.lastName = 'Required'
                    }

                    if (!values.username) {
                        errors.username = 'Required'
                    } else if (values.username.length < 3) {
                        errors.username = 'Username must be at least 3 characters'
                    }

                    // email validation
                    if (!values.email) {
                        errors.email = 'Required'
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address'
                    }

                    // school validation
                    if (!values.password) {
                        errors.password = 'Required'
                    }

                    if (values.password !== values.passwordConfirm) {
                        errors.passwordConfirm = 'Passwords do not match'
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    fetch('http://localhost:8000/api/user', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            firstName: values.firstName,
                            lastName: values.lastName,
                            username: values.username,
                            email: values.email,
                            password: values.password,
                        }),
                        credentials: "include",
                    })
                        .then(async res => {
                            const data = await res.json()
                            if (res.ok) {
                                setUser(data.session.user)
                                setStatus("loggedIn")
                                navigate("/register/address")
                            } else {
                                setNotification([data.message, ...notifications])
                            }
                            setSubmitting(false)
                        })
                        .catch(error => setNotification(["error", ...notifications]))
                }}
            >
                {({ isSubmitting }) => (
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
                        <Form>
                            <Flex
                                alignSelf="start"
                                position="absolute"
                                top="-37px"
                                left="0"
                                gap="5px"
                            >
                                <Text color="primary.500">Register</Text>
                                <Text>&#10095; Address &#10095; Payment</Text>
                            </Flex>
                            <Heading size="h3" fontWeight="semibold" mb="5px" color="black">
                                Create New Account
                            </Heading>
                            <Text fontSize="14px" color="dark.200" mb="20px">
                                All fields are required
                            </Text>
                            <InputField
                                name="firstName"
                                label="First Name"
                                placeholder="e.g. John"
                                mb="20px"
                            />
                            <InputField
                                name="lastName"
                                label="Last Name"
                                placeholder="e.g. Smith"
                                mb="20px"
                            />
                            <InputField
                                name="username"
                                label="Username"
                                placeholder="e.g. johnny"
                                mb="20px"
                            />
                            <InputField
                                name="email"
                                label="Email"
                                type="email"
                                placeholder="e.g. johnsmith@example.com"
                                mb="20px"
                            />
                            <InputField
                                name="password"
                                label="Password"
                                type="password"
                                placeholder="Your password"
                                mb="20px"
                            />
                            <InputField
                                name="passwordConfirm"
                                label="Repeat Password"
                                type="password"
                                placeholder="Repeat your password"
                                mb="20px"
                            />
                            <Button
                                type="submit"
                                variant="primary"
                                isLoading={isSubmitting}
                                w="100%"
                                mt="10px"
                            >
                                Sign Up
                            </Button>
                        </Form>
                    </Flex>
                )}
            </Formik>

            <Link to="/login">Have an Account? Sign in</Link>
        </Flex>
    )
}

export default Register