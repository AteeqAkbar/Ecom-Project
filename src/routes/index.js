const express = require("express");
const userRoute = require("./route.user")
const productRoute = require("./route.product")
const adminRoute = require("./route.admin")
const productImageRoute = require("./route.productimages")
const categoryRoute = require("./route.category")
const orderRoute = require("./route.order")
const homeRoute = require("./route.home")
const orderdetailRoute = require("./route.orderdetail")
const router = express.Router()
const routes = [
    {
        path: "/",
        route: homeRoute
    },
    {
        path: "/admin",
        route: adminRoute
    },
    {
        path: "/user",
        route: userRoute
    },
    {
        path: "/product",
        route: productRoute
    },
    {
        path: "/productimage",
        route: productImageRoute
    },
    {
        path: "/category",
        route: categoryRoute
    },
    {
        path: "/order",
        route: orderRoute
    },
    {
        path: "/orderdetail",
        route: orderdetailRoute
    },
]

routes.forEach(rote => {
    router.use(rote.path, rote.route)

});
module.exports = router