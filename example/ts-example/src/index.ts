import express from "express";
import expressStatusValidate from "express-status-validate";

const app = express();

app.use(expressStatusValidate);

app.get('/healthcheck', (req, res) => {
    res.status(20020).send('OK');
})

app.listen(3000, () => {
  console.log("App started at 3000");
});
