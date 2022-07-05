const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const User = require("../models/user")
const Product = require("../models/product")

router.get("/", (req, res) => {
    // if (req.session && req.session.user) {
    //     User.findById(req.session.user.userID)
    //         .populate({
    //             path: "cart",
    //             populate: {
    //                 path: "product",
    //             }
    //         })
    //         .lean()
    //         .exec((err, user) => {
    //             if (err) {
    //                 return res.status(500).send(err)
    //             }
    //             if (!user) {
    //                 return res.status(401).json({ message: 'user not found' })
    //             }
    //             const cart = user.cart.map(item => ({ quantity: item.quantity, ...item.product._doc }))

    //             res.json({ cart })
    //         })
    // } 
    const ids = (req.session.cart && req.session.cart.map(item => item.product)) || []
    Product.find({ _id: { $in: ids } }, (err, products) => {
        if (err) {
            return res.status(500).send(err)
        }
        const cart = products.map(product => {
            return {
                quantity: req.session.cart.find(item => item.product === product._id.toString()).quantity,
                ...product._doc
            }
        })
        res.json({ cart })
    })
})
router.post("/", async (req, res) => {
    const { product, quantity } = req.body

    // if (req.session && req.session.user && req.session.user.userID) {
    //     const user = await User.findById(req.session.user.userID)

    //     if (!user) {
    //         return res.status(401).json({ message: "Unauthorized! Unvalid user" })
    //     }

    //     if (user.cart && user.cart.map(item => item.product.toString()).includes(product)) {
    //         return res.status(400).json({ message: "Product already in cart" })
    //     }

    //     user.cart = user.cart || []
    //     user.cart.push({ product: mongoose.Types.ObjectId(product), quantity })

    //     user.save((err) => {
    //         if (err) {
    //             return res.status(500).send(err)
    //         }
    //         Product.findById(product, (err, productFound) => {
    //             if (err) {
    //                 return res.status(500).send(err)
    //             }

    //             if (!productFound) {
    //                 return res.status(404).json({ message: "Product not found" })
    //             }

    //             const item = {
    //                 quantity,
    //                 ...productFound._doc
    //             }
    //             return res.json({ message: 'Product added successfully', item })
    //         })

    //     })
    // } 
    req.session.cart = req.session.cart || []

    if (req.session.cart.filter(item => item.product === product).length > 0) {
        return res.status(400).json({ message: "Product already in cart" })
    }

    Product.findById(product, (err, productFound) => {
        if (err) {
            return res.status(500).send(err)
        }

        if (!productFound) {
            return res.status(404).json({ message: "Product not found" })
        }

        const item = {
            quantity,
            ...productFound._doc
        }
        req.session.cart.push({ product, quantity })
        return res.json({ message: 'Product added successfully', item })
    })
})
router.put("/", (req, res) => {
    const { product_id, quantity } = req.body

    // if (req.session.user && req.session.user.userID) {

    //     const user = await User.findById(req.session.user.userID)
    //     user.cart = user.cart || []
    //     user.cart = user.cart.map(item => {
    //         if (quantity > 0) {
    //             if (item._id === product) {
    //                 return {
    //                     ...item,
    //                     quantity
    //                 }
    //             }
    //             return item
    //         }
    //     })
    //     user.save((err) => {
    //         if (err) {
    //             return res.status(500).send(err)
    //         }
    //         res.json({ message: "Quantity updated successfully" })
    //     })

    // } 
    const cart = req.session.cart || []
    req.session.cart = cart.map(item => {
        if (quantity > 0) {
            if (item.product === product_id) {
                return {
                    ...item,
                    quantity: quantity
                }
            }
            return item
        }
    })
    res.json({ message: "Quantity updated successfully", cart: req.session.cart })


})
router.delete("/:id", (req, res) => {
    const product_id = req.params.id
    // if (req.session.user && req.session.user.userID) {
    //     User.findByIdAndUpdate(req.session.user.userID, {
    //         $pull: {
    //             cart: {
    //                 product: product_id
    //             }
    //         }
    //     }, (err, user) => {
    //         if (err) {
    //             return res.status(500).send(err)
    //         }

    //         if (!user) {
    //             return res.status(401).json({ message: 'user not found' })
    //         }

    //         res.json({ message: 'Product removed successfully' })
    //     })
    // }
    req.session.cart = (req.session.cart && req.session.cart.filter(item => item.product !== product_id)) || []
    return res.json({ message: 'Product removed successfully' })

})

router.delete("/", (req, res) => {
    req.session.cart = []
    return res.json({ message: 'cart is emptyed' })
})

module.exports = router