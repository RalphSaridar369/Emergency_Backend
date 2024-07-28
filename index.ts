const express = require("express");

import authRouter from "./routers/auth";

const app = express();
const port = process.env.PORT || 8080;

//adding routers
app.use("/api", [authRouter]);
app.get("/", (req: any, res: any) => {
  res.send("Hello World this is the first app");
});

app.get("/test", (req: any, res: any) => {
  res.send("A different message to see if I can access");
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
