const { Client } = require('pg');
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const pool = require("./database");

app.post("/usersadd", async (req, res) => {
    try {
        const { email, password, is_admin } = req.body;
        const query =
            "INSERT INTO users (email, password, is_admin) VALUES ($1, $2, $3) RETURNING *";
        const values = [email, password, is_admin || false];
        const result = await pool.query(query, values);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to add user" });
    }
});

app.get("/userslist", async (req, res) => {
    try {
        const query = "SELECT * FROM users";
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

app.get("/userslist/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const query = "SELECT * FROM users WHERE id = $1";
        const values = [id];
        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to fetch user" });
    }
});

app.put("/usersupdate/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { email, password, is_admin } = req.body;
        const query =
            "UPDATE users SET email = $1, password = $2, is_admin = $3 WHERE id = $4 RETURNING *";
        const values = [email, password, is_admin, id];
        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({
            message: "User updated successfully",
            user: result.rows[0],
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to update user" });
    }
});

app.delete("/usersdelete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const query = "DELETE FROM users WHERE id = $1 RETURNING *";
        const values = [id];
        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({
            message: "User deleted successfully",
            user: result.rows[0],
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to delete user" });
    }
});


app.post("/productscreate", async(req, res) => {
    try {
        const { name, category, type, image_url, description, price } = req.body;
        const query = "INSERT INTO products (name, category, type, image_url, description, price) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;";
        const values = [name, category, type, image_url, description, price];
        const result = await pool.query(query, values);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/products", async(req, res) => {
    try {
        const query = "SELECT * FROM products";
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/productsget/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const query = "SELECT * FROM products WHERE id = $1";
        const values = [id];
        const result = await pool.query(query, values);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/productsupdate/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { name, category, type, image_url, description, price } = req.body;
        const query = "UPDATE products SET name = $1, category = $2, type = $3, image_url = $4, description = $5, price = $6 WHERE id = $7 RETURNING *;";
        const values = [name, category, type, image_url, description, price, id];
        const result = await pool.query(query, values);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/productsdelete/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const values = [id];
        const query = "DELETE FROM products WHERE id = $1;";
        await pool.query(query, values);
        res.send(`Product with ID ${id} deleted`);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
