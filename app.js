/**
 * @name TaskManager
 * @description VueJS task manager.
 * @version 0.2.0
 * @author Steven Morrison <steven@zaffri.com>
 */

const appEnv    = require("./etc/env.json");
const port      = process.env.PORT || appEnv.app.port;
const express   = require("express");
const app       = express();

app.use(express.static('public')); 

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/', 'index.html'));
});

app.listen(port, function(){
    console.log("Server running on port", port);
});