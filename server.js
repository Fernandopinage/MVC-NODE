const Router = require('./Router/index')
const express = require('express');
const app = express();

const Port = process.env.Port || '3000';

app.use('/',Router);

app.listen(Port,()=>{

    console.log('http://localhost:3000/')
})



