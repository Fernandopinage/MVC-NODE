const User = require('../Controller/User');
const Leads = require('../Controller/Leads');
const path = require('path');
const con = require('../DataBase/conection');
const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

app.use(express.static('/Public'));


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/*   Rota de Leads  */
app.get('/add/leads',Leads.adicionar);


/* **************** */

/* Rota de Usuario */
app.get('/', User.index);
app.get('/home',User.home);
app.post('/login/validar',User.validarLogin)
app.get('/user/all', User.select)
app.get('/novo/usuario',User.create);
app.post('/inser/usuario',User.insert);
/* **************** */


module.exports = app;