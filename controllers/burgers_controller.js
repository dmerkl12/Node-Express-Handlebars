const db = require("../models");

module.exports = function (app) {

    // GET route for getting all of the Burgers
    app.get("/", function (req, res) {
        db.Burgers.selectAll({}).then(function (dbBurger) {
            res.render("index", { burger: dbBurger });
        });
    });

    app.post("/api/burger", function (req, res) {
        db.Burger.insertOne({
            burger_name: req.body.burger_name
        })
        res.json({ id: result.insertId });
    })

    app.put("/api/burger/:id", function (req, res) {
        db.Burger.updateOne({
            devoured: 1
        }, {
            where: {
                id: req.params.id
            }
        })
        res.json(dbBurger);
    })


    app.post("/api/burger/init/:name", function (req, res) {
        db.Burger.create({
            burger_name: req.params.name
        })
        res.json(dbBurger);
    })
}