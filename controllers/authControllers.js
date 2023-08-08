exports.loginHandle = (req, res) => {
    res.redirect("/");
};

exports.getLoginPage = (req, res) => {
    res.render("login");
};

exports.logoutHandle = (req, res) => {
    req.logOut(function(err) {
        if(err) {
            return console.error(err);
        }
        res.redirect("/");
    });
}

exports.getProfileIsAuthenticated = (req, res, next) => {
    if(!req.isAuthenticated()) {
        return res.redirect("/login");
    }

    next();
};

exports.getProfileHandle = (req, res) => {
    res.render("profile", {
        user: req.user,
    });
}