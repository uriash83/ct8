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


app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [config.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session())
require('./routes/authRoutes')(app)

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());// nasze zapytanie będzie zwracane jako json




app.listen(config.PORT_SERVER, () => console.log("Listening on port" + config.PORT_SERVER));
//const router = express.Router();

// id 452101712848-gtk8a4dsjvp7e51ru996uue2ish8m9h5.apps.googleusercontent.com

// scret NXfh5NyXXk0Au2xGiqNHoRYD
