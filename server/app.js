const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "2915",
  port: 5432,
});

pool.connect();

app.get("/listOut", (req, res) => {
  pool.connect();
  pool.query("SELECT * FROM to_do_list", (err, result) => {
    console.log(result.rows);
    res.send(result.rows);
  });
});

app.post;

app.listen(PORT, () => {
  console.log("run");
});
