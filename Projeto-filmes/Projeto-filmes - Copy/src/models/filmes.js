import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"

export const Filme = sequelize.define("Filme", {
  titulo: DataTypes.STRING,
  genero: DataTypes.STRING,
  ano: DataTypes.INTEGER
})