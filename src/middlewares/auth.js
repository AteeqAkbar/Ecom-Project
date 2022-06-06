const config = require('../config/config');
const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
    console.log(req.cookies.JWT)

    jwt.verify(req.cookies.JWT, config.JWT_KEY, function (err, decoded) {
        console.log(decoded.id) //id
        if (decoded) {

            next()
        } else {
            res.redirect("http://localhost:3200")

        }
    });
}


const login = (req, res, next) => {
    console.log(req.cookies.JWT)
    jwt.verify(req.cookies.JWT, config.JWT_KEY, function (err, decoded) {
        console.log("login auth middlewares")
        if (decoded) {
            console.log(decoded.id) //id
            res.locals.id=decoded.id
            next()
        } else {
            console.log("else");
            res.send({note:"Please Login First"})
        }
    });
}

module.exports = {auth,login}