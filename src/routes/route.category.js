const express = require("express");
const categoryController = require("../controllers/category.controller");

const router = express.Router()



router.route('/')
    .get(categoryController.allCategory)
    .post(categoryController.addcategory)

router.route("/all").get(categoryController.allCategorywithallproduct)

router.route('/:id')
    .get(categoryController.getsinglecategory)
    .patch(categoryController.updatecategory)
    .delete(categoryController.deletecategory)


router.route('/:id/product')
    .get(categoryController.getcategorybyproduct)
//add categorys products
module.exports = router