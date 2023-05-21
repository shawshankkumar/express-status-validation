const express = require("express");
const expressStatusValidate = require("express-status-validate");

const app = express();

//comment out the next line to see how express will crash.
app.use(expressStatusValidate(200));

app.get("/healthcheck", (req, res) => {
  //This should throw an error and crash an application but it doesn't thanks to me.
  res.status(200123).send("OK");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
