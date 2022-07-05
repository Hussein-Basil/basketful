/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import ProductInfo from './ProductInfo'
import Details from './Details'
import SimilarProducts from './SimilarProducts'
import Reviews from './Reviews'
import { useParams } from 'react-router-dom'

const Product = () => {
    const { id } = useParams()

    const user = {
        place: 'Basra, Iraq'
    }

    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8000/api/product/${id}`, { credentials: "include" })
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    if (!product) {
        return <Text>Loading</Text>
    }

    return (
        <Flex flexDir="column" gap="60px">
            <ProductInfo product={product} />
            <Details />
            <SimilarProducts id={id} />
            {/* <Reviews rating={product.rating} reviews={product.reviews} /> */}
        </Flex>
    )
}

export default Product