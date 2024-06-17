const Sequelize = require("sequelize");
const database = require("../../../config/db");

const Book = database.sequelize.define(
  "Book",
  {
    id: {
      type: Sequelize.STRING,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: "id",
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "title",
    },
    authorId: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "author_id",
      references: {
        model: "Author",
        key: "id",
      },
    },
    publishedDate: {
      type: Sequelize.DATEONLY,
      allowNull: true,
      field: "date_published",
    },
    isbn: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "isbn",
    },
    summary: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "resume",
    },
  },
  {
    timestamps: false,
    tableName: "table_book",
  }
);

module.exports = Book;
