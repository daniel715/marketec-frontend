const express = require("express");
const port = process.env.PORT || 9000;
const app = express();

app.use(express.static(__dirname + "/dist/"));

//this is because it is a SPA app, so eveerything needs to be redirect to index.html, if not app breaks.
app.get(/.*/, function(req,res){
    res.sendfile(__dirname + "/dit/index.html");
})

app.listen(port);
console.log("Server Started...");