const express = require("express");
const cartitemController = require("../controllers/cartitem.controller");

const router = express.Router()



router.route('/')
    .get(cartitemController.allCartitem)
    .post(cartitemController.addCartitem)


router.route('/:id')
    .get(cartitemController.getsingleCartitem)
    .patch(cartitemController.updateCartitem)
    .delete(cartitemController.deleteCartitem)


module.exports = router