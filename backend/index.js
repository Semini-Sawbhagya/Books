import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "test",
});

app.get("/", (req, res) => {
    res.json("hello this is the backend");
});

app.get("/create", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`, `desc`, `cover`) VALUES (?)";
    const values = ["title from backend", "desc from backend", "cover from backend"];
    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Book has been created successfully");
    });
});

app.listen(8800, () => {
    console.log("Connected to backend!");
});

// if there is an authentication problem use this code
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';