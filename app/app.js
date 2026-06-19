const express = require("express");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    application: "SecureVote",
    status: "running"
  });
});

module.exports = app;