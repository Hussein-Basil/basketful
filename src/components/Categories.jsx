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

const Categories = () => {

    const categories = [
        [<Icon as={Home} fill="dark.500" w="25px" h="25px" />, '/'],
        ['Clothes', '/category/clothes'],
        ['Shoes', '/category/shoes'],
        ['Accessories', '/category/accessories'],
        ['Bags', '/category/bags'],
        ['Jewelry', '/category/jewelry'],
        ['Watches', '/category/watches'],
        ['Beauty', '/category/beauty'],
        ['Sports', '/category/sports'],
        ['Electronics', '/category/electronics'],
        ['Food', '/category/food'],
    ]

    return (
        <Flex
            alignItems="center"
            borderBottom="1px"
            borderColor="rgba(0,0,0,0.05)"
            h="60px"
            overflow="hidden"
            position="relative"
        >
            <Flex
                w={{
                    sm: "320px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1520px",
                }}
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