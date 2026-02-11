const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");
const logger = require("./utils/logger");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(morgan("combined", { stream: { write: (message) => logger.info(message.trim()) } }));

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "Too many login attempts. Try again later.",
});

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the Secure Task API" });
});

app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

app.use("/api/auth/login", loginLimiter);
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

module.exports = app;
