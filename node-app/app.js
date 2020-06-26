const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 8080;

app.use(bodyParser.json());

//import Routers
const cardsRoute = require("./routes/cardRoute");
app.use("/card", cardsRoute);


app.listen(port, () =>
    console.log(`Hello world app listening on port ${port}!`)
);