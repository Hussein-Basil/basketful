import React from "react";
import { Flex, Box, HStack, Text, Icon, Divider, useBreakpointValue } from "@chakra-ui/react";
import { ReactComponent as DeliveryIcon } from "../../assets/delivery.svg";
import { ReactComponent as FreeShippingIcon } from "../../assets/free-shipping.svg";
import { ReactComponent as DiscountIcon } from "../../assets/discount-20.svg";

const Features = () => {
    const features = useBreakpointValue({
      base: {
        delivery: "Fastest",
        shipping: "Shipping",
        coupon: "Coupons",
    },
        md: {
            delivery: "Fastest Delivery",
            shipping: "FREE Shipping",
            coupon: "20% Coupon",
        },
        xl: {
            delivery: "The Fastest Delivery Services",
            shipping: "FREE Shipping on $99+ Orders",
            coupon: "Register to Get 20% Coupon on First Item",
        }
    })

  return (
    <Flex
      bg="dark.500"
      color="light.500"
      px="2em"
      h={{ sm: "45px", lg: "67px" }}
      py="auto"
      mb={{ sm: "6px", lg: "1em" }}
      justifyContent="space-evenly"
      alignItems="center"
      fontSize={{ sm: "12px", lg: "16px" }}
      width="100%"
    >
      <HStack>
        <Icon
          as={DeliveryIcon}
          fill="primary.500"
          w={{ base: "22px", lg: "38px" }}
          h={{ base: "28px", lg: "48px" }}
        />
        <Text whiteSpace="nowrap">{features.delivery}</Text>
      </HStack>
      <Divider
        orientation="vertical"
        height="2em"
        borderWidth="1px"
        borderColor="primary.500"
      />
      <HStack>
        <Icon
          as={FreeShippingIcon}
          fill="primary.500"
          w={{ base: "18px", lg: "28px" }}
          h={{ base: "18px", lg: "28px" }}
        />
        <Text>
            {features.shipping}</Text>
      </HStack>
      <Divider
        orientation="vertical"
        height="2em"
        borderWidth="1px"
        borderColor="primary.500"
      />
      <HStack >
        <Icon
          as={DiscountIcon}
          fill="primary.500"
          w={{ base: "18px", lg: "28px" }}
          h={{ base: "18px", lg: "28px" }}
        />
        <Text>{features.coupon}</Text>
      </HStack>
    </Flex>
  );
};

export default Features;
