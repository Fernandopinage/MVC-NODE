const User = require('../Controller/User');
const Leads = require('../Controller/Leads');
const con = require('../DataBase/conection');
const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
var session = require('express-session');
const flash = require('connect-flash');


/******** configuração de session ********/

app.use(session({ secret: 'luizfernandoluck@hotmail.com', cookie: { maxAge: 60000 }})) // criando chave senha session
//app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret:'luizfernandoluck@hotmail.com',
    resave: true,
    saveUninitialized:true
}));


/********* configurando flash ***********/

app.use(flash());


/*********** Middlewere *****************/

app.use((req, res, next)=>{

    res.locals.success_msg = req.flash('success_msg');
    res.locals.err_msg = req.flash('err_msg');
    next();

});


app.use(express.static("Public"));


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*********************************************************************************************** */

/*   Rota de Leads  */
app.get('/add/leads',Leads.index);
app.post('/insert/leads',Leads.create);

/* **************** */

/* Rota de Usuario */
app.get('/', User.index);
app.get('/home/:id',User.home);
app.post('/login/validar',User.validarLogin);
app.get('/user/all', User.select);
app.get('/novo/usuario',User.create);
app.get('/add/usuario',User.adicionar);
app.post('/inser/usuario',User.insert);
app.get('/lista/usuario/:id',User.select);
app.get('/delete/usuario/:id/:pa',User.delete);
/* **************** */


module.exports = app;