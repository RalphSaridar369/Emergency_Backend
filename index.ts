const express = require("express");

import authRouter from "./routers/auth";

const app = express();
const port = 443;

//adding routers
app.use("/api", [authRouter]);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
