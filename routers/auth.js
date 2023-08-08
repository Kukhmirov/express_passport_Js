module.exports = (app, router) => {
    const passport = require("passport");
    const authControllers = require('../controllers/authControllers');

    
    router.get("/login", authControllers.getLoginPage);

    router.get("/me",
        authControllers.getProfileIsAuthenticated,
        authControllers.getProfileHandle
    );

    router.post("/login",
        passport.authenticate("local", { failureRedirect: "/login" }),
        authControllers.loginHandle
    );

    router.post("/signup", authControllers.logoutHandle);
    

    app.use('/api/user/', router);
};