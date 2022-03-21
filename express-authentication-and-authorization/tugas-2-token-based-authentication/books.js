const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();
app.use(bodyParser.json());

const books = [
    {
        "author": "Robert Martin",
        "country": "USA",
        "language": "English",
        "pages": 209,
        "title": "Clean Code",
        "year": 2008
    },
    {
        "author": "Dave Thomas & Andy Hunt",
        "country": "USA",
        "language": "English",
        "pages": 784,
        "title": "The Pragmatic Programmer",
        "year": 1999
    },
    {
        "author": "Kathy Sierra, Bert Bates",
        "country": "USA",
        "language": "English",
        "pages": 928,
        "title": "Head First Java",
        "year": 2003
    },
];

const accessTokenSecret = 'youraccesstokensecret';

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, accessTokenSecret, (error, user) => {
            if (error) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

app.get("/books", authenticateJWT, (req, res) => {
    res.json(books);
})

app.post("/books", authenticateJWT, (req, res) => {
    const{role} = req.user;

    const data = req.body;
    if(role === "admin") {
        books.push(data);
        res.json("Book added successfully");
    } else {
        res.sendStatus(403);
    }
})

app.listen(PORT, (req, res) => {
    console.log("Server running on PORT", PORT);
})