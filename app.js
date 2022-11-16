const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;


//Database connection
require('./config/db');

//Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// cors middleware
app.use(cors('*'));

// body-parser middleware
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json({
    limit: "50mb"
}));


// Routes Imports
const auth = require('./routers/auth-router');



// API's
app.use('/api/auth',auth);

app.get("/", (req, res) => {
    res.send("Gods Own Country");
});

app.listen(port, () => {
    console.log(`App running on ${port}`);
})





