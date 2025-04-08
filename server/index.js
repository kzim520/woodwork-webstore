const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on http://localhost:${PORT}`);
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});