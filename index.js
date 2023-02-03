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
    res.json([
        {
            name:'Camisa',
            price: 1200
        },
        {
            name:'Pantalon',
            price: 800 
        }
    ]);
});

app.get('/products/:id', (req, res)=>{
    const { id } = req.params;
    res.json({
        id,
        name:'Camisa',
        price: 1200
    },)
})

app.get('/categories/:categoryId/products/:productId', (req, res) =>{
    const { categoryId, productId } = req.params;
    res.json({
        categoryId,
        productId
    })
})

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
});
