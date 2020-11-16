const express = require("express");
const { Sequelize, Model, DataTypes } = require("sequelize");

const app = express();
const port = 8001;

// const sequelize = new Sequelize("sqlite::memory");
const sequelize = new Sequelize("db", "user", "pass", {
  host: "localhost",
  dialect: "sqlite",
  storage: "db.sqlite",
});

// TEST models here

(async () => {
  await sequelize.sync({ force: true });
  // your queries here
 
})();

app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
