const express = require("express");
const orderController = require("../controllers/order.controller");

const router = express.Router()



router.route('/')
    .get(orderController.allorder)
    .post(orderController.addorder)


router.route('/:id')
    .get(orderController.getsingleorder)
    .patch(orderController.updateorder)
    .delete(orderController.deleteorder)


module.exports = router