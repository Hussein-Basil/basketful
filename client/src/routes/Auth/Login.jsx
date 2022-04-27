import React from 'react'
import { Box, Flex, Heading, Button, Text, Input, InputGroup, FormLabel, Link, Checkbox, HStack, Icon } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Mail } from '../../assets/email.svg'

const Login = () => {
    const navigate = useNavigate()

    return (
        <Flex flexDir="column" gap="20px" align="center">
            {/* Log in floating form */}
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
                my="118px"
            >
                <Text fontSize="22px" fontWeight="semibold" mb="5px">
                    Sign in to Your Account
                </Text>
                <InputGroup display="flex" flexDir="column">
                    <FormLabel>Email</FormLabel>
                    <Input
                        placeholder="e.g. johnsmith@gmail.com"
                        bg="light.500"
                        h="45px"
                        borderRadius="0"
                        border="none"
                        _focus={{
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "primary.500"
                        }}
                    />
                </InputGroup>
                <InputGroup display="flex" flexDir="column">
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        placeholder="Your password"
                        bg="light.500"
                        h="45px"
                        borderRadius="0"
                        border="none"
                        _focus={{
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "primary.500"
                        }}
                    />
                </InputGroup>
                <Flex justify="space-between">
                    <Checkbox
                        colorScheme="green"
                        defaultChecked
                    >
                        <Text fontSize="14px">Remember me</Text>
                    </Checkbox>
                    <Link to="/forgot-password" fontSize="14px">Forgot your password?</Link>
                </Flex>
                <Button
                    variant="primary"
                    minH="45px"
                    fontSize="16px"
                >
                    Sign In
                </Button>
                <HStack align="center" mb="5px">
                    <Box borderBottom="1px black solid" borderColor="border.300" w="100%" />
                    <Text px="10px" fontSize="12px">OR</Text>
                    <Box borderBottom="1px black solid" borderColor="border.300" w="100%" />
                </HStack>
                <Button
                    variant="secondary"
                    fontSize="16px"
                    fontWeight="semibold"
                    borderColor="primary.500"
                    borderWidth="1.65px"
                    minH="45px"
                    onClick={() => navigate("/register")}
                >
                    <Icon as={Mail} fill="primary.500" mr="0.65em" mb="0.05em" />
                    <Text>Create an Account</Text>
                </Button>
            </Flex>
        </Flex >
    )
}

export default Login