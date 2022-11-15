const express = require('express');
const mongose = require('mongoose');
const bodyParser = require('body-parser');
var passport = require('passport');
const users = require('./routes/users');
const colis = require('./routes/colis');
const app = express();
const cors = require('cors');
// bodyparser middleware
app.use(bodyParser.urlencoded({
    extended: 'true',
})
);
app.use(express.json())
app.use(cors());
// db config

const db = require("./config/keys").mongoURI;

//connect to mongo db
mongose
    .connect(
        db,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Mongodb coonnected Succefully"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use(colis);


const port =  4000;

app.listen(port, () => console.log(`server up and run on port ${port} !`));
//app.use(cors());