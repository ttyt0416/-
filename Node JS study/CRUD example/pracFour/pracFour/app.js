let express = require("express");
app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let methodOverride = require("method-override");

mongoose.connect("mongodb://localhost:27017/practice", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

let itemSchema = new mongoose.Schema({
	image: String,
	title: String,
	innerImageOne: String,
	innerImageTwo: String,
	innerImageThree: String,
	innerImageFour: String,
	description: String
});

let Item = mongoose.model("Item", itemSchema);

app.get("/", function(req, res) {
	res.redirect("/home");
});

app.post("/home", function(req, res) {
	Item.create(req.body.item, function(err, newItem) {
		if(err) {
			console.log("post Error");
		} else {
			res.redirect("home");
		}
	})
});

app.get("/home", function(req, res) {
	Item.find({}, function(err, items) {
		if(err) {
			console.log("error");
		} else {
			res.render("home", {items: items});
		}
	})
});

app.get("/home/new", function(req, res) {
	res.render("new");
});

app.get("/home/:id", function(req,res) {
	Item.findById(req.params.id, function(err, foundItem) {
		if(err) {
			res.redirect("/home");
		} else {
			res.render("show", {item: foundItem});
		}
	})
});

app.get("/home/:id/edit", function(req, res) {
	Item.findById(req.params.id, function(err, foundItem) {
		if(err) {
			res.redirect("/home");
		} else {
			res.render("edit", {item: foundItem});
		}
	})
});

app.put("/home/:id", function(req, res) {
	Item.findByIdAndUpdate(req.params.id, req.body.item, function(err, updateItem) {
		if(err) {
			res.redirect("/home");
		} else {
			res.redirect(`/home/${req.params.id}`);
		}
	})
});

app.delete("/home/:id", function(req, res) {
	Item.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			res.redirect("/home");
		} else {
			res.redirect("/home");
		}
	})
});

app.listen(3000, function() {
	console.log("start");
});