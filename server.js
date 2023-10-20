const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

// Configure the PostgreSQL connection
const pool = new Pool({
  connectionString:
    "postgres://wdwgpubk:Y54mPaFtFAkEHk0Pb9VjglhzMopuh1uG@rain.db.elephantsql.com/wdwgpubk",
});

// Handle database connection errors
pool.on("error", (err) => {
  console.error("Unexpected error on idle client:", err);
  process.exit(-1);
});

async function initializeDatabase() {
  try {
    const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id serial PRIMARY KEY,
                username text,
                email text
            );
        `;

    await pool.query(createTableQuery);

    const insertDummyDataQuery = `
            INSERT INTO users (username, email)
            VALUES
            ('user1', 'user1@example.com'),
            ('user2', 'user2@example.com');
        `;

    await pool.query(insertDummyDataQuery);

    console.log("Table created and dummy records inserted.");
  } catch (error) {
    console.error("Error initializing the database:", error);
    process.exit(-1);
  }
}

initializeDatabase();
// Your routes and other middleware...
app.get("/getUsers", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    console.error("Error executing PostgreSQL query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
