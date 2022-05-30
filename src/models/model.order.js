module.exports = (conn, DataTypes) => {
    const Order = conn.define('orders', {
        // Model attributes are defined here
        ord_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
            , autoIncrement: true

        },
        user_id: {
            type: DataTypes.INTEGER,

        },
        order_date: {
            type: DataTypes.STRING
            , timestamps: true,
            // allowNull defaults to true
        },
        order_address: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        order_amount: {
            type: DataTypes.DECIMAL
            // allowNull defaults to true
        },
        order_status: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        ship_date: {
            type: DataTypes.DATE
            // allowNull defaults to true
        }

    })
    return Order
};