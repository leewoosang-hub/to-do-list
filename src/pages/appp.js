const express = require("express");
const cors = require("cors");
const { Pool, Result } = require("pg");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "dydgml6501",
  port: "5432",
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

pool.connect();

app.get("/fruit/all", async (req, res) => {
  const result = await pool.query("SELECT * FROM fruit_world");
  res.send(result.rows);
});

app.get("/fruit/:id", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM public.fruit_world WHERE fruit_id = $1",
    [req.params.id]
  );
  res.send(result.rows[0].fruit_img);
});

app.post("/fruit/reg", async (req, res) => {
  const { id, img } = req.body;
  const result = await pool.query(
    "INSERT INTO fruit_world (fruit_id, fruit_img) VALUES ($1,$2)",
    [id, img]
  );
  if (result.rowCount === 1) {
    const fruitResult = await pool.query("SELECT * FROM fruit_world");
    res.send(fruitResult.rows);
  }
});

app.delete("/fruit/del/:id", async (req, res) => {
  const result = await pool.query(
    "DELETE FROM fruit_world WHERE fruit_id = $1",
    [req.params.id]
  );
  if (result.rowCount === 1) {
    const fruitResult = await pool.query("SELECT * FROM fruit_world");
    res.send(fruitResult.rows);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
