const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
const routes = require("./routes");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/", express.static("public"));
app.use("/api", routes.products);

app.listen(port, () => {
  console.log(`Escuchando el puerto http://localhost:${port}`);
});
