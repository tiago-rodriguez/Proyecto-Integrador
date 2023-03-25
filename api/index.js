//Configuracion basica de un server
const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");

const db = require("./config/db");
const envs = require("./config/envs");

const authAPI = require("./routes");
const cors = require("cors");
const volleyball = require("volleyball");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(volleyball);

app.use("/api", authAPI);
//conexion a una db
db.sync({ force: false }).then(() => {
  //SI VES ESTO REINICIA LA BASE DE DATOS!!!!!!!
  console.log("Db connected");
  app.listen(3001, () => {
    console.log(`Server listening at port ${3001}`);
  });
});
