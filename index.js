const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler} = require('./middlewares/error.handler')

const app = express();
const port = 3006;

//Middleware
app.use(express.json());

app.get('/',(req,res)=>
    {
        res.send('Hola mi server en express');
    });

app.get('/api/nueva-ruta',(req,res)=>
    {
        res.send('Hola, soy una nueva ruta');
    });

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port,() => {
    console.log('http://localhost:'+port);
});