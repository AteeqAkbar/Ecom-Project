const db = require("../models");


// show all order

const allorder = async (req, res) => {


    const order = await db.Order.findAll();
    if (order === null) {
        console.log('Not found!');
    }
    else {

        console.log(order);
        return order

    }
}
// add order
const addorder = async (req, res) => {

    const {
        user_id,
        order_address,
        order_amount,
        order_status
    }
        = req.body

    const addorder = await db.Order.create({
        user_id,
        order_address,
        order_amount,
        order_status
    });


    return addorder;




}
// get order by id

const getsingleorder = async (req, res) => {

    const id = req.params.id

    const order = await db.Order.findByPk(id);

    console.log(order);
    return order


}
// update by id and spasific filled

const updateorder = async (req, res) => {

    const id = req.params.id


    const order = await db.Order.update({ order_address: req.body.order_address }, {
        where: {
            ord_id: id
        }
    });

    console.log(order);
    return order




}

//  delete
const deleteorder = async (req, res) => {

    const id = req.params.id


    const order = await db.Order.destroy({
        where: {
            ord_id: id
        }
    });

    return order
}





module.exports = { allorder, addorder, getsingleorder, updateorder, deleteorder }