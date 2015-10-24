var express = require("express"),
    app = express(),
    router = express.Router();

app.use(express.static('public'));

router.get("/", function(req, res){
    //res.sendFile(__dirname + '/public/inputpage.html');
});
