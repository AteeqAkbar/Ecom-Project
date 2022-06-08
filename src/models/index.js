const { Sequelize, DataTypes } = require('sequelize');
const conection = require('../config/config');


const conn = new Sequelize(conection.CONN.DB_NAME, conection.CONN.DB_USER_NAME, conection.CONN.DB_USER_PASSWORD, {
    host: conection.CONN.DB_HOST,
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});
const db = {}
db.User = require("./model.user")(conn, DataTypes)
db.Product = require("./model.product")(conn, DataTypes)
db.ProductImage = require("./model.productimage")(conn, DataTypes)
db.ProductReviews = require("./model.productreviews")(conn, DataTypes)
db.Cart = require("./model.cart")(conn, DataTypes)
db.Cartitem = require("./model.cartitem")(conn, DataTypes)
db.Order = require("./model.order")(conn, DataTypes)
db.Order_detail = require("./model.order_detail")(conn, DataTypes)
db.Category = require("./model.category")(conn, DataTypes)


// ////category  has mony products

db.Category.hasMany(db.Product, { foreignKey: 'cat_id' })
db.Product.belongsTo(db.Category, { foreignKey: 'cat_id' })

// // //////
db.User.hasMany(db.Order, { foreignKey: 'user_id' })
db.Order.belongsTo(db.User, { foreignKey: 'user_id' })

// // ///////
db.Order.hasMany(db.Order_detail, { foreignKey: 'ord_id' })
db.Order_detail.belongsTo(db.Order, { foreignKey: 'ord_id' })


db.Cart.hasMany(db.Cartitem, { foreignKey: 'cart_id' })
db.Cartitem.belongsTo(db.Cart, { foreignKey: 'cart_id' })
// =========================user has one cart ===============================

db.User.hasOne(db.Cart, { foreignKey: 'user_id' })
db.Cart.belongsTo(db.User, { foreignKey: 'user_id' })

// // ///////ateeq add this 


db.Product.hasMany(db.Cartitem,{ foreignKey: 'pro_id' })
db.Cartitem.belongsTo(db.Product,{ foreignKey: 'pro_id' })

// // db.Product.hasMany(db.Order_detail, { foreignKey: 'product_id' })

// ////////
db.Product.hasMany(db.ProductImage, { foreignKey: 'pro_id' })
db.ProductImage.belongsTo(db.Product, { foreignKey: 'pro_id' })


// /////
db.Product.hasMany(db.ProductReviews, { foreignKey: 'pro_id' })
db.ProductReviews.belongsTo(db.Product, { foreignKey: 'pro_id' })


module.exports = db