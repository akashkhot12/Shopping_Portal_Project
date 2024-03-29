const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/shopping.routes");
const bodyParser = require('body-parser');
const config = require("./config/config")

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/shopping-portal', router);

// To connect the database and start the server once the database is connected.

const MONGODB_URI = config.MONGODB_URI;
mongoose
    .connect(
        MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Connected to database");

        // create a server for particular PORT number.
        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}/`);
        });
    })
    .catch((err) => {
        console.log("Error connecting to database", err);
    });



