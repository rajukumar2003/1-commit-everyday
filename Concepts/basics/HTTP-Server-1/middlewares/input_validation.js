const express = require("express")

const app = express()

app.use(express.json());

app.post('/health-checkup', function (req, res) {
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const kidneyLenght = kidneys.length;

    res.send("you have " + kidneyLenght + " kidneys");
});


// ------------Global catches------------------------------------------
app.use(function (err, req, res, next) {
    res.json({
        msg: "Something is wrong with our server"
    });
});

app.listen(3000);
