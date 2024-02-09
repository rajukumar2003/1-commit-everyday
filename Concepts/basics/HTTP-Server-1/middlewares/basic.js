const express = require('express');

const app = express();

app.get('/health-checkup', function (req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyid = req.query.kidneyid;

    if (username != 'raju' || password != 'pass') {
        res.status(400).json({
            msg: "User doesn't exist"
        });
        return;
    };

    if (kidneyid != 1 && kidneyid != 2) {
        res.status(400).json({ msg: "Wrong number of kidneys" });
        return;
    };
    // Do some logic here
    res.json({ msg: "Your kidney is fine" });

    
});


app.listen(3000);
