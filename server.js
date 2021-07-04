import handler from "./static/handler.js";
import express from "express";

const port = 8080;
const app = express();

//user asks for a file stored in the static folder
app.use("/", express.static("static"));

//user asks for a file (event listenner)
app.use("/", express.json());
app.post("/", function (req, res) {
    handler(req.body).then(function (responseObj) {
        res.json(responseObj);
    });
});

//takes the data on the server and handles it
app.post("/storerecipe", function (req, res) {
    handler(req, res);
});

//to make sure the server is running
app.listen(port, function () {
    console.log("listening");
});
