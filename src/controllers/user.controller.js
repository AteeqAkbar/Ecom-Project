const db = require("../models/index");



// show all User

const allUser = async (req, res) => {
    try {

        const allUser = await db.User.findAll();
        if (allUser === null) {
            console.log('Not found!');
        }
        else {

            console.log(allUser);
            res.send(allUser)

        }
    } catch (error) {
        res.send(error)
    }
}


// get product by id

const getSingleUser = async (req, res) => {
    try {
        const id = req.params.id

        const singleUser = await db.User.findByPk(id);

        console.log(singleUser);
        res.send(singleUser)

    } catch (error) {
        res.send(error)

    }

}
// update by id and spasific filled

const updateUser = async (req, res) => {
    try {
        const id = req.params.id


        const updateUser = await db.User.update({ name: req.body.name }, {
            where: {
                id: id
            }
        });

        console.log(updateUser);
        res.send(updateUser)

    } catch (error) {
        res.send(error)

    }

}

//  delete user
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id


        const deleteUser = await db.User.destroy({
            where: {
                id: id
            }
        });

        console.log(deleteUser);
        res.send("user deleted")

    } catch (error) {
        res.send(error)

    }

}



module.exports = {

    getSingleUser,
    deleteUser,
    updateUser,
    allUser
}