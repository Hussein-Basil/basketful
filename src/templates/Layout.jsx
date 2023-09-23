import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Grid, Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Flex flexDir="column" minH="100vh" gridTemplateRows="auto 1fr auto">
      <Navbar />
      <Box
        maxW={{
          base: "100vw",
          xl: "1520px",
        }}
        my="20px"
        mx="auto"
        flex={1}
      >
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
