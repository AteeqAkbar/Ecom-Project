const express = require("express");
const productImageController = require("../controllers/productimage.controller");

const router = express.Router()

router.route('/')
    .get(productImageController.allproductimages)
    .post(productImageController.addproductimage)

router.route('/:id')
    .get(productImageController.getsingleproimage)
    .patch(productImageController.updateimg)
    .delete(productImageController.deleteProductimg)

module.exports = router