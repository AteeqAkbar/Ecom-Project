const db = require("../models");


// show all order

const allorder = async (req, res) => {
    try {

        const order = await db.Order.findAll();
        if (order === null) {
            console.log('Not found!');
        }
        else {

            console.log(order);
            res.send(order)

        }
    } catch (error) {
        res.send(error)
    }
}

// add order
const addorder = async (req, res) => {
    try {
      const user_id =res.locals.id

        const {
        
            order_address,
            order_amount,
            phone
        }
            = req.body

        const addorder = await db.Order.create({
            user_id,
            order_address,
            order_amount,
            phone
        });
        console.log(addorder.ord_id,"bjhvhjkj");
        const Orderdetail = await db.Cart.findOne( {
            include:[
                {
                    model:db.Cartitem,
                    
                },
            ],

            where: {
                user_id
            }
        });
      
        Orderdetail.cart_items.forEach( async element => {
          
          const addorderdetail = await db.Order_detail.create({
          product_id:element.pro_id,
          ord_id:addorder.ord_id,
          product_quantity:element.quantity,
          order_price:element.price*element.quantity
      });
      });



        // console.log(addorderdetail);
        res.send({status:true})

    } catch (error) {
        res.send(error)

    }

}
// get order by id

const getsingleorder = async (req, res) => {
    try {
        const id = req.params.id

        const order = await db.Order.findByPk(id);

        console.log(order);
        res.send(order)

    } catch (error) {
        res.send(error)

    }

}
// update by id and spasific filled

const updateorder = async (req, res) => {
    try {
        const id = req.params.id


        const order = await db.Order.update({ order_address: req.body.order_address }, {
            where: {
                ord_id: id
            }
        });

        console.log(order);
        res.send(order)

    } catch (error) {
        res.send(error)

    }

}

//  delete
const deleteorder = async (req, res) => {
    try {
        const id = req.params.id


        const order = await db.Order.destroy({
            where: {
                ord_id: id
            }
        });

        console.log(order);
        res.send("order deleted")

    } catch (error) {
        res.send(error)

    }

}





module.exports = { allorder, addorder, getsingleorder, updateorder, deleteorder }