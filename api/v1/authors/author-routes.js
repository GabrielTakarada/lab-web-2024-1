const {
  getAuthors,
  create,
  findById,
  deleteById,
} = require("./author-controller");
const schema = require("./author-schema");

const plugin = {
  name: "author-v1-route",
  version: "1",
  register: (server) => {
    server.route([
      {
        method: "GET",
        path: "/author",
        options: {
          tags: ["api", "authors"],
          description: "List of all authors",
          handler: getAuthors,
        },
      },
      {
        method: "POST",
        path: "/author",
        options: {
          tags: ["api", "authors"],
          description: "Implements a new author",
          handler: create,
          validate: schema.authorSchema,
        },
      },
      {
        method: "GET",
        path: "/author/{id}",
        options: {
          tags: ["api", "authors"],
          description: "Details to one author required",
          handler: findById,
          validate: schema.getById,
        },
      },
      {
        method: "DELETE",
        path: "/author/{id}",
        options: {
          tags: ["api", "authors"],
          description: "Remove the author",
          handler: deleteById,
          validate: schema.deleteById,
        },
      },
    ]);
  },
};

module.exports = plugin;
