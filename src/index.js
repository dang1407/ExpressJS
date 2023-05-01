const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars').engine;
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var personSchema = mongoose.Schema({
      name: String,
      age: Number,
      nationality: String
   });
var Person = mongoose.model("Person", personSchema);
app.get('/person', function(req, res){
    res.render('person');
 });
app.post('/person', function(req, res){
    var personInfo = req.body; //Get the parsed information
    
    if(!personInfo.name){
       res.render('show_message', {
          message: "Sorry, you provided wrong info", type: "error"});
    } else {
       var newPerson = new Person({
          name: personInfo.name,
       });
         
       newPerson.save(function(err, Person){
          if(err)
             res.render('show_message', {message: "Database error", type: "error"});
          else
             res.render('show_message', {
                message: "New person added", type: "success", person: personInfo});
       });
    }
 });
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
