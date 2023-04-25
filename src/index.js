const express = require("express");
const morgan = require("morgan");
const hbs = require('express-handlebars').engine;
const path = require('path');
const app = express();
const port = 3000;

// Static file
app.use(express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname, 'public'))
// HTTP Loger
app.use(morgan("combined"))

// Template engine
app.engine("hbs", hbs({
   extname: '.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// app.set('views', "./resource/views");
// console.log(path)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
   res.render('news')
})

app.listen(port, () => console.log(`Example app is listening at http://localhost:${port}`))