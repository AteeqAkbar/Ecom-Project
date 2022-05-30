const express = require("express");
const adminController = require("../controllers/admin.controller");
const authController = require("../controllers/auth");
const auth = require("../middlewares/auth");
const image = require("../middlewares/multer");




//////////image// multer/////
const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "public/data/uploads")
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + file.originalname)

//     }
// })
// const uploads = multer({ storage: storage })
// const uploadfile = uploads.single("cat_img")



/////////////////////////////////////////////////////////////////////////



const router = express.Router()

router.route('/')
    .get(auth, adminController.admin)

////////////////////////////////<======admin/product=============>////////////////
const productimage = image.single("image")

router.route('/product/add')
    .get(adminController.addproductfrom)
    .post(productimage, adminController.addproduct)


router.route('/product')
    .get(adminController.allproductShow)

router.route('/product/:id')
    .get(adminController.getsinglepro)
    .patch(productimage, adminController.update)
    .delete(adminController.deleteProduct)

router.route('/product/:id/update')
    .get(adminController.updatesinglepro)



////////////////////////////////<======admin/category=============>////////////////

//////////////////set from filed in same name lik cat_img////////////////

const fileupload = image.single("cat_img")

router.route('/category/add')
    .get(adminController.addcategoryfrom)
    .post(fileupload, adminController.addcategory)



router.route('/category')
    .get(adminController.allCategory)

router.route('/category/:id')
    .get(adminController.getsinglecategory)
    .patch(fileupload, adminController.updatecategory)
    .delete(adminController.deletecategory)

router.route('/category/:id/update')
    .get(adminController.updatesinglecat)

////////////////////////////////<======admin/user=============>////////////////

router.route('/user/add')
    .get(adminController.addcategoryfrom)
    .post(adminController.addcategory)



router.route('/user')
    .get(adminController.allCategory)

router.route('/user/:id')
    .get(adminController.getsinglecategory)
    .patch(adminController.updatecategory)
    .delete(adminController.deletecategory)


////////////////////////////////<======admin/productImage=============>////////////////

router.route('/productimage/add')
    .get(adminController.addcategoryfrom)
    .post(adminController.addcategory)



router.route('/productimage')
    .get(adminController.allCategory)

router.route('/productimage/:id')
    .get(adminController.getsinglecategory)
    .patch(adminController.updatecategory)
    .delete(adminController.deletecategory)





router.route('/logout')
    .get(authController.logout)


module.exports = router