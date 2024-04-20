const express = require('express');
const cors = require('cors')
const app = express()
const port = 5000;

// Allow requests only from http://localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));


app.get('/api/customers', (_req, res)=>{
    const customers = [
        {id: 1, firstName: "John", lastName: "Smith"},
        {id: 2, firstName: "Mary", lastName: "Doe"},
        {id: 3, firstName: "Steve", lastName: "Johnson"}
    ]
    res.json(customers);
});


app.listen(port, ()=>console.log(`Server start at port: ${port}`))