const express = require("express");
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth");

const router = express.Router()

router.route('/signin')
    .get((req, res) => { res.render("pages/signin") })
    .post(authController.signin)


router.route('/signup')
    .get((req, res) => { res.render("pages/signup") })
    .post(authController.signup)

router.route('/logout')
    .get(authController.logout)


router.route('/')
    .get(userController.allUser)


router.route('/:id')
    .get(userController.getSingleUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

//add logout route

module.exports = router