const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
require('dotenv').config()

const Store = require("../models/store")

router.get("/populate", (req, res) => {
    const stores = [
        {
            name: "Digital Store",
            ownerID: mongoose.Types.ObjectId("629937a3bf858a4627e52a3e"),
            shortID: "digitalstore",
            logo: "https://i.imgur.com/qQ0ZQ8l.png"
        },
        {
            name: "Toko Elektronik",
            ownerID: mongoose.Types.ObjectId("629937a3bf858a4627e52a3e"),
            shortID: "tokoelektronik",
            logo: "https://i.imgur.com/qQ0ZQ8l.png"
        }
    ]

    Store.insertMany(stores, (error) => {
        if (error) {
            return res.status(500).send(error)
        }
        res.json({ message: 'Stores populated successfully' })
    })
})

router.get("/:name?", (req, res) => {
    const callback = (err, doc) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.json(doc)
    }

    if (!req.params.name) {
        Store.find({}, callback)
    } else {
        Store.findOne({ shortID: req.params.name }, callback)
    }
})

router.post("/", (req, res) => {
    const { adminId, storeId, name, logo } = req.body

    const store = new Store({
        adminId,
        storeId,
        name,
        logo
    })

    store.save((err) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.status(200).json({ message: 'Store created successfully' })
    })
})

router.put("/:id", (req, res) => { // isSelf
    const id = req.params.id
    const updates = req.body

    Store.findByID(id, (err, store) => {
        if (err) {
            return res.status(500).send(err)
        }

        if (req.session.isAdmin || store.ownerID.toString() === req.session.userID) {
            store.findByIdAndUpdate(updates, (err) => {
                if (err) {
                    return res.status(500).send(err)
                }
                res.json({ message: 'Store updated successfully' })
            })
        } else {
            res.json({ message: 'Unauthorized' })
        }
    })

})

router.delete("/:id", (req, res) => { // isSelf
    const id = req.params.id

    Store.findByID(id, (err, store) => {
        if (err) {
            return res.status(500).send(err)
        }

        if (req.session.isAdmin || store.ownerID.toString() === req.session.userID) {
            store.remove((err) => {
                if (err) {
                    return res.status(500).send(err)
                }
                res.json({ message: 'Store deleted successfully' })
            })
        } else {
            res.json({ message: 'Unauthorized' })
        }
    })
})

module.exports = router
