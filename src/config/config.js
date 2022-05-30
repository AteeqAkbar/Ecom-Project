const dotenv = require("dotenv")
const path = require("path")
dotenv.config({ path: path.join(__dirname, '../../.env') });
console.log(process.env.PORT)
const config = {
    APP: {
        PORT: process.env.PORT
    },
    CONN: {
        DB_NAME: process.env.DB_NAME,
        DB_USER_NAME: process.env.DB_USER_NAME,
        DB_USER_PASSWORD: process.env.DB_USER_PASSWORD,
        DB_HOST: process.env.DB_HOST
    }
    , JWT_KEY: process.env.JWT_KEY
}


module.exports = config