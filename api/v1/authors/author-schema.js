const Joi = require("joi");

const authorSchema = {
  payload: Joi.object({
    name: Joi.string().min(3).max(90).required(),
    biography: Joi.string().min(10).max(1600),
    birthDate: Joi.date().iso(),
  }),
};

const getById = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

const getAuthors = {
  query: Joi.object({
    name: Joi.string().min(1),
    biography: Joi.string().min(1),
    birthDate: Joi.date().iso(),
  }),
};

const deleteById = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

module.exports = {
  authorSchema,
  getById,
  getAuthors,
  deleteById,
};
