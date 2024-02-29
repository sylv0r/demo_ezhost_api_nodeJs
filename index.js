
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/', (req, res) => {
    console.log('[ ' +  new Date() + ' ] -' + ' GET / - ' + req.headers);
    res.status(200).send('Hello EzHost ' + new Date());
});

app.listen(3000, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
    console.log(`EzHost running on localhost:3000`);
});