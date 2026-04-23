const express = require("express");
const app = express();
const port = 8080;
const path = require("path");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.get("/project",(req,res)=>{
    res.send("project link successfully generated");
})

app.listen(port ,()=>{
    console.log(`app is listening to the port ${port}`);
});
