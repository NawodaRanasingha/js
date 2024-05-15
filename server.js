const mongoose = require('mongoose');
const express =require('express');

const cookieParser = require('cookie-parser');

const cors = require('cors');
const routes = require('./routes/routes')

const app = express();
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}));
app.use(cookieParser())

app.use(express.json)
app.use("/api", routes)

mongoose.connect("mongodb://localhost:27017/saloon")
    .then(() => {
        console.log("connected to database")
        app.listen(5000, () => {
            console.log("App is listening on port 5000")
        })
    });
    app.use(express.json());
app.use(routes);