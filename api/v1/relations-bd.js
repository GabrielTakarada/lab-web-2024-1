const Author = require("./authors/author-model");
const Book = require("./book/book-model");

Author.hasMany(Book, { foreignKey: "authorId", as: "books" });
Book.belongsTo(Author, { foreignKey: "authorId" });

module.exports = {
  Author,
  Book,
};
