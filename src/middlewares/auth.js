const config = require('../config/config');
const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
    console.log(req.cookies.JWT)
    console.log()
    jwt.verify(req.cookies.JWT, config.JWT_KEY, function (err, decoded) {
        // console.log(decoded.id) //id
        if (decoded) {

            next()
        } else {
            res.redirect("http://localhost:3200")

        }
    });
}
module.exports = auth