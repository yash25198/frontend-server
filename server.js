import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://localhost:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.listen(PORT);