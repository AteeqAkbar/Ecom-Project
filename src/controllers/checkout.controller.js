const db = require("../models");


// show all Cart

const checkout = async (req, res) => {
    try {

        const user_id=res.locals.id
        const checkout = await db.Cart.findOne( {
            include:[
                {
                    model:db.Cartitem,
                    include: [db.Product    ]

                },
            {
                    model:db.User,

                }
            ],

            where: {
                user_id
            }
        });
        console.log(checkout);
        // res.send(checkout)
        res.render("pages/checkout",{checkout})
    } catch (error) {
        res.send(error)
    }
}

// add Cart to and cart item
const addCart = async (req, res) => {
    try {
        
        const user_id=res.locals.id
        // const user_id=req.body.user_id
        console.log(user_id,"add to cart");

        const Cart = await db.Cart.findOne( {
            where: {
                user_id
            }
        });
        
        const {pro_id,quantity,price}= req.body
        
        if (Cart){
             cart_id = Cart.id
            const addCartitem = await db.Cartitem.create({
                cart_id,
                pro_id,
                quantity,
                price
            });
            const Cartitemsend = await db.Cart.findOne( {
                include:[
                    {
                        model:db.Cartitem,
                           include: [db.Product    ]
    
                    },
                ],
    
                where: {
                    user_id
                }
            });
            
            
            console.log(Cartitemsend);
            res.send(Cartitemsend)
         }else {

             const addCart = await db.Cart.create({user_id});
             console.log(addCart);
              cart_id=addCart.id
            const addCartitem = await db.Cartitem.create({
                cart_id,
                pro_id,
                quantity,
                price
            });
            const Cartitemsend = await db.Cart.findOne( {
                include:[
                    {
                        model:db.Cartitem,
                        include: [db.Product    ]
    
                    },
                ],
    
                where: {
                    user_id
                }
            });

            console.log(Cartitemsend);
            res.send(Cartitemsend)
            }

    } catch (error) {
        res.send(error)

    }

}
// get Cart by id

const getsingleCartwithcartitems = async (req, res) => {
    try {
        
        const user_id=res.locals.id
        const Cart = await db.Cart.findOne( {
            include:[
                {
                    model:db.Cartitem,
                    include: [db.Product    ]

                },
            ],

            where: {
                user_id
            }
        });
        
        console.log(Cart.user_id);
        // res.send(Cart)
        res.render("pages/cart", { Cart })

    } catch (error) {
        res.send(error)

    }

}
// update by id and spasific filled

const updateCart = async (req, res) => {
    try {
        const id = req.params.id


        const Cart = await db.Cartitem.update({ quantity: req.body.quantity }, {
            where: {
                id: id
            }
        });

        console.log(Cart);
        res.redirect("http://localhost:3200/cart")


    } catch (error) {
        res.send(error)

    }

}

//  delete
const deleteCart = async (req, res) => {
    try {
        const id = req.params.id


        const Cart = await db.Cartitem.destroy({
            where: {
            id: id
            }
        });

        console.log(Cart);
        res.redirect("http://localhost:3200/cart")

    } catch (error) {
        res.send(error)

    }

}





module.exports = { checkout, addCart, getsingleCartwithcartitems, updateCart, deleteCart }