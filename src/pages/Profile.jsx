import React from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();

  const signOut = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Flex flexDir="column" gap="1rem">
      <Heading>Profile</Heading>
      <Text>{user.username}</Text>
      <Button onClick={signOut}>Log Out</Button>
    </Flex>
  );
};

export default Profile;
