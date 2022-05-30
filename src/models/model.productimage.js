module.exports = (conn, DataTypes) => {
    const ProductImage = conn.define('product_images', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        }, pro_id: {
            type: DataTypes.INTEGER,

        },
        img_url: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        default_image: {
            type: DataTypes.BOOLEAN
            // allowNull defaults to true
        },

    })
    return ProductImage
};