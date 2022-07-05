const express = require("express")
const router = express.Router()
const User = require("../models/user")

router.post("/", (req, res) => {
    const { city, district, street, postalCode, phone } = req.body

    User.findById(req.session.userID, (err, user) => {
        if (err) {
            return res.status(500).send(err)
        }

        user.address = {
            city,
            district,
            street,
            postalCode,
            phone,
        }

        user.save((err) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).json({ message: 'Address added successfully' })
        })
    })
})

router.put("/", (req, res) => {
    const { city, district, street, postalCode, phone } = req.body
    const address = {
        city,
        district,
        street,
        postalCode,
        phone,
    }

    User.findByIdAndUpdate(req.session.userID, { address }, (err) => {
        if (err) {
            return res.status(500).send(err)
        }

        res.status(200).json({ message: 'Address added successfully' })
    })

})

router.delete("/", (req, res) => {
    const address = {
        city: '',
        district: '',
        street: '',
        postalCode: '',
        phone: '',

    }
    User.findByIdAndUpdate(req.session.userID, { address }, (err) => {
        if (err) {
            return res.status(500).send(err)
        }

        res.status(200).json({ message: 'Address deleted successfully' })
    })
})

module.exports = router