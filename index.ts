const express = require("express");
const container = require("./container");

import { scopePerRequest } from "awilix-express";
import userRouter from "./src/routers/user";
import volunteerRouter from "./src/routers/volunteer";

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(scopePerRequest(container));

//adding routers
app.use("/api", [userRouter, volunteerRouter]);
app.get("/", (req: any, res: any) => {
  res.send("Hello World this is the first app");
});

app.get("/test", (req: any, res: any) => {
  res.send("A different message to see if I can access");
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
