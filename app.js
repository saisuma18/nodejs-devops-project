const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Kubernetes + Jenkins + Docker");
});

app.get("/health", (req, res) => {
    res.json({
        status: "Application Running"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});