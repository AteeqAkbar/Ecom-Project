const express = require("express")
const config = require("./config/config")
const routes = require("./routes/index")
var cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', routes)
app.get('/home', function (req, res) {
    res.render('admin/singleproduct');
});

app.listen(config.APP.PORT, console.log("server is  runing:", config.APP.PORT))

