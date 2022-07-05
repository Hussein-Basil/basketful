import React, { useState, useEffect } from 'react'
import { Products } from '../../components/Products'

const SimilarProducts = ({ id }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/product/")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <Products
            title="Similar products"
            items={products}
        />
    )
}

export default SimilarProducts