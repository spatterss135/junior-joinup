const express = require("express");
const app = express();
require("dotenv");

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send('sup')
});

// Controllers
const usersController = require('./controllers/users')
app.use('/users', usersController)
const projectController = require('./controllers/projects')
app.use('/projects', projectController)



app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
