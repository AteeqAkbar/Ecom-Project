const db = require("../models");


// show all product image

const allproductimages = async (req, res) => {
    try {
        const productimg = await db.ProductImage.findAll();
        if (productimg === null) {
            console.log('Not found!');
        }
        else {

            console.log(productimg);
            res.send(productimg)

        }
    } catch (error) {
        res.send(error)
    }
}

// add productimage
const addproductimage = async (req, res) => {
    try {
        const { pro_id, img_url, default_image } = req.body

        const addproduct = await db.ProductImage.create({
            pro_id,
            img_url,
            default_image
        });

        console.log(addproduct);
        res.send("productimage added")

    } catch (error) {
        res.send(error)

    }

}
// get productimage by id

const getsingleproimage = async (req, res) => {
    try {
        const id = req.params.id

        const productimg = await db.ProductImage.findByPk(id);

        console.log(productimg);
        res.send(productimg)

    } catch (error) {
        res.send(error)

    }

}
// update by id and spasific filled fo image

const updateimg = async (req, res) => {
    try {
        const id = req.params.id


        const product = await db.ProductImage.update({ img_url: req.body.img_url }, {
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
const deleteProductimg = async (req, res) => {
    try {
        const id = req.params.id


        const product = await db.ProductImage.destroy({
            where: {
                id: id
            }
        });

        console.log(product);
        res.send("prodcutimg deleted")

    } catch (error) {
        res.send(error)

    }

}







module.exports = {
    allproductimages,
    addproductimage,
    getsingleproimage,
    updateimg,
    deleteProductimg
}