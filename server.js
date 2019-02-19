var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendfile("index.html");
});
app.get('/register',function(req,res){
  res.sendfile("register.html");
});
app.get('/images',function(req,res){
  res.sendfile("images.html");
});
app.get('/reviews',function(req,res){
  res.sendfile("/reviews.html");
});
app.get('/list.js',function(req,res){
  res.sendfile("list.js");
});

var chart = {
  places: [],
  times: []
};

app.post("/getList", function(req, res){
    res.send(chart);
});

app.post('/login',function(req,res){
  var user = req.body.user;
  var years = req.body.years;
  var learn = req.body.learn;
  var income = req.body.income;
  var passport = req.body.passport;
  var family = req.body.family;
  var place = req.body.place;
  var time = req.body.time;
  chart.places.push(place);
  chart.times.push(time);
  console.log("1.ФИО: "+user+", 2.Дата рождения: "+years+", 3.Образование: "+learn+", 4.Доход: "+income+", 5.Паспорт: "+passport+", 6.Семейное положение: "+family+", 7.Место отдыха: "+place+", 8.Время прибывания: "+time+"");
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})

