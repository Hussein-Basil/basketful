const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
require('dotenv').config()

const Product = require("../models/product")

router.get("/populate", (req, res) => {
    const products = [{
        name: "Oculus Quest 2 - Advanced All-In-One Virtual Reality Headset - 256 GB",
        storeID: mongoose.Types.ObjectId("6299d57229eed3c6ea88267c"),
        categoryID: mongoose.Types.ObjectId("6299d2621d64431a21abf379"),
        price: 100000,
        image: "https://m.media-amazon.com/images/I/61kwRNPtMpL._SL1500_.jpg",
        stockQuantity: 2,
    }, {
        name: "AVITA LIBER 14 Inches - RYZEN 7 3700U - 8GB RAM - 512GB SSD - Black",
        storeID: mongoose.Types.ObjectId("6299d57229eed3c6ea88267c"),
        categoryID: mongoose.Types.ObjectId("6299d2621d64431a21abf379"),
        price: 975000,
        image: "https://www.tamata.com/media/catalog/product/cache/b1b762920b4f64fe70902904558ecc11/t/a/taif-f-5-12-2021-24_1.jpg",
        stockQuantity: 10,
    }, {
        name: "Poso PS-501 Laptop Bag-Black",
        storeID: mongoose.Types.ObjectId("6299d57229eed3c6ea88267d"),
        categoryID: mongoose.Types.ObjectId("6299d2621d64431a21abf379"),
        price: 35000,
        image: "https://www.tamata.com/media/catalog/product/cache/9413d357ac30ba29949bdcb2c26de184/c/o/collbell14-1-2021-9.jpg",
        stockQuantity: 5,
    }, {
        name: "Honor 2 Lite Wireless Earbuds",
        storeID: mongoose.Types.ObjectId("6299d57229eed3c6ea88267d"),
        categoryID: mongoose.Types.ObjectId("6299d2621d64431a21abf379"),
        price: 103900,
        image: "https://www.tamata.com/media/catalog/product/cache/9413d357ac30ba29949bdcb2c26de184/b/e/belltelalwatani2-1-2022-74.jpg",
        stockQuantity: 8,
    }, {
        name: "حقيبة ظهر بتصميم خفيف 16 لتر من Tandem Trail",
        storeID: mongoose.Types.ObjectId("6299d57229eed3c6ea88267d"),
        categoryID: mongoose.Types.ObjectId("6299d2621d64431a21abf375"),
        price: 15000,
        image: "https://www.tamata.com/media/catalog/product/cache/9413d357ac30ba29949bdcb2c26de184/s/u/sunandsand1-4-2021sm-115.jpg",
        stockQuantity: 3,
    }]

    Product.insertMany(products, (err) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.status(200).json({ message: 'Products populated successfully' })
    })
})

router.get("/:id?", (req, res) => {
    if (req.params.id) {
        Product.findById(req.params.id, "-createdAt -updatedAt -__v").
            populate([
                {
                    path: "store",
                    select: "name shortID -_id"
                },
                {
                    path: "category",
                    select: "name -_id"
                }
            ])
            .exec((err, product) => {
                if (err) {
                    return res.status(500).send(err)
                }
                res.json(product)
            })
    } else {
        Product.find({}, "name price image", (err, products) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.json(products)
        })
    }
})

router.post("/:id", (req, res) => {
    const {
        name,
        description,
        storeID,
        categoryID,
        price,
        image,
        stockQuantity,
        discountID
    } = req.body

    const product = new Product({
        name,
        description,
        storeID,
        categoryID,
        price,
        image,
        stockQuantity,
        discountID
    })

    product.save((err) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.status(200).json({ message: 'Product created successfully' })
    })
})

module.exports = router
