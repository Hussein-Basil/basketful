import React from 'react'
import { Flex, GridItem, Icon } from '@chakra-ui/react'
import { ReactComponent as Home } from '../assets/home.svg'
import { Link } from 'react-router-dom'

const CategoryItem = ({ children, path }) => {
    return (
        <GridItem
            py="10px"
            m="0"
            textAlign="left"
            _hover={{ textDecorationLine: "underline" }}
        >
            <Link to={path || ''}>
                {children}
            </Link>
        </GridItem>
    )
}

const Categories = ({ categories }) => {
    return (
        <Flex
            alignItems="center"
            borderBottom="1px"
            borderColor="rgba(0,0,0,0.05)"
            h="60px"
            overflow="hidden"
            position="relative"
            bg="primary.500"
            color="white"
        >
            <Flex
                w={{
                    sm: "320px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1440px",
                    '2xl': "1500px"
                }}
                px="20px"
                mx="auto"
                align="center"
                overflow="hidden"
                justify="space-between"
                gap="1.5em"
            >
                {categories.map(([category, path], index) => (
                    <CategoryItem key={index} path={path}>{category}</CategoryItem>
                ))}
            </Flex>
        </Flex>
    )
}

export default Categories