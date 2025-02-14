const express = require("express");
const app = express();
const cors = require("cors");
const corsOpitions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOpitions));

app.get("/api", (req, res) => {
    res.json({"fruits": ["apple", "banana"]})
})

app.listen(8080, () => {
    console.log("Server started on port 8080")
})