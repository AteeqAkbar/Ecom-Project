const db = require("../models");


// show all Cartitem

const allCartitem = async (req, res) => {
    try {

        const Cartitem = await db.Cartitem.findAll();
        if (Cartitem === null) {
            console.log('Not found!');
        }
        else {

            console.log(Cartitem);
            res.send(Cartitem)

        }
    } catch (error) {
        res.send(error)
    }
}

// add Cartitem
const addCartitem = async (req, res) => {
    try {
        const {
            cart_id,
          pro_id,
          quantity,
          price
        }
            = req.body

        const addCartitem = await db.Cartitem.create({
            cart_id,
            pro_id,
            quantity,
            price
        });

        console.log(addCartitem);
        res.send("Cartitem added")

    } catch (error) {
        res.send(error)

    }

}
// get Cartitem by id

const getsingleCartitem = async (req, res) => {
    try {
        const id = req.params.id

        const Cartitem = await db.Cartitem.findByPk(id);

        console.log(Cartitem);
        res.send(Cartitem)

    } catch (error) {
        res.send(error)

    }

}
// update by id and spasific filled

const updateCartitem = async (req, res) => {
    try {
        const id = req.params.id


        const Cartitem = await db.Cartitem.update({ 
        
            quantity : req.body.quantity }, {
            where: {
                id: id
            }
        });

        console.log(Cartitem);
        res.send(Cartitem)

    } catch (error) {
        res.send(error)

    }

}

//  delete
const deleteCartitem = async (req, res) => {
    try {
        const id = req.params.id


        const Cartitem = await db.Cartitem.destroy({
            where: {
            id: id
            }
        });

        console.log(Cartitem);
        res.send("Cartitem deleted")

    } catch (error) {
        res.send(error)

    }

}





module.exports = { allCartitem, addCartitem, getsingleCartitem, updateCartitem, deleteCartitem }