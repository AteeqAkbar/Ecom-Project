const express = require("express");
const orderdetailController = require("../controllers/orderdetail.controller");

const router = express.Router()



router.route('/')
    .get(orderdetailController.allorderdetail)
    .post(orderdetailController.addorderdetail)


router.route('/:id')
    .get(orderdetailController.getsingleorderdetail)
    .patch(orderdetailController.updateorderdetail)
    .delete(orderdetailController.deleteorderdetail)


module.exports = router