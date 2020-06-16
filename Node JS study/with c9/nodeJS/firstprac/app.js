const express = require("express");
const app = express();

app.get("/", function(req, res) {
   res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    let animal = req.params.animal.toLowerCase();
    const sounds = {
        pig: 'Oink',
        cow: 'Moo',
        dog: 'Woof Woof!',
        cat: 'I hate you human',
        goldfish: '...'
    };
    let sound = sounds[animal];
    
    res.send(`The ${animal} says ${sound}`);
});

app.get("/repeat/:word/:num", function(req, res) {
    let word = req.params.word;
    let num = Number(req.params.num);
    let result = "";
    
    for(let i=0; i<num; i++) {
       result += word + " "; 
    }
    
    res.send(result); 
});

app.get("*", function(req, res) {
    res.send('Sorry, page not found..What are you doing with your life?');
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server has started!!!");
});