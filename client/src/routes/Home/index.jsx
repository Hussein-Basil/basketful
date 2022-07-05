import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import Ad from '../../components/Ad'
import Features from './Features'
import { Products } from '../../components/Products'
import { Carousel } from '../../components/Carousel'
import Ramadan from '../../assets/ramadan.svg'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/product/")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <Box>
            <Carousel items={[
                {
                    title: 'Ramadan Kareem',
                    description: 'We wish you a happy fasting month with your family and loved ones',
                    image: Ramadan
                },
                {
                    title: 'Ramadan Kareem',
                    description: 'We wish you a happy fasting month with your family and loved ones',
                    image: Ramadan
                },
            ]}
            />
            <Features />
            <Products title="Best Sellers" items={products} />
            <Ad
                text="Basketful is CS50's Graduation Project"
                link="/cs50-graduate-project"
            />
            <Products title="Offers" items={products} />
            <Products title="Featured" items={products} />
        </Box>
    )
}

export default Home