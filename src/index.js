const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

//db
require("./config");

//Routes
const todo = require("./routes/todoRoute");

// Express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use("/todos", todo);
let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
