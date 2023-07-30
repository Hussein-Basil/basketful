import React, { useState, useEffect } from 'react'
import { Flex, Heading, Text, Image, Button } from '@chakra-ui/react'
import { useUser } from '../../auth/UserContext'
const Profile = () => {
    const { user } = useUser()
    const [profileData, setProfileData] = useState({
        name: '',
        username: '',
        email: '',
        image: '',
        store: {

        }
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')

    useEffect(() => {
        if (!user._id) return
        fetch(`http://localhost:8000/api/user/${user._id}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setUsername(data.username)
                    setEmail(data.email)
                    setName(data.firstName + ' ' + data.lastName)
                }
            })
    }, [user])
    return (
        <Flex>
            <Flex
                w="65%"
                flexDir="column"
            >
                <Heading>Profile</Heading>
                <Flex
                    border="1px"
                    borderRadius="10px"
                    bg="gray.100"
                    fontSize="18px"
                    justify="space-between"
                    mt="20px"
                    py="20px"
                    px="40px"
                >
                    <Flex flexDir="column" rowGap="10px" fontWeight="medium">
                        <Flex>
                            <Text>Username:</Text>
                            <Text>{username}</Text>
                        </Flex>
                        <Flex>
                            <Text>Name:</Text>
                            <Text>{name}</Text>
                        </Flex>
                        <Flex>
                            <Text>Email:</Text>
                            <Text>{email}</Text>
                        </Flex>
                    </Flex>
                    <Flex flexDir="column" w="200px" rowGap="10px">
                        <Image
                            w="100%"
                            src={profileData.image || "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"}
                        />
                        <Button variant="primary">
                            Change Photo
                        </Button>
                    </Flex>

                </Flex>
            </Flex>
            {profileData.store.name &&
                <Flex
                    mt="62px"
                    border="1px"
                    borderRadius="10px"
                    w="35%"
                    ml="40px"
                    flexDir="column"
                    p="20px"
                >
                    <Heading>{profileData.store.name}</Heading>
                    <Image src={profileData.store.logo} />
                </Flex>}
        </Flex>
    )
}

export default Profile