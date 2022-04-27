/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import ProductInfo from './ProductInfo'
import Details from './Details'
import SimilarProducts from './SimilarProducts'
import Reviews from './Reviews'
import { useParams } from 'react-router-dom'

const Product = () => {
    const params = useParams()

    const user = {
        place: 'Nasiriayah, Iraq'
    }

    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/products.json', {
            headers: { 'Accept': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                setProduct(data.products.find(product => product.id === Number(params.id)))
            })
    }, [])

    if (!product) {
        return <Text>Loading</Text>
    }

    return (
        <Flex flexDir="column" gap="60px">
            <ProductInfo product={product} user={user} />
            <Details details={product.details} />
            <SimilarProducts id={params.id} />
            <Reviews rating={product.rating} reviews={product.reviews} />
        </Flex>
    )
}

export default Product