let express = require("express");
let app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    let thing = req.params.thing;
    res.render('love', {thing: thing});
});

app.get("/posts", function(req, res) {
    let posts = [
        {title: 'hello world!', author: 'who'},
        {title: 'Hi there!', author: 'whom'},
        {title: 'Yello!', author: 'green'}
     ];
     
     res.render('post', {posts: posts});
    
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log('app has started!');
})