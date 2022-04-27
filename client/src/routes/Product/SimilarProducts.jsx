import React, { useState, useEffect } from 'react'
import { Products } from '../../components/Products'

const SimilarProducts = ({ id }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/products.json', {
            headers: { 'Accept': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data.products.filter(product => product.id !== Number(id)))
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