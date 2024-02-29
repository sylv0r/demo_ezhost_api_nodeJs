
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/', (req, res) => {
    console.log('GET /');
    console.log('Request Headers:', req.headers);
    console.log('Hello EzHost')
    res.status(200).send('Hello EzHost');
});

app.listen(3000, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
    console.log(`EzHost running on localhost:3000`);
});