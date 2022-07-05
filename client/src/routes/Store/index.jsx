import React, { useState, useEffect } from 'react'
import { Flex, Input, InputRightElement, InputGroup, Button, Select, Image, Text, Heading, FormLabel } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Products } from '../../components/Products'
import { useParams } from 'react-router-dom'

const ControlButtons = ({ categories }) => {
    return (
        <Flex
            flexDir="row"
            gap="1em"
        >
            <Flex w="200px" justify="left" flexDir="column">
                <FormLabel mb="5px">Filter</FormLabel>
                <Select>
                    <option>All</option>
                    {categories.map((category, index) => <option key={index}>{category}</option>)}
                </Select>
            </Flex>
            <Flex w="200px" justify="left" flexDir="column">
                <FormLabel mb="5px">Sort</FormLabel>
                <Select >
                    <option>Newest</option>
                    <option>Oldest</option>
                </Select>
            </Flex>
        </Flex>
    )
}

const Tags = ({ tags }) => {

    if (tags.length === 0) return null

    return (
        <Flex flexDir="row" gap="1em" >
            {tags.map((tag, index) => {
                return (
                    <Button
                        variant="unset"
                        color="gray.100"
                        borderColor="gray.100"
                        borderWidth="1px"
                        _hover={{
                            bg: "gray.100",
                            color: "gray.900"
                        }}
                        key={index}
                    >
                        {tag}
                    </Button>
                )
            })}
        </Flex>
    )
}

const Store = () => {
    const { id } = useParams()
    const categories = ["Electronics", "Acessories", "Watches", "Bags"]
    const products = [
        {
            "_id": "6299d7ae0887a312cbea3671",
            "name": "Oculus Quest 2 - Advanced All-In-One Virtual Reality Headset - 256 GB",
            "price": 100000,
            "image": "https://m.media-amazon.com/images/I/61kwRNPtMpL._SL1500_.jpg"
        },
        {
            "_id": "6299d7ae0887a312cbea3672",
            "name": "AVITA LIBER 14 Inches - RYZEN 7 3700U - 8GB RAM - 512GB SSD - Black",
            "price": 975000,
            "image": "https://www.tamata.com/media/catalog/product/cache/b1b762920b4f64fe70902904558ecc11/t/a/taif-f-5-12-2021-24_1.jpg"
        },
        {
            "_id": "6299d7ae0887a312cbea3673",
            "name": "Poso PS-501 Laptop Bag-Black",
            "price": 35000,
            "image": "https://www.tamata.com/media/catalog/product/cache/9413d357ac30ba29949bdcb2c26de184/c/o/collbell14-1-2021-9.jpg"
        },
        {
            "_id": "6299d7ae0887a312cbea3674",
            "name": "Honor 2 Lite Wireless Earbuds",
            "price": 103900,
            "image": "https://www.tamata.com/media/catalog/product/cache/9413d357ac30ba29949bdcb2c26de184/b/e/belltelalwatani2-1-2022-74.jpg"
        },
        {
            "_id": "6299d7ae0887a312cbea3675",
            "name": "حقيبة ظهر بتصميم خفيف 16 لتر من Tandem Trail",
            "price": 15000,
            "image": "https://www.tamata.com/media/catalog/product/cache/9413d357ac30ba29949bdcb2c26de184/s/u/sunandsand1-4-2021sm-115.jpg"
        }
    ]

    const [store, setStore] = useState({})

    useEffect(() => {
        fetch(`http://localhost:8000/api/store/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setStore(data)
            })
    }, [id])


    const loadProducts = () => {
        let result = []
        let i = 0
        while (i < products.length) {
            result.push(products.slice(i, i + 4))
            i += 4
        }
        return result.map((items, index) => <Products items={items} key={index} />)
    }

    return (
        <Flex flexDir="column" gap="5em">
            <Flex
                bg="primary.500"
                h="525px"
                w="100%"
                align="center"
                justify="center"
                flexDir="column"
                gap="1em"
                position="relative"
            >
                <Image borderRadius="50%" w="178px" h="178px" bg="gray.100" src={store.logo || ""} />
                <Heading size="h1" color="white" fontWeight="normal">
                    {store && store.name}
                </Heading>
                <Text color="white" fontSize="xl">
                    {store && store.description}
                </Text>
                <Tags tags={categories} />
                <InputGroup w="575px" position="absolute" bottom="-20px" display="flex">
                    <Input
                        placeholder="Search for product name"
                        variant="primary"
                        h="50px"
                    />
                    <InputRightElement children={<SearchIcon />} mt="5px" />
                </InputGroup>
            </Flex>
            <ControlButtons categories={categories} />
            {loadProducts()}

        </Flex>
    )
}

export default Store