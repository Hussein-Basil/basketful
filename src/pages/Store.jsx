import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Store = () => {
  const params = useParams();
  const {
    data: store,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["store"],
    queryFn: () =>
      fetch(`http://localhost:8000/api/store/${params.id}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error.</p>;

  console.log(store);

  return (
    <Flex className="store-page" flexDir="column">
      <Heading>Hello in this store page</Heading>
      <Text>{store?.username}</Text>
      <Flex flexDir="column">

      </Flex>
    </Flex>
  );
};

export default Store;
