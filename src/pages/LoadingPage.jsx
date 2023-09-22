import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Spinner } from "@chakra-ui/react";

const LoadingPage = () => {
  return (
    <Flex
      alignSelf="stretch"
      minHeight="100vh"
      justify="center"
      align="center"
      flexDir="column"
      gap="1rem"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text
        fontWeight="medium"
        fontSize="18px"
        maxW="300px"
        textAlign="center"
      >
        Loading
      </Text>
    </Flex>
  );
};

export default LoadingPage;
