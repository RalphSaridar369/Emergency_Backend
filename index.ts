const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req: any, res: any) => {
  res.send("Hello World this is the first app");
});


app.get("/test", (req: any, res: any) => {
  res.send("A different message to see if I can access");
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
