const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("./public/"));

app.get('/', (_req, response) => {
  response.status(200).sendFile("./index.html", );
});


app.listen(port, () => {
  console.log(`App listening on ${port}`);
});

