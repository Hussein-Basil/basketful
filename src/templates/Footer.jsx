import React from "react";
import { Flex, Heading, Link, Image, Icon } from "@chakra-ui/react";
import Facebook from "../assets/social/facebook.png";
import Twitter from "../assets/social/twitter.png";
import Instagram from "../assets/social/instagram.png";
import Linkedin from "../assets/social/linkedin.png";

import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Flex flexDir="column" mt="2em" py="4em" bg="primary.700" color="white">
      {/* Site Map */}
      <Flex
        w={{
          sm: "320px",
          md: "768px",
          lg: "1024px",
          xl: "1520px",
        }}
        mx="auto"
        flexDir="column"
        rowGap="45px"
      >
        <Flex
          justifyContent="space-between"
          display={{ base: "none", lg: "flex" }}
        >
          <Flex flexDir="column" rowGap="5px">
            <Heading as="h3" size="md" mb="10px">
              MAIN
            </Heading>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About Us</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
          </Flex>
          <Flex flexDir="column" rowGap="5px">
            <Heading as="h3" size="md" mb="10px">
              CATEGORIES
            </Heading>
            <RouterLink to="/category/electronics">Electronics</RouterLink>
            <RouterLink to="/category/clothes">Clothes</RouterLink>
            <RouterLink to="/category/accessories">Accessories</RouterLink>
          </Flex>
          <Flex flexDir="column" rowGap="5px">
            <Heading as="h3" size="md" mb="10px">
              HELP
            </Heading>
            <RouterLink to="/privacy-terms">Privacy terms</RouterLink>
            <RouterLink to="/cutstomer-service">Customer Service</RouterLink>
            <RouterLink to="/faq">FAQ</RouterLink>
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          flexDir={{ base: "column", lg: "row" }}
          gap="2rem"
        >
          {/* Social Links */}
          <Flex flexDir="column" rowGap="10px">
            <Heading as="h3" size="md">
              Follow us
            </Heading>
            <Flex columnGap="20px">
              <Link href="https://fb.com/basketful">
                <Image src={Facebook} w="40px" h="40px" />
              </Link>
              <Link href="https://twitter.com/basketful">
                <Image src={Twitter} w="40px" h="40px" />
              </Link>
              <Link href="https://instagram.com/basketful">
                <Image src={Instagram} w="40px" h="40px" />
              </Link>
              <Link href="https://linkedin.com/basketful">
                <Image src={Linkedin} w="40px" h="40px" />
              </Link>
            </Flex>
          </Flex>
          {/* Contact Info*/}
          <Flex flexDir="column" rowGap="5px">
            <Heading as="h3" size="md" mb="10px">
              Contact
            </Heading>
            <Link href="tel:+9641234567890">📞 +9641234567890</Link>
            <Link href="mailto:contact@basketful.com">
              📧 contact@basketful.com
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
