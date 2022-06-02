module.exports = (conn, DataTypes) => {
    const Cart = conn.define('cart', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
            , autoIncrement: true

        },
        user_id: {
            type: DataTypes.INTEGER,

        },
        datetime: {
            type: DataTypes.STRING
            , timestamps: true,
            // allowNull defaults to true
        },
        
    })
    return Cart
};