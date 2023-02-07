const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "OK" });
});

let port = process.env.PORT || 8080;
app.listen(port, () => console.log("server run at port 3000"));
