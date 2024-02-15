const jwt = require("jsonwebtoken");

const user = {
    name: 'raju k',
    password: '0000'
};

// Generates jwt
const token = jwt.sign(user, "keyiskey");
console.log(token);

// Verifies jwt
const verifiedvalue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmFqdSBrIiwicGFzc3dvcmQiOiIwMDAwIiwiaWF0IjoxNzA2NjI1NjExfQ.ChigkbWy7ZBvfc8OGXmSD0WKkD7Iu2y09kpQAgSp3Zk",
                            "keyiskey");

console.log(verifiedvalue);
