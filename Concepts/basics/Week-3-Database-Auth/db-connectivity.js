const express = require('express');
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://rajukumar:JRi01RKSdIRKe2nU@cluster0.n3dvs3d.mongodb.net/userappnew")

const User = mongoose.model('Users', { email:String, password: String});

app.get("/signin", async function (req, res) {
    // const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
        res.json({
            msg: "User already exists"
        });
    };
    
    const user = new User({
        email: email,
        password: password
    });

    res.json({
        msg: `User ${user.email} created successfully`
    });

    user.save();
})

app.listen(3000);

