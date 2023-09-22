import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Grid, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Grid minH="100vh" gridTemplateRows="auto 1fr auto" className="hussein">
      <Navbar />
      <Box
        maxW={{
          base: "100vw",
          md: "768px",
          lg: "1024px",
          xl: "1520px",
        }}
        mb="20px"
        mx="auto"
      >
        <Outlet />
      </Box>
      <Footer />
    </Grid>
  );
};

export default Layout;
