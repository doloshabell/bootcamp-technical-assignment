const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(bodyParser.json());

const users = [
    {
        username: 'terra',
        password: 'password123admin',
        role: 'admin'
    },
    {
        username: 'dave',
        password: 'password123member',
        role: 'member'
    }
];

const accessTokenSecret = 'youraccesstokensecret';

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => {
        return user.username === username && user.password === password;
    });

    if (user) {
        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret);

        res.json({ accessToken });
    } else {
        res.send("Invalid username or password");
    }
})

app.listen(PORT, (req, res) => {
    console.log("Server running on PORT", PORT);
})