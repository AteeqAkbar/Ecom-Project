const express = require("express");
const cartController = require("../controllers/checkout.controller");
const {login} = require("../middlewares/auth");

const router = express.Router()



router.route('/')
    .get(login,cartController.checkout)

module.exports = router