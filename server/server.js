const express = require("express");
const app = express();
require("dotenv");

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send('sup')
});


app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
