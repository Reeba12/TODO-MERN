require("dotenv").config();
const express = require("express");
const DB = require("./config/db"); 
const cors = require("cors");
const todo = require("./routes/todoRoutes");

const app = express();
DB();

app.use(cors({ origin: true, credentials: true }));

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));
app.use("/api/todo", todo);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
