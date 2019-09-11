const express = require("express");		// use to use the Express module
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_taskdb', {useNewUrlParser: true});

app.set('view engine', 'ejs');			//use this to use ejs
app.set('views', __dirname + '/views');
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.json());

//link to the route.js 
require('./routes')(app);

app.listen(8000, () => console.log("listening on port 8000"));