const User = require('../Controller/User')
const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Rota de Usuario */
app.get('/', User.index);
app.get('/sobre',User.sobre);
app.get('/novo/usuario',User.create);
app.post('/inser/usuario',User.insert);
/* **************** */
module.exports = app;