// Problem statement - Let people sign up to your website
// Only allow signed in users to see people (create
// a dummy people list)

// A website which has 2 endpoints -
// POST /signin
// Body - {
// username: string
// password: string
// }
// Returns a json web token with username encrypted

// GET /users
// Headers -
// Authorization header
// Returns an array of all users if user is signed in (token is correct)
// Returns 403 status code if not

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raju@gmail.com",
        password: "123",
        name: "raju kumar",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];

function userExists(username, password) {
    let flag = false;
    for (let i = 0; i < ALL_USERS.length; i++){
        if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            flag = true;
        }
    }
    return flag;
};

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {

    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
        users: ALL_USERS.filter(function (i) {
            if (i.username != username) {
                return true;
            }
            else {
                return false;
            }
        })
    });
});

app.listen(3000)
