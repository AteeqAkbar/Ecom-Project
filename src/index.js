const express = require("express")
const config = require("./config/config")
const routes = require("./routes/index")
var cookieParser = require('cookie-parser')
const db = require("./models");
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors())

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', routes)
app.get('/home', async function  (req, res) {
    
        try {
    
            const product = await db.Product.findAll();
            if (product === null) {
                console.log('Not found!');
            }
            else {
    
                console.log(product);
                res.send(product)
    
            }
        } catch (error) {
            console.log("error");
            res.send(error)
        }
    
});

app.listen(config.APP.PORT, console.log("server is  runing:", config.APP.PORT))

