const express = require("express")
const router = express.Router()

const Order = require("../models/order")

router.get("/:id?", (req, res) => {
    if (req.params.id) {
        Order.findById(req.params.id, (err, order) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.json(order)
        })
    } else {
        Order.find({}, (err, orders) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.json(orders)
        })
    }
})

router.post("/", (req, res) => {
    if (
        !req.session ||
        !req.session.user ||
        !req.session.user.userID ||
        !req.body.cart ||
        !req.body.cart.items ||
        req.body.cart.items.length === 0
    ) {
        return res.status(401).send('data is missing')
    }

    const order = new Order({
        userID: req.session.user.userID,
        products: req.body.cart.items,
        total: Number(req.body.cart.total.split('').filter(c => c !== ',').join('')),
        status: 'pending'
    })

    order.save((err) => {
        if (err) {
            return res.status(500).send(err)
        }
        req.session.cart = []
        res.status(200).json({ message: 'Order created successfully' })
    })
})

module.exports = router