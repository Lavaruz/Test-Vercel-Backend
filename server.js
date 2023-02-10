const express = require("express");
const axios = require('axios')

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get('/joke', async (req,res) => {
  await axios.get('https://v2.jokeapi.dev/joke/Any').then(result => {
    res.json(result.data)
  })
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log("Running on port" + PORT);
});

// Export the Express API
module.exports = app;