module.exports = (conn, DataTypes) => {
    const User = conn.define('users', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        name: {
            type: DataTypes.STRING,

        },
        email: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        pass: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        isAdmin: {
            type: DataTypes.BOOLEAN
            // allowNull defaults to true
        }

    })
    return User
};