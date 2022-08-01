import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.listen(PORT);