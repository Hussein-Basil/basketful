import React from 'react'
import Navbar from './Navbar'
import Categories from '../components/Categories'
import Footer from './Footer'
import { Grid, Box } from '@chakra-ui/react'

const Layout = ({ children }) => {
    return (
        <Grid minH="100vh" gridTemplateRows="auto 1fr auto" >
            <Box >
                <Navbar />
                <Categories />
            </Box>
            <Box w={{
                sm: "320px",
                md: "768px",
                lg: "1024px",
                xl: "1520px",
            }} m="20px auto">
                {children}
            </Box>
            <Footer />
        </Grid>
    )
}

export default Layout