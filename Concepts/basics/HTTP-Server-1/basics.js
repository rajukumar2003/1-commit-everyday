const express = require('express');
const app = express();

function sum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

// res(response) - here to browser.
// req(request) - browser to here.
app.get("/", (req, res) => {

    const num = req.query.n;
    const ans = sum(num);
    res.send('Your answer is:'+ ans);
});


app.listen(3000);
