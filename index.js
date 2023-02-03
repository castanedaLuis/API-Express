const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3006;

app.get('/',(req,res)=>
    {
        res.send('Hola mi server en express');
    });

app.get('/nueva-ruta',(req,res)=>
    {
        res.send('Hola, soy una nueva ruta');
    });

routerApi(app);

app.listen(port,() => {
    console.log('http://localhost:'+port);
});