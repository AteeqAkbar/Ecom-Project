const express = require("express");
const orderController = require("../controllers/order.controller");
const {login} = require("../middlewares/auth");

const router = express.Router()



router.route('/')
    .get(orderController.allorder)
    .post(login,orderController.addorder)


router.route('/:id')
    .get(orderController.getsingleorder)
    .patch(orderController.updateorder)
    .delete(orderController.deleteorder)


module.exports = router