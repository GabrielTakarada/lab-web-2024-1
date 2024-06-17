const Author = require("../authors/author-model");
const Book = require("./book-model");
const { Op } = require("sequelize");

const save = async (book) => {
  try {
    return await Book.create(book);
  } catch (error) {
    throw new Error("Can't save the book");
  }
};

const findAll = async (filter) => {
  const { title, authorName } = filter;

  const whereClause = {};
  if (title) whereClause.title = { [Op.iLike]: `${title}%` };

  try {
    return await Book.findAll({
      include: [
        {
          model: Author,
          required: true,
          where: authorName ? { name: { [Op.iLike]: `${authorName}%` } } : {},
        },
      ],
      where: whereClause,
    });
  } catch (error) {
    throw new Error("Can't find a book");
  }
};

const findById = async (id) => {
  try {
    return await Book.findOne({
      include: [
        {
          model: Author,
          required: false,
        },
      ],
      where: { id },
    });
  } catch (error) {
    throw new Error("Can't search a book");
  }
};

module.exports = {
  save,
  findAll,
  findById,
};
