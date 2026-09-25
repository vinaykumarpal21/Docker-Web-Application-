const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vinay21",
    database: "docker_app_db"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err.message);
    } else {
        console.log("Connected to MySQL database successfully!");
    }
});

app.get("/api", (req, res) => {
    res.send("Backend is running successfully!");
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});