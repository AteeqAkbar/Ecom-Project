const db = require("../models");


// show all Cart

const allCart = async (req, res) => {
    try {

        const Cart = await db.Cart.findAll();
        if (Cart === null) {
            console.log('Not found!');
        }
        else {

            console.log(Cart);
            res.send(Cart)

        }
    } catch (error) {
        res.send(error)
    }
}

// add Cart
const addCart = async (req, res) => {
    try {
        const {
            user_id,
            Cart_address,
            Cart_amount,
            Cart_status
        }
            = req.body

        const addCart = await db.Cart.create({
            user_id,
            Cart_address,
            Cart_amount,
            Cart_status
        });

        console.log(addCart);
        res.send("Cart added")

    } catch (error) {
        res.send(error)

    }

}
// get Cart by id

const getsingleCart = async (req, res) => {
    try {
        const id = req.params.id

        const Cart = await db.Cart.findByPk(id);

        console.log(Cart);
        res.send(Cart)

    } catch (error) {
        res.send(error)

    }

}
// update by id and spasific filled

const updateCart = async (req, res) => {
    try {
        const id = req.params.id


        const Cart = await db.Cart.update({ Cart_address: req.body.Cart_address }, {
            where: {
                ord_id: id
            }
        });

        console.log(Cart);
        res.send(Cart)

    } catch (error) {
        res.send(error)

    }

}

//  delete
const deleteCart = async (req, res) => {
    try {
        const id = req.params.id


        const Cart = await db.Cart.destroy({
            where: {
                ord_id: id
            }
        });

        console.log(Cart);
        res.send("Cart deleted")

    } catch (error) {
        res.send(error)

    }

}





module.exports = { allCart, addCart, getsingleCart, updateCart, deleteCart }