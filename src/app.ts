import express from "express";

const app = express();

app.get("/", function(req, res) {
    res.json({
        status: 1
    })
});

export default app;