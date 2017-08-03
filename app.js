var Express = require('express');
var app = Express();
var fs = require('fs');
var data = require('./res/data.json');
var cors = require('cors');

app.use(cors());
app.get('/getData',function(req,res){

    res.send(data);

})


app.listen(3000,function(){
    console.log('sever on port 3000');

})
