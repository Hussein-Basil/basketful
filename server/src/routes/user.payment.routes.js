const express = require("express")
const router = express.Router()

router.post("/payment", (req, res) => {
    const { method, provider, accountNo, cvv, expiryDate } = req.body
    User.findById(req.session.userID, (err, user) => {
        if (err) {
            return res.status(500).send(err)
        }

        user.payment.push({
            method,
            provider,
            accountNo,
            cvv,
            expiryDate,
        })

        user.save((err) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).json({ message: 'Payment added successfully' })
        })
    })
})

module.exports = router