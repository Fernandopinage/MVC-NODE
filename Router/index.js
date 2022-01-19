const User = require('../Controller/User')
const express = require('express');
const app = express();
const ejs = require('ejs');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('/', User.index);
app.get('/sobre',User.sobre);
app.get('/novo/usuario',User.create);

module.exports = app;