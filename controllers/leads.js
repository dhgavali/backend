import exporess from "express";
import Pool from "pg";

export const getUsers = app.get("/getUsers", async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM users");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing PostgreSQL query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// get all records
export const getLeads = app.get("/getLeads", async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM users");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing PostgreSQL query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//TODO:  fetch records with limits

export const getLimitedRows = app.get("/getLimitedRows", async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM users");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing PostgreSQL query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// TODO: fetch records with filters

export const getFiltered = app.get("/getFiltered", async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM users");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing PostgreSQL query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//   TODO: serach data
