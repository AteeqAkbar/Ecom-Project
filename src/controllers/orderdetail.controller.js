const db = require("../models");


// show all orderdetail

const allorderdetail = async (req, res) => {
    try {

        const orderdetail = await db.Order_detail.findAll();
        if (orderdetail === null) {
            console.log('Not found!');
        }
        else {

            console.log(orderdetail);
            res.send(orderdetail)

        }
    } catch (error) {
        res.send(error)
    }
}

// add order
const addorderdetail = async (req, res) => {
    try {
        const {
            detail_id,
            product_id,
            ord_id,
            product_quantity,
            order_price

        }
            = req.body

        const addorderdetail = await db.Order_detail.create({
            // detail_id,
            product_id,
            ord_id,
            product_quantity,
            order_price
        });

        console.log(addorderdetail);
        res.send("orderdetail added")

    } catch (error) {
        res.send(error)

    }

}
// get order by id

const getsingleorderdetail = async (req, res) => {
    try {
        const id = req.params.id

        const orderdetail = await db.Order_detail.findByPk(id);

        console.log(orderdetail);
        res.send(orderdetail)

    } catch (error) {
        res.send(error)

    }

}
// update by id and spasific filled

const updateorderdetail = async (req, res) => {
    try {
        const id = req.params.id


        const orderdetail = await db.Order_detail.update({ product_quantity: req.body.product_quantity }, {
            where: {
                detail_id: id
            }
        });

        console.log(orderdetail);
        res.send(orderdetail)

    } catch (error) {
        res.send(error)

    }

}

//  delete
const deleteorderdetail = async (req, res) => {
    try {
        const id = req.params.id


        const orderdetail = await db.Order_detail.destroy({
            where: {
                detail_id: id
            }
        });

        console.log(orderdetail);
        res.send("orderdetail deleted")

    } catch (error) {
        res.send(error)

    }

}





module.exports = {
    allorderdetail,
    addorderdetail,
    getsingleorderdetail,
    updateorderdetail,
    deleteorderdetail
}