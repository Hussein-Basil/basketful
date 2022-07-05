const express = require("express")
const router = express.Router()
const Category = require("../models/category")
const array = [
    {
        name: "Clothes",
        description: "some text",
        image: "",
        parentID: null,
    },
    {
        name: "Shoes",
        description: "some text",
        image: "",
        parentID: null,
    },
    {
        name: "Accessories",
        description: "some text",
        image: "",
        parentID: null,
    },
    {
        name: "Bags",
        description: "some text",
        image: "",
        parentID: null,
    },
    {
        name: "Jewelry",
        description: "some text",
        image: "",
        parentID: null,
    },
    {
        name: "Beauty",
        description: "some text",
        image: "",
        parentID: null,
    },
    {
        name: "Sports",
        description: "some text",
        image: "",
        parentID: null,
    },
    {
        name: "Electronics",
        description: "some text",
        image: "",
        parentID: null,
    },
    {
        name: "Food",
        description: "some text",
        image: "",
        parentID: null,
    },
]

router.get("/", (req, res) => {
    Category.insertMany(array, (err, docs) => {
        if (err) {
            console.log(err)
        } else {
            console.log(docs)
        }
    })
    return res.json({ message: "inserted successfully" })
})




module.exports = router