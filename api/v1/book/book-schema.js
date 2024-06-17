const Joi = require("joi");

const bookSchema = {
  payload: Joi.object({
    title: Joi.string().min(1).max(160).required(),
    authorId: Joi.string().required(),
    publishedDate: Joi.date().iso(),
    isbn: Joi.string(),
    summary: Joi.string().max(1000),
  }),
};

const getById = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

const getBooks = {
  query: Joi.object({
    title: Joi.string().min(1),
    authorName: Joi.string().min(1),
  }),
};

module.exports = {
  bookSchema,
  getById,
  getBooks,
};
