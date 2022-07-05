const express = require('express')
const router = express.Router()

const User = require('../models/user')
const Product = require('../models/product')

router.get('/status', async (req, res) => {
    let cart = req.session.cart || []
    if (cart.length > 0) {
        const products = await Product.find({ _id: { $in: cart.map(item => item.product) } })
        cart = products.map(product => ({
            quantity: cart.find(item => item.product === product._id.toString()).quantity,
            ...product._doc
        }))
    }
    if (req.session && req.session.user) {
        User.findById(req.session.user.userID).then(user => {
            if (!user) {
                return res.status(401).json({ message: 'user not found' })
            }
            res.json({
                isLoggedIn: true,
                user: req.session.user,
                cart
            })
        })
    } else {
        res.status(401).json({
            isLoggedIn: false,
            cart
        })
    }
})

router.post('/login', (req, res) => {
    const { email, password } = req.body

    User.findOne({ email }, (err, user) => {
        if (err) {
            return res.status(500).send(err)
        }
        if (!user) {
            return res.status(401).json({ message: 'email is not assigned to user' })
        }

        if (!user.validPassword(password)) {
            return res.status(401).json({ message: 'password is incorrect' })
        }
        req.session.user = { userID: user._id.toString(), isAdmin: user.role === "admin" }

        res.status(200).json({ message: 'logged in successfully', session: req.session })
    })
})

router.delete('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy()
        res.clearCookie('sid')
        res.status(200).json({ message: 'logout succeed' })
    } else {
        res.status(200).json({ message: 'no user to log out' })
    }
})

module.exports = router