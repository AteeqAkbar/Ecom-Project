const db = require("../models");


// show all product

const product = async (req, res) => {
    try {

        const product = await db.Product.findAll();
        if (product === null) {
            console.log('Not found!');
        }
        else {

            console.log(product);
            // res.send(product)
            res.render("pages/product", { product })

        }
    } catch (error) {
        res.send(error)
    }
}

// add product
const add = async (req, res) => {
    try {
        console.log("in add product");
        const { name, cat_id, price, des, pro_featured } = req.body

        const addproduct = await db.Product.create({
            name,
            cat_id,
            price,
            des,
            pro_featured
        });

        console.log(addproduct);
        res.send("product added")

    } catch (error) {
        res.send(error)

    }

}
// get product by id

const getsinglepro = async (req, res) => {
    try {
        const id = req.params.id

        const product = await db.Product.findByPk(id);

        console.log(product);
        // res.send(product)
        res.render("pages/productExtended", { product })

    } catch (error) {
        res.send(error)

    }

}
// update by id and spasific filled

const update = async (req, res) => {
    try {
        const id = req.params.id


        const product = await db.Product.update({ name: req.body.name }, {
            where: {
                id: id
            }
        });

        console.log(product);
        res.send(product)

    } catch (error) {
        res.send(error)

    }

}

//  delete
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id


        const product = await db.Product.destroy({
            where: {
                id: id
            }
        });

        console.log(product);
        res.send("prodcut deleted")

    } catch (error) {
        res.send(error)

    }

}

// const getsingleproductwithimages = async (req, res) => {
//     try {
//         const id = req.params.id

//         const product = await db.Product.findByPk(id, { include: db.ProductImage });

//         console.log(product);
//         res.send(product)

//     } catch (error) {
//         res.send(error)

//     }

// }






module.exports = {
    product,
    add,
    getsinglepro,
    update,
    deleteProduct
    //,getsingleproductwithimages
}