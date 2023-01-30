//Configuracion basica de un server
const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");

const db = require("./config/db");
const envs = require("./config/envs");

const authAPI = require("./routes");

app.use(express.static(path.resolve(__dirname, "public")));

app.use(express.json());
app.use(cookieParser());

app.use("/api", authAPI);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
//conexion a una db
db.sync({ force: false }).then(() => {
  console.log("Db connected");
  app.listen(3001, () => {
    console.log(`Server listening at port ${3001}`);
  });
});
