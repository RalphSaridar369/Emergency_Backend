const express = require("express");

const app = express();
const port = 443;

app.get("/", (req: any, res: any) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
