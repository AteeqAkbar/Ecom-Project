const express = require("express");
const cartController = require("../controllers/cart.controller");
const {login} = require("../middlewares/auth");

const router = express.Router()



router.route('/')
    .get(login,cartController.getsingleCartwithcartitems)
    .post(login,cartController.addCart)


router.route('/:id')
    .get(login,cartController.deleteCart)
    .patch(login,cartController.updateCart)
    // .delete(login,cartController.deleteCart)


module.exports = router