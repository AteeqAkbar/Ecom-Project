const db = require("../models/index");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');


const signup = async (req, res) => {
    const { name, email, pass } = req.body
    bcryptPass = await bcrypt.hash(pass, 13)

    const user = await db.User.create({
        name: name,
        email: email,
        pass: bcryptPass
    });

    console.log(user); // 'alice123'
    console.log(user.email); //


    res.send({

        status: true
    })

}

const signin = async (req, res) => {
    console.log(req.body.email);
    const { email, pass } = req.body

    const project = await db.User.findOne({ where: { email: email } });
    console.log(project);
    if (project === null) {
        console.log('Not found!');
    } else {

        bcrypt.compare(pass, project.pass, function (err, result) {
            console.log(result); // result == true

            if (result) {
                if (project.isAdmin == true) {

                    const token = jwt.sign({ id: project.id }, config.JWT_KEY);
                    res.cookie("JWT", token, { httpOnly: true, })
                    console.log("work");
                    res.json({
                        isAdmin: true,
                        status: true
                    })

                } else {
                    const token = jwt.sign({ id: project.id }, config.JWT_KEY);
                    res.cookie("JWT", token, { httpOnly: true, })
                    res.json({
                        isAdmin: false,
                        status: true
                    })
                }
                console.log(project.pass);
            } else {
                res.send({
                    note: "please enter courect password"
                })
            }
        });



    }
}



const logout = async (req, res) => {
    res.cookie("JWT", "", { maxAge: 2, httpOnly: true })
    res.redirect("http://localhost:3200")


}



module.exports = {
    signin,
    signup,
    logout
}