const db = require("../models");


// show all category

const homepage = async (req, res) => {
    try {
        const allcategory = await db.Category.findAll();
        const allcategoryallpro = await db.Category.findAll({ include: db.Product });
        const allproduct = await db.Product.findAll();
        const data = { allcategory, allcategoryallpro, allproduct }
        if (allcategory === null && allcategoryallpro === null && allproduct === null) {
            console.log('Not found!');
        }
        else {

            // res.send(data)

            res.render("pages/index", { data })

        }
    } catch (error) {
        res.send(error)
    }
}



module.exports = {
    homepage,
}