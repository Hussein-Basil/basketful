import React from 'react'
import { Flex, HStack, Text, Icon, Divider } from '@chakra-ui/react'
import { ReactComponent as DeliveryIcon } from '../../assets/delivery.svg'
import { ReactComponent as FreeShippingIcon } from '../../assets/free-shipping.svg'
import { ReactComponent as DiscountIcon } from '../../assets/discount-20.svg'

const Features = () => {
    return (
        <Flex
            bg="primary.500"
            color="white"
            px="2em"
            h={{ sm: "45px", lg: "67px" }}
            py="auto"
            my={{ sm: "6px", lg: "1em" }}
            justifyContent="space-evenly"
            alignItems="center"
            fontSize={{ sm: "14px", lg: "16px" }}
        >
            <HStack >
                <Icon
                    as={DeliveryIcon}
                    fill="accent_yellow.500"
                    w={{ sm: "22px", lg: "38px" }}
                    h={{ sm: "28px", lg: "48px" }}

                />
                <Text>The Fastest Delivery Services</Text>
            </HStack>
            <Divider
                display={{ sm: "none", lg: "flex" }}
                orientation="vertical"
                height="2em"
                borderWidth="1.5px"
                borderColor="accent_yellow.500"
            />
            <HStack display={{ sm: "none", lg: "flex" }}>
                <Icon
                    as={FreeShippingIcon}
                    fill="accent_yellow.500"
                    w={{ sm: "18px", lg: "28px" }}
                    h={{ sm: "18px", lg: "28px" }}
                />
                <Text>FREE Shipping on $99+ Orders</Text>
            </HStack>
            <Divider
                display={{ sm: "none", lg: "flex" }}
                orientation="vertical"
                height="2em"
                borderWidth="1.5px"
                borderColor="accent_yellow.500"
            />
            <HStack display={{ sm: "none", lg: "flex" }}>
                <Icon
                    as={DiscountIcon}
                    fill="accent_yellow.500"
                    w={{ sm: "18px", lg: "28px" }}
                    h={{ sm: "18px", lg: "28px" }}
                />
                <Text>Register to Get 20% Coupon on First Item</Text>
            </HStack>
        </Flex>
    )
}

export default Features