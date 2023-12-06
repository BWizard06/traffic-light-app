const lib = require("./trafficlight");
//??

module.exports = app => {
    app.get('/api/welcome', (req, res) => {
        res.status(200).json({
            message: "Welcome to Traffic-Light!",
            status: 'success'
        });
    });

    app.get('/api/trafficlight', (req, res) => {
        res.status(200).json({
            message: lib.trafficLight(undefined),
            status: 'success'
        });
    });

    app.get('/api/trafficlight/:color', (req, res) => {
        res.status(200).json({
            message: lib.trafficLight(req.params.color),
            status: 'success'
        });
    });
}



