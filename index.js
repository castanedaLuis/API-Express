const express = require('express');

const app = express();

const port = 3006;

app.get('/',( req, res) =>{
    res.json('Hola desde mi primer server');
});

app.get('/nueva',( req, res) =>{
    res.json('Hola soy un nuevo endpoint');
});

app.get('/products',( req, res) =>{
    res.json({
        id:3,
        name:'Camisa',
        price: 1200
    });
});

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
});
