//const mysql = require('mysql');
//const Sequelize = require('sequelize');
//const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//require('./db/mongoose')


const config = require("../config/config.js")

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());// nasze zapytanie będzie zwracane jako json


app.get('/',(req,res) => {
  console.log('GET ')
  res.send('hi there')
})

app.listen(config.PORT_SERVER, () => console.log("Listening on port" + config.PORT_SERVER));
//const router = express.Router();

// id 452101712848-gtk8a4dsjvp7e51ru996uue2ish8m9h5.apps.googleusercontent.com

// scret NXfh5NyXXk0Au2xGiqNHoRYD
