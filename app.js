const express = require("express");
const mongoose = require("mongoose");
const Project = require("./models/Project");
const app = express();
const cors = require('cors');

let PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

const dbUrl = "mongodb+srv://Kira:kiraatmongoose@ke-ha-eske-pe.0acsf3c.mongodb.net/KE-HA-ESKE-PE?retryWrites=true&w=majority";

//Connect to Database
mongoose.connect(dbUrl)
.then((result) =>
{
    console.log("Connected to db");
    app.listen(PORT, () => console.log("Server listening on port 3000"));
})
.catch((err) => console.log(err));



//Routes
app.get("/k", (req, res) => {
   res.render("index");
});

app.get("/about", (req, res) => {
    res.render("aboutpage");
});

app.get("/build", (req, res) => {

    const data = {
        mainCategory: "build", 
        subCategory: "", 
        subSubCategory: ""};
    
    const url = req.url;

    Project.find(data).sort({createdAt: -1})
    .then((projects) => {

        if(projects.length > 0)
            res.render("detailpage", {projects, data,url});
        else
            res.status(404).render("404");
    })
    .catch((err) => console.log(err));
});

app.get("/build/:id", (req, res) => {

    const id = req.params.id;

    Project.findById(id)
    .then((project) => {
        res.render("descriptionpage", {project});
    })
    .catch((err) => res.status(404).render("404"));

});

app.get("/:mainCategory/:subCategory/:subSubCategory", (req, res) => {
    const data = {
        mainCategory: req.params.mainCategory, 
        subCategory: req.params.subCategory, 
        subSubCategory: req.params.subSubCategory};
    
    if(data.subSubCategory == "all")
        delete data.subSubCategory;


    Project.find(data).sort({createdAt: -1})
    .then((projects) => {

        if(projects.length > 0)
        { 
            const url = req.url;
            res.render("detailpage", {projects, data, url});
        }
           
        else
            res.status(404).render("404");
    })
    .catch((err) => res.status(404).render("404"));
});

app.get("/:mainCategory/:subCategory/:subSubCategory/:id", (req, res) => {

    const id = req.params.id;

    Project.findById(id)
    .then((project) => {
        res.render("descriptionpage", {project});
    })
    .catch((err) => res.status(404).render("404"));
});

