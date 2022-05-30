const db = require("../models");


// show all category

const allCategory = async (req, res) => {
    try {

        const category = await db.Category.findAll();
        if (category === null) {
            console.log('Not found!');
        }
        else {

            console.log(category);
            // res.send(category)
            res.render("pages/category", { category })

        }
    } catch (error) {
        res.send(error)
    }
}

// add category
const addcategory = async (req, res) => {
    try {
        const { name, cat_img } = req.body

        const addcategory = await db.Category.create({
            name,
            cat_img

        });

        console.log(addcategory);
        res.send("category added")

    } catch (error) {
        res.send(error)

    }

}
// get category by id

const getsinglecategory = async (req, res) => {
    try {
        const id = req.params.id

        const category = await db.Category.findByPk(id);

        console.log(category);
        res.send(category)

    } catch (error) {
        res.send(error)

    }

}
// update by id and spasific filled

const updatecategory = async (req, res) => {
    try {
        const id = req.params.id


        const category = await db.Category.update({ name: req.body.name }, {
            where: {
                id: id
            }
        });

        console.log(category);
        res.send(category)

    } catch (error) {
        res.send(error)

    }

}

//  delete
const deletecategory = async (req, res) => {
    try {
        const id = req.params.id


        const category = await db.Category.destroy({
            where: {
                id: id
            }
        });

        console.log(category);
        res.send("category deleted")

    } catch (error) {
        res.send(error)

    }

}

const getcategorybyproduct = async (req, res) => {
    try {
        const id = req.params.id

        const category = await db.Category.findByPk(
            id,
            {
                include: db.Product
            },

        );

        console.log(category);
        // res.send(category)
        res.render("pages/categorybyproduct", { category })

    } catch (error) {
        res.send(error)

    }

}
//get all category with all products
const allCategorywithallproduct = async (req, res) => {
    try {

        const category = await db.Category.findAll({ include: db.Product });
        if (category === null) {
            console.log('Not found!');
        }
        else {

            console.log(category);
            res.send(category)

        }
    } catch (error) {
        res.send(error)
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