const path = require("path");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const passportJWT = require('./middlewares/passportJWT')();
const errorHandler = require("./middlewares/errorHandler");

const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');
const app = express();

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/rest-api-nodejs', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(passportJWT.initialize());

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Listening");
});