const Author = require("./author-model");
const { Op } = require("sequelize");
const Book = require("../books/book-model");

const save = async (author) => {
  try {
    return await Author.create(author);
  } catch (error) {
    throw new Error("Erro ao salvar o autor.");
  }
};

const findAll = async (filter) => {
  const { name, birthDate, biography } = filter;

  const whereClause = {};
  if (name) whereClause.name = { [Op.iLike]: `${name}%` };
  if (birthDate) whereClause.birthDate = { [Op.eq]: birthDate };
  if (biography) whereClause.biography = { [Op.iLike]: `%${biography}%` };

  try {
    return await Author.findAll({ where: whereClause });
  } catch (error) {
    throw new Error("Erro ao buscar autores.");
  }
};

const findById = async (id) => {
  try {
    return await Author.findOne({ where: { id } });
  } catch (error) {
    throw new Error("Erro ao buscar autor por ID.");
  }
};

const deleteById = async (id) => {
  try {
    const books = await Book.findOne({ where: { authorId: id } });
    if (books) {
      throw new Error(
        "O autor só pode ser deletado caso nenhum livro esteja relacionado a ele."
      );
    }
    await Author.destroy({ where: { id } });
  } catch (error) {
    if (error.message.includes("O autor só pode ser deletado")) {
      throw error;
    } else {
      throw new Error("Erro ao deletar autor.");
    }
  }
};

module.exports = {
  save,
  findAll,
  findById,
  deleteById,
};
