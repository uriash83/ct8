//const mysql = require('mysql');
//const Sequelize = require('sequelize');
const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require("../config/config.js")
require('./models/User')
require('./services/passport')


        //console.log(db)
mongoose.connect(config.mongoURI,{useNewUrlParser: true}).then(
    (db) => {
        //console.log(db)
    },
    err => {
        //console.log(err)
    }
)

const app = express();

app.use(cors({
    methods:['GET','POST'],
    credentials: true 
  }))
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.json());// nasze zapytanie będzie zwracane jako json
  
   
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [config.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session())
app.use(function(req, res, next) {
  //header before route
  console.log(req.headers.origin)
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  if ('OPTIONS' == req.method) {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.send(200);
  } else {
      next();
  }
}); 
require('./routes/authRoutes')(app)






app.listen(config.PORT_SERVER, () => {
    console.log("Listening on port" + config.PORT_SERVER)
    console.log('ENV'+process.env.NODE_ENV)
});

//const router = express.Router();

// id 452101712848-gtk8a4dsjvp7e51ru996uue2ish8m9h5.apps.googleusercontent.com

// scret NXfh5NyXXk0Au2xGiqNHoRYD
