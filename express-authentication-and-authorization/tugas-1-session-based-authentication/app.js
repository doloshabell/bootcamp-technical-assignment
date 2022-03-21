const express = require("express");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

const PORT = process.env.PORT || 3000;
const app = express();

// create 1 minute from milliseconds
const oneMinute = 60000;

app.use(expressSession({
    secret: "secretkeyssshhhh",
    saveUninitialized: true,
    cookie: { maxAge: oneMinute },
    resave: false
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.use(cookieParser());

const myusername = 'user1';
const mypassword = 'mypassword';

var session;

app.get("/", (req, res) => {
    session = req.session;
    if (session.userid) {
        res.send(`Welcome User <a href=\'/logout'>click to logout</a>`);
    } else {
        res.sendFile('views/index.html', { root: __dirname });
    }
});

app.post("/user", (req, res) => {
    const data = req.body;
    if (data.username == myusername && data.password == mypassword) {
        session = req.session;
        session.userid = data.username;
        console.log(req.session);
        res.send(`Hi user, welcome <a href=\'/logout'>click to logout</a>`);
    } else {
        res.send("Invalid username or password");
    }
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log("server run on PORT", PORT);
});