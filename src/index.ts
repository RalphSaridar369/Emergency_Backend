import express from "express";

const app = express();
const port = 9000;

app.get("/api", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
