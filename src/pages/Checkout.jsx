import React from "react";
import { Text, HStack, Box, VStack } from "@chakra-ui/react";

import {
  DeliveryAddress,
  PaymentMethod,
  OrderSummary,
} from "../features/checkout";

const Checkout = () => {
  const addresses = [
    {
      name: "Hussein Basil",
      city: "Baghdad",
      address: "Somewhere in Inner Karada street, Karada, Baghdad, 10001",
      phone: "+964 755 5555",
    },
    {
      name: "Hussein Basil",
      city: "Basrah",
      address: "Mheila Alsegarwa street, Abu Alkhaseeb district,  Basra, 60012",
      phone: "+964 755 5555",
    },
    {
      name: "Hussein Basil",
      city: "Basrah",
      address: "Mheila Alsegarwa street, Abu Alkhaseeb district,  Basra, 60012",
      phone: "+964 755 5555",
    },
  ];
  return (
    <Box>
      <Text fontSize="36px" fontWeight="semibold" mb="1em">
        Checkout
      </Text>
      <HStack justify="space-between" align="start">
        <VStack gap="3em">
          <DeliveryAddress addresses={addresses} />
          <PaymentMethod />
        </VStack>
        <OrderSummary />
      </HStack>
    </Box>
  );
};

export default Checkout;
