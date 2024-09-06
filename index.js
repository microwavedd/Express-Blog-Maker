import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const entries = [];


app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/create",(req,res)=>{
    res.render("create.ejs");
});
app.post("/submit", (req,res)=>{
    entries.push(req.body["entry"]);
    res.render("index.ejs",({
        listOfEntries: entries
    }));
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});