const { Client } = require("pg"); // imports the pg module

const client = new Client({
  connectionString:
    process.env.DATABASE_URL ||
    "postgres://tylerwright:root@localhost:5432/chimichanga",
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});

async function createChimi({ name, price }) {
  try {
    const {
      rows: [chimi],
    } = await client.query(
      `
      INSERT INTO chimichangas(name, price) 
      VALUES($1, $2) 
      ON CONFLICT (name) DO NOTHING 
      RETURNING *;
    `,
      [name, price]
    );

    return chimi;
  } catch (error) {
    throw error;
  }
}

async function getAllChimis() {
  try {
    const { rows } = await client.query(`
    SELECT id, name, price FROM chimichangas;
    `);

    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { client, createChimi, getAllChimis };
