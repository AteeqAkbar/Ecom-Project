module.exports = (conn, DataTypes) => {
    const ProductReviews = conn.define('product_reviews', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        }, pro_id: {
            type: DataTypes.INTEGER,

        },
        reviews: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        user_id: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },

    })
    return ProductReviews
};