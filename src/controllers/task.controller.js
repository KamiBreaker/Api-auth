const pool = require("../config/db");

const getTasks = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM tasks WHERE user_id = $1", [req.user.id]);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const createTask = async (req, res) => {
    const { title } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO tasks (title, user_id) VALUES ($1, $2) RETURNING *",
            [title, req.user.id]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    try {
        const result = await pool.query(
            "UPDATE tasks SET completed = $1 WHERE id = $2 AND user_id = $3 RETURNING *",
            [completed, id, req.user.id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            "DELETE FROM tasks WHERE id = $1 AND user_id = $2 RETURNING *",
            [id, req.user.id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({ message: "Task deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
