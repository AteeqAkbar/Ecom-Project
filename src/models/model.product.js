module.exports = (conn, DataTypes) => {
    const Product = conn.define('products', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        }, name: {
            type: DataTypes.STRING,

        },
        cat_id: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        price: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        des: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        image: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        pro_featured: {
            type: DataTypes.BOOLEAN
            // allowNull defaults to true
        }

    })
    return Product
};