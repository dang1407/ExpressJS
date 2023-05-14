const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars').engine;
const path = require('path');
const app = express();
const port = 3001;
const route = require('./routes');
const db = require('./config/db')
const cors = require('cors')


//Kết nối BE và FE
app.use(cors())

// Static file
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));
// HTTP Loger
// app.use(morgan("combined"))

//Body parser (middle ware)
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    express.urlencoded({
        extended: true,
    }),
); // middle ware with form html
app.use(express.json());

// Template engine
app.engine(
    'hbs',
    hbs({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// app.set('views', "./resource/views");
// console.log(path)

route(app);


// connect DB
db.connect();

app.listen(port, () =>
    console.log(`Example app is listening at http://localhost:${port}`),
);