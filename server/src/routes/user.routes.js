const express = require("express")
const router = express.Router()
require('dotenv').config()

const User = require("../models/user")
const Store = require('../models/store')

const addressRouter = require("./user.address.routes")
const paymentRouter = require("./user.payment.routes")
const wishlistRouter = require("./user.wishlist.routes")


router.use("/address", addressRouter)
router.use("/payment", paymentRouter)
router.use("/wishlist", wishlistRouter)

router.get("/:id?", (req, res) => {
    const callback = (err, doc) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.json(doc)
    }

    if (!req.params.id) {
        User.find({}, callback)
    } else {
        User.findById(req.params.id, callback)
    }
})

router.get('/:id/profile', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        Store.findOne({ owner: req.params.id }, (err, store) => {
            res.json({ user, store })
        })
    })
})

router.post("/", (req, res) => {
    const { email, password, username, firstName, lastName } = req.body

    const userFound = User.countDocuments({ $or: [{ email }, { username }] })

    if (userFound > 0) {
        return res.status(400).send("User already exists")
    }

    const user = new User({
        email,
        username,
        firstName,
        lastName,
    })



    user.hashedPassword = user.generateHash(password)

    user.save((err, user) => {
        if (err) {
            return res.status(500).send(err)
        }
        req.session.user = {
            userID: user._id.toString(),
            isAdmin: false
        }

        res.status(200).json({ message: 'User created successfully', session: req.session })
    })
})



router.put("/:id", (req, res) => {
    const id = req.params.id
    const updates = req.body

    if (!req.session || !req.session.user) {
        return res.status(401).json({ message: 'Unauthorized! No user session' })
    }

    if (req.session.user.userID === id || req.session.isAdmin) {
        User.findByIdAndUpdate(id, updates, (err, user) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.json({ message: 'User updated successfully' })
        })
    } else {
        res.status(401).json({ message: 'Unauthorized! You cannot update this user' })
    }


})

router.delete("/:id", (req, res) => {
    const id = req.params.id

    if (req.session && req.session.userID === id || req.session.isAdmin) {
        User.findByIdAndRemove(id, (err, user) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.json({ message: 'User deleted successfully' })
        })
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
})





module.exports = router
