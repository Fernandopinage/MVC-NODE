const Router = require('./Router/index')
const express = require('express');
const app = express();
const axios = require('axios');
const Port = process.env.Port || '3000';

app.use('/',Router);

app.get('/pokemon', async(req,res)=>{

    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
});

app.listen(Port,()=>{

    console.log('http://localhost:3000/')
})



