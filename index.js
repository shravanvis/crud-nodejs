const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World from shravan')
})

const routes = require('./routes/product.routes');

app.use('/api/products',routes);

mongoose.connect('mongodb+srv://shravanvishwakarma5:KJfWQYizDIpqN0Xo@cluster0.ccv0y.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> {
    console.log('Connected to database');
    app.listen(3000, () => {
        console.log('server is listening on 3000 port');
    })
})
.catch((error) => {
    console.log('error while connecting to the database');
})