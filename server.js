const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(port));

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build"))); // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.get("/backend", (req, res) => {
  res.send({ express: "connected" });
});
