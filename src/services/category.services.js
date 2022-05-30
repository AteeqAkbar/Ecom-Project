const db = require("../models");


// show all category

const allCategory = async (req, res) => {

    const category = await db.Category.findAll();
    if (category === null) {
        console.log('Not found!');
    }
    else {

        return category
    }
}
// add category
const addcategory = async (req, res) => {

    const { name, cat_img } = req.body

    const addcategory = await db.Category.create({
        name,
        cat_img

    });

    return addcategory


}
// get category by id

const getsinglecategory = async (req, res) => {

    const id = req.params.id

    const category = await db.Category.findByPk(id);

    return category;



}
// update by id and spasific filled

const updatecategory = async (req, res) => {

    const id = req.params.id


    const category = await db.Category.update({ name: req.body.name }, {
        where: {
            id: id
        }
    });

    return category



}

//  delete
const deletecategory = async (req, res) => {

    const id = req.params.id


    const category = await db.Category.destroy({
        where: {
            id: id
        }
    });

    return category


}

const getcategorybyproduct = async (req, res) => {

    const id = req.params.id

    const category = await db.Category.findByPk(
        id,
        {
            include: db.Product
        },

    );

    return category;
}

//get all category with all products
const allCategorywithallproduct = async (req, res) => {


    const category = await db.Category.findAll({ include: db.Product });
    if (category === null) {
        console.log('Not found!');
    }
    else {

        return category

    }

}





module.exports = {
    allCategory,
    addcategory,
    getsinglecategory,
    updatecategory,
    deletecategory,
    getcategorybyproduct,
    allCategorywithallproduct
}