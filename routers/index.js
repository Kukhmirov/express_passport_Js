module.exports = (app, router) => {

    router.get("/", (req, res) => {
        res.render("home", {
            user: req.user,
        })
    });

    app.use('/', router);
};