const Sequelize = require("sequelize");
const database = require("../../../config/db");

const Author = database.sequelize.define(
  "Author",
  {
    id: {
      type: Sequelize.STRING,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: "id",
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "name",
    },
    biography: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "biography",
    },
    birthDate: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      field: "data_nasc",
    },
  },
  {
    timestamps: false,
    tableName: "table_autor",
  }
);

module.exports = Author;
