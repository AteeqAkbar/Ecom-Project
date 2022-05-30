module.exports = (conn, DataTypes) => {
    const Order_detail = conn.define('order_detail', {
        // Model attributes are defined here
        detail_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        product_id: {
            type: DataTypes.INTEGER,


        },

        ord_id: {
            type: DataTypes.INTEGER,


        },

        product_quantity: {
            type: DataTypes.INTEGER,


        },

        order_price: {
            type: DataTypes.INTEGER,


        },


    })
    return Order_detail
};