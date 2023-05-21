import express from "express";
import expressStatusValidate from "express-status-validate";

const app = express();

app.use(expressStatusValidate(200));

app.get('/healthcheck', (req, res) => {
    res.status(3011).send('OK');
})

app.listen(3000, () => {
  console.log("App started at 3000");
});
