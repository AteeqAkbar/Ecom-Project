const db = require("../models");


// show all orderdetail

const allorderdetail = async (req, res) => {


    const orderdetail = await db.Order_detail.findAll();
    if (orderdetail === null) {
        console.log('Not found!');
    }
    else {

        console.log(orderdetail);
        return orderdetail

    }

}

// add order
const addorderdetail = async (req, res) => {

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

    return addorderdetail;



}
// get order by id

const getsingleorderdetail = async (req, res) => {

    const id = req.params.id

    const orderdetail = await db.Order_detail.findByPk(id);

    return orderdetail;



}
// update by id and spasific filled

const updateorderdetail = async (req, res) => {

    const id = req.params.id


    const orderdetail = await db.Order_detail.update({ product_quantity: req.body.product_quantity }, {
        where: {
            detail_id: id
        }
    });

    return orderdetail

}

//  delete
const deleteorderdetail = async (req, res) => {

    const id = req.params.id


    const orderdetail = await db.Order_detail.destroy({
        where: {
            detail_id: id
        }
    });

    return orderdetail

}

module.exports = {
    allorderdetail,
    addorderdetail,
    getsingleorderdetail,
    updateorderdetail,
    deleteorderdetail
}