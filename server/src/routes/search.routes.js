const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
require('dotenv').config()

const Product = require('../models/product')

router.get('/', (req, res) => {
    const { q: query } = req.query
    Product.find({ name: { "$regex": query, "$options": "i" } }, (err, docs) => {
        res.json({
            results: docs
        })
    })
})

module.exports = router