import React, { useState, useEffect } from 'react'
import Ad from '../../components/Ad'
import { Products } from '../../components/Products'
import Features from './Features'
import { Carousel } from '../../components/Carousel'
import Ramadan from '../../assets/ramadan.svg'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/products.json', {
            headers: { 'Accept': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
            })
    }, [])

    return (
        <div>
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
        </div>
    )
}

export default Home