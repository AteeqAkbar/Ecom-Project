module.exports = (conn, DataTypes) => {
    const Cartitem = conn.define('cart_item', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        cart_id: {
            type: DataTypes.INTEGER,


        },

        pro_id: {
            type: DataTypes.INTEGER,


        },

        quantity: {
            type: DataTypes.INTEGER,


        },

        price: {
            type: DataTypes.INTEGER,


        },


    })
    return Cartitem
};