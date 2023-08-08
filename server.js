const express = require("express");
const session = require("express-session");
const passport = require("passport");
const router = require('express').Router();


require('./config/passport')(passport);

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(session({ secret: "SECRET" }));
app.use(passport.initialize());
app.use(passport.session());

require("./routers/index")(app, router);
require("./routers/auth")(app, router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Приложение запущено на ${PORT}`);
});