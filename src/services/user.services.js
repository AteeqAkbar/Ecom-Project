const db = require("../models/index");



// show all User

const allUser = async (req, res) => {


    const allUser = await db.User.findAll();
    if (allUser === null) {
        console.log('Not found!');
    }
    else {

        console.log(allUser);
        return allUser

    }

}


// get product by id

const getSingleUser = async (req, res) => {

    const id = req.params.id

    const singleUser = await db.User.findByPk(id);

    console.log(singleUser);
    return singleUser

}
// update by id and spasific filled

const updateUser = async (req, res) => {

    const id = req.params.id


    const updateUser = await db.User.update({ name: req.body.name }, {
        where: {
            id: id
        }
    });

    console.log(updateUser);
    return updateUser


}

//  delete user
const deleteUser = async (req, res) => {

    const id = req.params.id


    const deleteUser = await db.User.destroy({
        where: {
            id: id
        }
    });

    return deleteUser;


}



module.exports = {

    getSingleUser,
    deleteUser,
    updateUser,
    allUser
}