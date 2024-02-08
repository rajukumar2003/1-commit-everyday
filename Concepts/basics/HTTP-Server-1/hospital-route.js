const express = require('express');
const app = express();

var users = [{
    name: 'John',
    kidneys: [
        { healthy: false },
        { healthy: true }
    ]
}]

function healthyKidney(numberOfKidneys) {
    var num = 0;
    for (let i = 0; i <= numberOfKidneys-1; i++) {
        if (users[0].kidneys[i].healthy == true) {
            num = num + 1;
        }
    }
    return num;
}

// query parameter
// app.get('/', (req, res) => {
//     const numberOfKidneys = users[0].kidneys.length;
//     const numberOfHelathyKidney = healthyKidney(numberOfKidneys);
//     const numberOfUnhealhtyKidney = numberOfKidneys - numberOfHelathyKidney;
//     res.json({
//         numberOfKidneys,
//         numberOfHelathyKidney,
//         numberOfUnhealhtyKidney
//     });

// });

// We will send the data in the body from postman
//middlewares
app.use(express.json());

app.post('/', function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: 'Done'
    });
});
app.put('/', (req, res) => {
    for (let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
});

app.delete('/', (req, res) => {
});
app.listen(3000);
