const express = require('express');

const app = express();

const port = 3006;

app.get('/',( req, res) =>{
    res.send('Hola desde mi primer server');

});

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
});
