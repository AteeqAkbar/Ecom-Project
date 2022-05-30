module.exports = (conn, DataTypes) => {
    const Category = conn.define('category', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },

        name: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        cat_img: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },


    })
    return Category
};