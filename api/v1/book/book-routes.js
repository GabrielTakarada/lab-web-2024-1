const { getBooks, create, findById } = require("./book-controller");
const schema = require("./book-schema");

const plugin = {
  name: "book",
  version: "1",
  register: (server) => {
    server.route([
      {
        method: "GET",
        path: "/books",
        options: {
          tags: ["api", "books"],
          description: "Get all books",
          handler: getBooks,
          validate: schema.getBooks,
        },
      },
      {
        method: "POST",
        path: "/books",
        options: {
          tags: ["api", "books"],
          description: "Add a new book",
          handler: create,
          validate: schema.bookSchema,
        },
      },
      {
        method: "GET",
        path: "/books/{id}",
        options: {
          tags: ["api", "books"],
          description: "List a just one book",
          handler: findById,
          validate: schema.getById,
        },
      },
    ]);
  },
};

module.exports = plugin;
