const express = require("express");
const productController = require("../controllers/product.controller");
const auth = require("../middlewares/auth");

const router = express.Router()

router.route('/')
    .get(productController.product)
    .post(productController.add)

router.route('/:id')
    .get(productController.getsinglepro)
    .patch(productController.update)
    .delete(productController.deleteProduct)

// router.route('/:id/images')
//     .get(productController.getsingleproductwithimages)
//add kis category ki product ha
// is oeder ke kitnye products rahtye han

module.exports = router