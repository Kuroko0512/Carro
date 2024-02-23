require("dotenv").config();

module.exports = {
  DB_HOST: process.env.DB_HOST || "carrito.mysql.database.azure.com",
  DB_USER: process.env.DB_USER || "carrito",
  DB_PASS: process.env.DB_PASS || "Restaurante0",
  DB_NAME: process.env.DB_NAME || "carritoprueba",
};