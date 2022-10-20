const express = require("express");
const path = require("path");

const app = express();

const port = 8008;

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html/blog.html"));
});

app.get("/blog", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html/blog.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html/register.html"));
});

app.get("/article", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html/read_more.html"));
});

app.listen(port, ()=>{
    console.log(`LISTENING ON http://localhost:${port}/blog`);
});