const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(port));

app.get("/backend", (req, res) => {
  res.send({ express: "connected" });
});
