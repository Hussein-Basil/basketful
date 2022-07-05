import React, { useEffect, useState } from 'react'
import { Box, Flex, Button, Heading, Text, Link, Checkbox, HStack, Icon } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Mail } from '../../assets/email.svg'
import { Formik, Form } from 'formik'
import { InputField } from '../../components/FormField'
import { useUser } from '../../auth/UserContext'
import Notification from '../../components/Notification'

const Login = () => {
    const navigate = useNavigate()
    const { status, setStatus, setUser } = useUser()

    useEffect(() => {
        if (status === "loggedIn") {
            navigate("/")
        }
    }, [status])

    const [notifications, setNotification] = useState([])

    return (
        <Flex flexDir="column" gap="20px" align="center">
            {notifications.map((notification, index) => {
                return (
                    <Notification
                        key={index}
                        text={notification}
                        handleClose={() => setNotification(notifications.filter((notification, idx) => idx !== index))}
                    />
                )
            })}
            {/* Log in floating form */}
            <Formik
                validateOnBlur={false}
                validateOnChange={false}
                initialValues={{ email: '', password: '' }}
                validate={(values) => {
                    const errors = {}
                    // email validation
                    if (!values.email) {
                        errors.email = 'Required'
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address'
                    }

                    // password validation
                    if (!values.password) {
                        errors.password = 'Required'
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    fetch('http://localhost:8000/api/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: values.email,
                            password: values.password,
                        }),
                        credentials: 'include'
                    })
                        .then(async res => {
                            const data = await res.json()
                            if (res.ok) {
                                setUser(data.session.user)
                                setStatus("loggedIn")
                                navigate('/')
                            } else {
                                setNotification([data.message, ...notifications])
                            }
                            setSubmitting(false)
                        })
                }}
            >
                {({ isSubmitting }) => (
                    <Flex
                        flexDir="column"
                        rowGap="15px"
                        w="480px"
                        borderWidth="1px"
                        borderColor="gray.200"
                        borderStyle="solid"
                        borderRadius="5px"
                        px="40px"
                        pt="30px"
                        pb="45px"
                        my="118px"
                    >
                        <Form>
                            <Heading size="h3" fontWeight="semibold" mb="20px">
                                Sign in to Your Account
                            </Heading>
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
                            <Flex justify="space-between" mb="20px">
                                <Checkbox
                                    colorScheme="green"
                                    defaultChecked
                                >
                                    <Text fontSize="14px">Remember me</Text>
                                </Checkbox>
                                <Link to="/forgot-password" fontSize="14px">Forgot your password?</Link>
                            </Flex>
                            <Button
                                type="submit"
                                isLoading={isSubmitting}
                                variant="primary"
                                minH="45px"
                                fontSize="16px"
                                w="100%"
                            >
                                Sign In
                            </Button>
                        </Form>
                        <HStack align="center" mb="5px">
                            <Box borderBottom="1px black solid" borderColor="border.300" w="100%" />
                            <Text px="10px" fontSize="12px">OR</Text>
                            <Box borderBottom="1px black solid" borderColor="border.300" w="100%" />
                        </HStack>
                        <Button
                            variant="outline"
                            fontSize="16px"
                            fontWeight="semibold"
                            minH="45px"
                            onClick={() => navigate("/register")}
                        >
                            <Text>Create an Account</Text>
                            <Icon as={Mail} ml="0.65em" mb="0.05em" />
                        </Button>
                    </Flex>)}
            </Formik>
        </Flex>
    )
}

export default Login