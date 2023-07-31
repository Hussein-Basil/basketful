import React from "react";
import {
  Flex,
  Button,
  Text,
  Input,
  InputGroup,
  FormLabel,
  Icon,
  Select,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Location } from "../assets/location.svg";

const Address = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDir="column" align="center" py="118px">
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
          <Flex>
            <Text color="primary.500">Register &#10095; Address </Text>
            <Text>&#10095; Payment</Text>
          </Flex>
          <Link to="/register/payment">
            <Text as="u" fontSize="14px">
              Skip now
            </Text>
          </Link>
        </Flex>
        <Text fontSize="22px" fontWeight="semibold" mb="5px" color="dark.500">
          Address
        </Text>
        <Text fontSize="14px" color="dark.200">
          All fields are required
        </Text>
        <InputGroup display="flex" flexDir="column">
          <FormLabel>City</FormLabel>

          <Select
            bg="light.500"
            h="45px"
            borderRadius="0"
            border="none"
            _focus={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "primary.500",
            }}
          >
            <option value="Baghdad">Baghdad</option>
            <option value="Basra">Basra</option>
          </Select>
        </InputGroup>
        <InputGroup display="flex" flexDir="column">
          <FormLabel>District</FormLabel>

          <Select
            bg="light.500"
            h="45px"
            borderRadius="0"
            border="none"
            _focus={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "primary.500",
            }}
          >
            <option value="Amiriyah">Amiriyah</option>
            <option value="Karrada">Karrada</option>
          </Select>
        </InputGroup>
        <InputGroup display="flex" flexDir="column">
          <FormLabel>Street / Nearest Point</FormLabel>
          <Input
            bg="light.500"
            h="45px"
            borderRadius="0"
            border="none"
            _focus={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "primary.500",
            }}
          />
        </InputGroup>
        <InputGroup display="flex" flexDir="column">
          <FormLabel>Postal Code</FormLabel>
          <Input
            bg="light.500"
            h="45px"
            borderRadius="0"
            border="none"
            _focus={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "primary.500",
            }}
          />
        </InputGroup>
        <InputGroup display="flex" flexDir="column">
          <FormLabel>Phone Number</FormLabel>
          <Input
            bg="light.500"
            h="45px"
            borderRadius="0"
            border="none"
            _focus={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "primary.500",
            }}
          />
        </InputGroup>
        <Button
          variant="primary"
          minH="45px"
          mt="10px"
          fontSize="16px"
          onClick={() => navigate("/register/payment")}
        >
          Save Address
        </Button>
        <Flex alignSelf="center" mt="4px" _hover={{ cursor: "pointer" }}>
          <Icon as={Location} h="24px" w="24px" fill="primary.500" />
          <Text ml="5px" as="u" color="dark.500">
            Add Another Address
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Address;
