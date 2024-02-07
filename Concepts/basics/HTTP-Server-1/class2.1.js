const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.get('/home/:name', function (req, res) {
    const name = req.params.name;
    res.send('Hi there!');
    console.log(name);
    
    // res.send('<h1> Hello <e>World</e></h1>');
});


app.get('/contact', function (req, res) {
    // req(request) - header, body, query parameter
    // do machine learning model
    res.json({
        name: 'raju kumar',
        age:20
    })
})


// middlewares
app.use(bodyParser.json());

app.post('/conversations', (req, res) => {
    // console.log(req.headers);
    console.log(req.body);
    res.send(' Hi there, hope you are doing well ! ')
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

